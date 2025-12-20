/**
 * Colored Lines - Editor Element v1.0.2
 * This file handles the editor display only
 * @type {PlatformElement}
 */

(function() {
    var ColoredLines = PlatformElement.extend({
        initialize: function() {
            // Normalize styles on initial load
            $(document).ready(function() {
                this.fixStyles();
                this.applyEditorStyles();
                
                // Hide platform overlay
                this.$el.children('.platform-element-overlay').hide();
            }.bind(this));

            this.fixStyles();
            this.applyEditorStyles();
        },

        /**
         * Normalize default editor styles to prevent conflicts
         */
        fixStyles: function() {
            this.$('.editable-text').each(function(index, value) {
                $(value).attr('style', '');
            });

            this.$('.element').each(function(index, value) {
                $(value).attr('style', '');
            });
        },

        /**
         * Apply editor-specific styles
         */
        applyEditorStyles: function() {
            try {
                
                // Apply any gradient effects for preview
                this.$('.line-element[data-gradient="true"]').each(function() {
                    var $line = $(this);
                    var gradientColor = $line.attr('data-gradient-color');
                    var gradientDir = $line.attr('data-gradient-dir');
                    var lineColor = $line.css('background-color');
                    
                    if (gradientColor && gradientDir) {
                        $line.css('background', 'linear-gradient(' + gradientDir + ', ' + lineColor + ', ' + gradientColor + ')');
                        console.log('[Colored Lines Editor] Applied gradient');
                    }
                });
                
                // Apply glow effects for preview
                this.$('.line-element[data-glow="true"]').each(function() {
                    var $line = $(this);
                    var glowIntensity = $line.attr('data-glow-intensity') || '10';
                    var glowColor = $line.attr('data-glow-color') || '#ffffff';
                    
                    var currentShadow = $line.css('box-shadow');
                    var glowShadow = '0 0 ' + glowIntensity + 'px ' + glowColor;
                    
                    if (currentShadow && currentShadow !== 'none') {
                        $line.css('box-shadow', glowShadow + ', ' + currentShadow);
                    } else {
                        $line.css('box-shadow', glowShadow);
                    }
                });
                
            } catch (error) {
                console.error('[Colored Lines Editor] Error applying styles:', error);
            }
        },

        /**
         * Called when settings are updated in the editor
         */
        onSettingsUpdate: function() {
            this.fixStyles();
            this.applyEditorStyles();
        }
    });

    return ColoredLines;
})();