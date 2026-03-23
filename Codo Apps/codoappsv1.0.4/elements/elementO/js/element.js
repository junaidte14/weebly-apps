(function() {
    var ExitIntentPopup = PlatformElement.extend({

        events: {
            'click .codo_eip_close'   : 'closePopup',
            'click .codo_eip_overlay' : 'closePopup'
        },

        initialize: function() {
            this.fixStyles();
            this.$el.children('.platform-element-overlay').hide();

            this.container = this.$('.codo_eip_wrapper');
            this.overlay   = this.$('.codo_eip_overlay');
            this.modal     = this.$('.codo_eip_modal');

            // 1. Generate unique key based on Weebly's internal ID
            var instanceId = (this.$el.attr('id')) 
                ? this.$el.attr('id') 
                : Math.random().toString(36).substring(2, 9);
            
            this.cookieKey = 'codo_eip_' + instanceId;

            // 2. Configuration Setup
            var delaySeconds = parseFloat(this.container.data('delay')) || 3;
            this.config = {
                mode   : this.container.data('trigger-mode') || 'exitintent',
                delay  : Math.max(delaySeconds, 0) * 1000, // Convert to ms
                scroll : parseInt(this.container.data('scroll'), 10) || 50,
                days   : parseInt(this.container.data('cookie-days'), 10) // Default 0 from manifest
            };

            this.triggered = false;
            this.applyImageStyle();

            // 3. Professional Guard: If days is 0, ignore cookies and always show.
            if (this.config.days === 0 || !this.hasSeenPopup()) {
                this.setupTriggers();
            }

            // Global ESC key listener (namespaced to this instance)
            $(document).on('keydown.' + this.cookieKey, _.bind(function(e) {
                if (e.key === 'Escape') this.closePopup();
            }, this));
        },

        applyImageStyle: function() {
            var style = this.container.data('image-style') || 'none';
            if (style === 'cover')           this.modal.addClass('codo_eip_img_cover');
            else if (style === 'background') this.modal.addClass('codo_eip_img_background');
        },

        hasSeenPopup: function() {
            var match = document.cookie.match(new RegExp('(^| )' + this.cookieKey + '=([^;]+)'));
            
            // Cleanup: If a cookie exists but user set days to 0, delete it.
            if (match && this.config.days === 0) {
                document.cookie = this.cookieKey + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                return false;
            }
            return !!match;
        },

        setCookie: function() {
            // Guard: Do not set a cookie if user selected "Always Show" (0 days)
            if (this.config.days <= 0) return;

            var d = new Date();
            d.setTime(d.getTime() + this.config.days * 24 * 60 * 60 * 1000);
            document.cookie = this.cookieKey + '=1;expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
        },

        openPopup: function() {
            if (this.triggered) return;
            this.triggered = true;

            // Force reflow for clean CSS Keyframe triggering
            void this.overlay[0].offsetWidth;
            void this.modal[0].offsetWidth;

            window.requestAnimationFrame(_.bind(function() {
                this.overlay.addClass('active');
                this.modal.addClass('active');
                $('body').css('overflow', 'hidden');
            }, this));
        },

        closePopup: function() {
            var self = this;
            this.overlay.addClass('closing');
            this.modal.addClass('closing');

            // Wait for CSS animations (400ms) before removing from view logic
            setTimeout(function() {
                self.overlay.removeClass('active closing');
                self.modal.removeClass('active closing');
                $('body').css('overflow', '');
                self.setCookie();
            }, 400);
        },

        setupTriggers: function() {
            var self = this;
            var ns   = '.' + this.cookieKey;

            if (this.config.mode === 'exitintent') {
                $(document).on('mouseleave' + ns, function(e) {
                    if (e.clientY <= 20) {
                        self.openPopup();
                        $(document).off('mouseleave' + ns);
                    }
                });
            } else if (this.config.mode === 'delay') {
                this.delayTimer = setTimeout(function() { self.openPopup(); }, this.config.delay);
            } else if (this.config.mode === 'scroll') {
                $(window).on('scroll' + ns, function() {
                    var pct = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
                    if (pct >= self.config.scroll) {
                        self.openPopup();
                        $(window).off('scroll' + ns);
                    }
                });
            }
        },

        fixStyles: function() {
            this.$('.editable-text, .element').attr('style', '');
        },

        remove: function() {
            if (this.delayTimer) clearTimeout(this.delayTimer);
            $(document).off('.' + this.cookieKey);
            $(window).off('.' + this.cookieKey);
            PlatformElement.prototype.remove.apply(this, arguments);
        }
    });

    return ExitIntentPopup;
})();