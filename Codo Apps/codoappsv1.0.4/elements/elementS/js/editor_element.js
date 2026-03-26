(function() {
    var CodoAnimation = PlatformElement.extend({
        initialize: function() {
            this.applyEditorStyles();
            this.fixStyles();
            
            // Hide the default Weebly overlay if it exists
            if (this.$el.children('.platform-element-overlay').length) {
                this.$el.children('.platform-element-overlay').hide();
            }
        },

        applyEditorStyles: function() {
            var $container = this.$('.codo-anim-container');
            if (!$container.length) return;

            // 1. Get settings from data attributes
            var style = $container.data('color-style');
            var fill = $container.data('fill-color');
            var gFrom = $container.data('grad-from');
            var gTo = $container.data('grad-to');

            // 2. Apply Background
            if (style === 'gradient') {
                $container.css({
                    'background': 'linear-gradient(135deg, ' + gFrom + ', ' + gTo + ')',
                    'background-color': 'transparent'
                });
            } else {
                $container.css({
                    'background': 'none',
                    'background-color': fill
                });
            }

            // 3. Ensure visibility in editor
            $container.css({
                'opacity': '1',
                'min-height': '50px',
                'display': 'block'
            });
        },

        fixStyles: function() {
            // Clears out any conflicting inline styles from nested elements
            this.$('.editable-text, .element').attr('style', '');
        }
    });

    return CodoAnimation;
})();