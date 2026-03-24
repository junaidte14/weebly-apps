(function() {
    var CodoReadingProgressBar = PlatformElement.extend({
        initialize: function() {
            // Unique ID for this specific instance
            this.instanceId = this.$el.attr('id') || Math.random().toString(36).substring(2, 9);
            this.flashDone = false;

            this.fixStyles();
            this.$el.children('.platform-element-overlay').hide();
            this.setupScrollTracker();
        },

        fixStyles: function() {
            this.$('.editable-text, .element').attr('style', '');
        },

        calcProgress: function() {
            var scrollY = window.scrollY || document.documentElement.scrollTop;
            var total = document.body.scrollHeight - window.innerHeight;
            if (total <= 0) return 100;
            return Math.min(100, (scrollY / total) * 100);
        },

        updateBar: function() {
            var $fill = this.$('.codo_rpb_fill');
            var pct = this.calcProgress();
            $fill.css('width', pct + "%");
        },

        setupScrollTracker: function() {
            var binder = this.updateBar.bind(this);
            window.addEventListener("scroll", binder, { passive: true });
            window.addEventListener("resize", binder, { passive: true });
            this.updateBar();
        }
    });

    return CodoReadingProgressBar;
})();