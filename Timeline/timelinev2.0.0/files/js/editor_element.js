/**
 * Enhanced Timeline v2.0.0 - Editor Element
 * Handles the editor display with live preview of all settings
 * @type {PlatformElement}
 */

(function() {
    var Timeline = PlatformElement.extend({
        initialize: function() {
            console.log('[Timeline v2.0.0 Editor] Initializing editor element');
            
            // Normalize styles on initial load
            $(document).ready(function() {
                try {
                    this.fixStyles();
                    this.applyDynamicStyles();
                    this.setupEditorPreview();
                    
                    // Hide platform overlay
                    this.$el.children('.platform-element-overlay').hide();
                } catch (error) {
                    console.error('[Timeline v2.0.0 Editor] Error during initialization:', error);
                }
            }.bind(this));

            // Also run immediately
            try {
                this.fixStyles();
                this.applyDynamicStyles();
                this.setupEditorPreview();
            } catch (error) {
                console.error('[Timeline v2.0.0 Editor] Error during immediate initialization:', error);
            }
        },

        /**
         * Normalize default editor styles to prevent conflicts
         */
        fixStyles: function() {
            try {
                this.$('.editable-text').each(function(index, value) {
                    $(value).attr('style', '');
                });

                this.$('.element').each(function(index, value) {
                    $(value).attr('style', '');
                });
            } catch (error) {
                console.error('[Timeline v2.0.0 Editor] Error fixing styles:', error);
            }
        },

        /**
         * Apply dynamic styles based on settings for editor preview
         */
        applyDynamicStyles: function() {
            try {
                var self = this;
                var $timeline = this.$('.codo_timeline');
                
                // Apply icon style
                var iconStyle = this.settings.get('iconStyle') || 'solid';
                $timeline.attr('data-icon-style', iconStyle);
                console.log('[Timeline v2.0.0 Editor] Icon style:', iconStyle);
                
                // Apply connector visibility
                var showConnector = this.settings.get('showConnector');
                $timeline.attr('data-show-connector', showConnector !== false);
                console.log('[Timeline v2.0.0 Editor] Show connector:', showConnector !== false);
                
                // Apply shadow setting
                var enableShadow = this.settings.get('enableShadow');
                $timeline.attr('data-shadow', enableShadow !== false);
                console.log('[Timeline v2.0.0 Editor] Enable shadow:', enableShadow !== false);
                
                // Apply hover effect
                var hoverEffect = this.settings.get('hoverEffect');
                $timeline.attr('data-hover', hoverEffect !== false);
                console.log('[Timeline v2.0.0 Editor] Hover effect:', hoverEffect !== false);
                
                // Make all items visible in editor (no animation delay)
                this.$('.codo_tm_container').css({
                    'opacity': '1',
                    'transform': 'translateY(0)',
                    'transition-delay': '0s'
                });
                
            } catch (error) {
                console.error('[Timeline v2.0.0 Editor] Error applying dynamic styles:', error);
            }
        },

        /**
         * Setup editor-specific preview features
         */
        setupEditorPreview: function() {
            try {
                var self = this;
                
                // Add visual indicators for editable areas
                this.$('.codo_tm_content').each(function() {
                    $(this).attr('title', 'Click to edit content');
                });
                
                // Show layout guides in editor
                var layout = this.settings.get('timelineLayout') || 'alternating';
                console.log('[Timeline v2.0.0 Editor] Layout:', layout);
                
            } catch (error) {
                console.error('[Timeline v2.0.0 Editor] Error setting up preview:', error);
            }
        },

        /**
         * Called when settings are updated in the editor
         */
        onSettingsUpdate: function() {
            try {
                console.log('[Timeline v2.0.0 Editor] Settings updated');
                this.fixStyles();
                this.applyDynamicStyles();
                this.setupEditorPreview();
            } catch (error) {
                console.error('[Timeline v2.0.0 Editor] Error updating settings:', error);
            }
        },

        /**
         * Clean up when element is removed
         */
        onRemove: function() {
            try {
                // Remove any event handlers
                this.$('.codo_tm_content').off('click');
            } catch (error) {
                console.error('[Timeline v2.0.0 Editor] Error during cleanup:', error);
            }
        }
    });

    return Timeline;
})();