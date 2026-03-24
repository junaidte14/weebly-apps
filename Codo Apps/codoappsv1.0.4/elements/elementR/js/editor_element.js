(function() {
    var CodoReadingProgressBar = PlatformElement.extend({
        initialize: function() {
            $(document).ready(function() {
                this.fixStyles();
                this.$el.children('.platform-element-overlay').hide();
            }.bind(this));

            this.fixStyles();
        },

        fixStyles: function() {
            this.$('.editable-text').each(function(index, value) {
                $(value).attr('style', '');
            });

            this.$('.element').each(function(index, value) {
                $(value).attr('style', '');
            });
        }
    });

    return CodoReadingProgressBar;
})();