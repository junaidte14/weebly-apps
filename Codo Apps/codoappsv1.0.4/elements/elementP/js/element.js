(function() {
    var CodoAnnouncementBar = PlatformElement.extend({

        events: {
            'click .codo_abar_close': 'hideBar'
        },

        initialize: function() {
            this.fixStyles();
            this.$el.children('.platform-element-overlay').hide();

            this.$bar = this.$('.codo_abar_bar');
            
            var instanceId = this.$el.attr('id') 
                ? this.$el.attr('id') 
                : Math.random().toString(36).substring(2, 9);

            this.cookieKey = 'codo_abar_' + instanceId;

            var rawShowSpacer = this.$bar.data('show-spacer');
            
            this.config = {
                position   : this.$bar.data('position') || 'top',
                showSpacer : rawShowSpacer === true || rawShowSpacer === 'true' || rawShowSpacer == 1,
                days       : parseInt(this.$bar.data('cookie-days'), 10) || 0
            };

            if (this.hasClosed()) {
                this.hideBarInstant();
            } else {
                // Use a debounced resize to handle multiple bars shifting at once
                var lazyLayout = _.debounce(_.bind(this.syncLayout, this), 100);
                
                setTimeout(_.bind(this.syncLayout, this), 100);
                $(window).on('resize.' + this.cookieKey, lazyLayout);
            }
        },

        hasClosed: function() {
            return !!document.cookie.match(new RegExp('(^| )' + this.cookieKey + '=([^;]+)'));
        },

        setCookie: function() {
            if (this.config.days <= 0) return;
            var d = new Date();
            d.setTime(d.getTime() + this.config.days * 24 * 60 * 60 * 1000);
            document.cookie = this.cookieKey + '=1;expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
        },

        syncLayout: function() {
            if (!this.config.showSpacer) return;

            // Calculate TOTAL height of all visible TOP bars
            var totalTopHeight = 0;
            $('.codo_abar_bar.codo_abar_top:not(.codo_abar_hidden)').each(function() {
                totalTopHeight += $(this).outerHeight();
            });

            // Calculate TOTAL height of all visible BOTTOM bars
            var totalBottomHeight = 0;
            $('.codo_abar_bar.codo_abar_bottom:not(.codo_abar_hidden)').each(function() {
                totalBottomHeight += $(this).outerHeight();
            });

            // Apply cumulative padding to body
            $('body').css({
                'transition': 'padding 0.35s ease',
                'padding-top': totalTopHeight > 0 ? totalTopHeight + 'px' : '0',
                'padding-bottom': totalBottomHeight > 0 ? totalBottomHeight + 'px' : '0'
            });
        },

        hideBar: function() {
            this.$bar.addClass('codo_abar_hidden');
            this.setCookie();
            
            // Recalculate layout for remaining bars
            this.syncLayout();
            
            $(window).off('resize.' + this.cookieKey);
        },

        hideBarInstant: function() {
            this.$bar.addClass('codo_abar_hidden').css('transition', 'none');
            // Logic handled by other active instances or initial load
        },

        fixStyles: function() {
            this.$('.editable-text, .element').attr('style', '');
        },

        remove: function() {
            $(window).off('resize.' + this.cookieKey);
            this.$bar.addClass('codo_abar_hidden');
            this.syncLayout(); // Clean up body padding
            PlatformElement.prototype.remove.apply(this, arguments);
        }
    });

    return CodoAnnouncementBar;
})();