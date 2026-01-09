/**
 * Enhanced Timeline v2.0.0 - Editor Element
 * Handles live preview of settings in the editor
 * @type {PlatformElement}
 */

(function() {
    var Timeline = PlatformElement.extend({
        initialize: function() {
            var self = this;
            
            // Initialize on DOM ready
            $(document).ready(function() {
                self.init();
            });
            
            // Also run immediately
            self.init();
        },

        /**
         * Main initialization
         */
        init: function() {
            try {
                this.normalizeStyles();
                this.applyDynamicStyles();
                this.makeItemsVisible();
                this.$el.children('.platform-element-overlay').hide();
            } catch (error) {
                console.error('[Timeline v2.0.0 Editor] Initialization error:', error);
            }
        },

        /**
         * Normalize editor styles
         */
        normalizeStyles: function() {
            this.$('.editable-text, .element').attr('style', '');
        },

        /**
         * Apply dynamic styles for editor preview
         */
        applyDynamicStyles: function() {
            var $timeline = this.$('.codo_timeline');
            
            $timeline.attr('data-icon-style', this.settings.get('iconStyle') || 'solid');
            $timeline.attr('data-show-connector', this.settings.get('showConnector') !== false);
            $timeline.attr('data-hover', this.settings.get('hoverEffect') !== false);
        },

        /**
         * Make all items visible immediately in editor (no animation delay)
         */
        makeItemsVisible: function() {
            this.$('.codo_tm_container').css({
                'opacity': '1',
                'transform': 'translateY(0)',
                'transition-delay': '0s'
            });
        },

        /**
         * Called when settings are updated
         */
        onSettingsUpdate: function() {
            this.init();
        },

        /**
         * Clean up on removal
         */
        onRemove: function() {
            // No cleanup needed for editor
        }
    });

    return Timeline;
})();