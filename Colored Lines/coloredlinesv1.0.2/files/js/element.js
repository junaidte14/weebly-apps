/**
 * Colored Lines - Frontend Element v1.0.2
 * This file handles the live site display with animations and effects
 * @type {PlatformElement}
 */

(function() {
    var ColoredLines = PlatformElement.extend({
        initialize: function() {
            // Normalize styles on initial load
            $(document).ready(function() {
                try {
                    this.fixStyles();
                    this.applyDynamicStyles();
                    this.initializeDecorations();
                } catch (error) {
                    console.error('[Colored Lines] Error during initialization:', error);
                }
            }.bind(this));

            // Also run immediately
            try {
                this.fixStyles();
                this.applyDynamicStyles();
                this.initializeDecorations();
            } catch (error) {
                console.error('[Colored Lines] Error during immediate initialization:', error);
            }
            
            // Re-initialize on window resize for responsive behavior
            $(window).on('resize', this.handleResize.bind(this));
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
                console.error('[Colored Lines] Error fixing styles:', error);
            }
        },

        /**
         * Apply dynamic styles based on data attributes
         */
        applyDynamicStyles: function() {
            var self = this;
            var stylesApplied = 0;
            
            this.$('.line-element').each(function() {
                try {
                    var $line = $(this);
                    
                    // Get data attributes (check for string "true" or boolean true)
                    var enableGradient = $line.attr('data-gradient') === 'true' || $line.attr('data-gradient') === true;
                    var enableGlow = $line.attr('data-glow') === 'true' || $line.attr('data-glow') === true;
                    
                    // Apply gradient
                    if (enableGradient) {
                        var gradientColor = $line.attr('data-gradient-color');
                        var gradientDir = $line.attr('data-gradient-dir');
                        var lineColor = $line.attr('data-line-color');
                        
                        if (gradientColor && gradientDir && lineColor) {
                            $line.css('background', 'linear-gradient(' + gradientDir + ', ' + lineColor + ', ' + gradientColor + ')');
                            stylesApplied++;
                        }
                    }
                    
                    // Apply shadow and/or glow
                    var boxShadow = '';
                    
                    if (enableGlow) {
                        var glowIntensity = $line.attr('data-glow-intensity') || '10';
                        var glowColor = $line.attr('data-glow-color') || '#ffffff';
                        var glowShadow = '0 0 ' + glowIntensity + 'px ' + glowColor;
                        
                        if (boxShadow) {
                            boxShadow = glowShadow + ', ' + boxShadow;
                        } else {
                            boxShadow = glowShadow;
                        }
                        stylesApplied++;
                    }
                    
                } catch (error) {
                    console.error('[Colored Lines] Error applying styles to line:', error);
                }
            });
            
        },

        /**
         * Initialize and render decorative elements
         */
        initializeDecorations: function() {
            
            try {
                var self = this;
                var decorationsFound = 0;
                
                // Handle decorative element colors
                this.$('.decoration-element').each(function() {
                    decorationsFound++;
                });
                
            } catch (error) {
                console.error('[Colored Lines] Error initializing decorations:', error);
            }
        },

        /**
         * Update element when settings change (editor mode)
         */
        onSettingsUpdate: function() {
            try {
                this.fixStyles();
                this.applyDynamicStyles();
                this.initializeDecorations();
            } catch (error) {
            }
        },

        /**
         * Clean up when element is removed
         */
        onRemove: function() {
            $(window).off('resize', this.handleResize);
        }
    });

    return ColoredLines;
})();