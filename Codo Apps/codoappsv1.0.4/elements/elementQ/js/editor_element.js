(function() {
    var CodoBackToTop = PlatformElement.extend({
        initialize: function() {
            this.fixStyles();
            this.$btn = this.$('.codo_btt_btn');
            if (this.$el.children('.platform-element-overlay').length) {
                this.$el.children('.platform-element-overlay').hide();
            }
        },

        fixStyles: function() {
            this.$('.editable-text, .element').attr('style', '');
        }
    });
    return CodoBackToTop;
})();