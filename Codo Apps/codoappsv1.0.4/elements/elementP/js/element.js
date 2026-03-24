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

            // Professional Guard: If days is 0, we bypass the cookie check entirely
            if (this.config.days === 0 || !this.hasClosed()) {
                this.showBar();
            } else {
                this.hideBarInstant();
            }
        },

        hasClosed: function() {
            var match = document.cookie.match(new RegExp('(^| )' + this.cookieKey + '=([^;]+)'));
            
            // Cleanup: If a cookie exists but user changed settings to "Always Show" (0 days), 
            // delete the cookie so the bar reappears.
            if (match && this.config.days === 0) {
                document.cookie = this.cookieKey + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                return false;
            }
            return !!match;
        },

        showBar: function() {
            // Setup layout sync for visible bars
            var lazyLayout = _.debounce(_.bind(this.syncLayout, this), 100);
            setTimeout(_.bind(this.syncLayout, this), 100);
            $(window).on('resize.' + this.cookieKey, lazyLayout);
        },

        setCookie: function() {
            // Guard: Do not set a cookie if user selected "Always Show" (0 days)
            if (this.config.days <= 0) return;

            var d = new Date();
            d.setTime(d.getTime() + this.config.days * 24 * 60 * 60 * 1000);
            document.cookie = this.cookieKey + '=1;expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
        },

        syncLayout: function() {
            if (!this.config.showSpacer) return;

            var totalTopHeight = 0;
            $('.codo_abar_bar.codo_abar_top:not(.codo_abar_hidden)').each(function() {
                totalTopHeight += $(this).outerHeight();
            });

            var totalBottomHeight = 0;
            $('.codo_abar_bar.codo_abar_bottom:not(.codo_abar_hidden)').each(function() {
                totalBottomHeight += $(this).outerHeight();
            });

            $('body').css({
                'transition': 'padding 0.35s ease',
                'padding-top': totalTopHeight > 0 ? totalTopHeight + 'px' : '0',
                'padding-bottom': totalBottomHeight > 0 ? totalBottomHeight + 'px' : '0'
            });

            // Sync Header Shift
            $('.wsite-header-section, .wsite-nav-cart, .banner-wrap, #header, .header, .wsite-nav-inner').css({
                'transition': 'top 0.35s ease',
                'top': totalTopHeight > 0 ? totalTopHeight + 'px' : '0'
            });
        },

        hideBar: function() {
            this.$bar.addClass('codo_abar_hidden');
            this.setCookie();
            this.syncLayout();
            $(window).off('resize.' + this.cookieKey);
        },

        hideBarInstant: function() {
            this.$bar.addClass('codo_abar_hidden').css('transition', 'none');
        },

        fixStyles: function() {
            this.$('.editable-text, .element').attr('style', '');
        },

        remove: function() {
            $(window).off('resize.' + this.cookieKey);
            this.$bar.addClass('codo_abar_hidden');
            this.syncLayout();
            PlatformElement.prototype.remove.apply(this, arguments);
        }
    });

    return CodoAnnouncementBar;
})();