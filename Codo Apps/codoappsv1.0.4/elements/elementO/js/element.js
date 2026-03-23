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

            // Use Weebly's internal model ID — same pattern as CountdownTimer.
            // Falls back to a random string if model.id is unavailable.
            var instanceId = (this.model && this.model.id)
                ? this.model.id
                : Math.random().toString(36).substring(2, 9);

            this.cookieKey = 'codo_eip_' + instanceId;

            // Config from data attributes — keeps manifest string-free.
            var delaySeconds = parseFloat(this.container.data('delay')) || 3;
            this.config = {
                mode   : this.container.data('trigger-mode') || 'exitintent',
                delay  : Math.max(delaySeconds, 0) * 1000,
                scroll : parseInt(this.container.data('scroll'), 10) || 50,
                days   : parseInt(this.container.data('cookie-days'), 10) || 1
            };

            this.triggered = false;

            this.applyImageStyle();

            if (!this.hasSeenPopup()) {
                this.setupTriggers();
            }

            // ESC key namespaced per instance
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
            return !!document.cookie.match(new RegExp('(^| )' + this.cookieKey + '=([^;]+)'));
        },

        setCookie: function() {
            if (this.config.days <= 0) return;
            var d = new Date();
            d.setTime(d.getTime() + this.config.days * 24 * 60 * 60 * 1000);
            document.cookie = this.cookieKey + '=1;expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
        },

        openPopup: function() {
            if (this.triggered) return;
            this.triggered = true;
            this.overlay.addClass('active');
            this.modal.addClass('active');
            $('body').css('overflow', 'hidden');
        },

        closePopup: function() {
            var self = this;
            this.overlay.addClass('closing');
            this.modal.addClass('closing');
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
                    var pct = ($(window).scrollTop() /
                              ($(document).height() - $(window).height())) * 100;
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