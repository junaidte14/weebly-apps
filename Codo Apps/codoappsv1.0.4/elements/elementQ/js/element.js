(function() {
    var CodoBackToTop = PlatformElement.extend({
        initialize: function() {
            this.$btn = this.$('.codo_btt_btn');
            var instanceId = this.$el.attr('id') || Math.random().toString(36).substring(2, 9);
            this.ns = '.btt_' + instanceId;

            this.config = {
                showAfterPx : parseInt(this.$btn.data('show-after'), 10) || 300
            };

            this.$btn.on('click' + this.ns, function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            $(window).on('scroll' + this.ns, _.bind(this.onScroll, this));
            this.onScroll();
        },

        onScroll: function() {
            var scrollY = window.scrollY || document.documentElement.scrollTop;
            if (scrollY > this.config.showAfterPx) this.$btn.addClass('codo_btt_visible');
            else this.$btn.removeClass('codo_btt_visible');
        },

        remove: function() {
            $(window).off(this.ns);
            PlatformElement.prototype.remove.apply(this, arguments);
        }
    });
    return CodoBackToTop;
})();