/**
 * Enhanced Timeline v2.0.0 - Frontend Element
 * Includes scroll animations, layout variations, and enhanced interactivity
 * @type {PlatformElement}
 */

(function() {
    var Timeline = PlatformElement.extend({
        initialize: function() {
            console.log('[Timeline v2.0.0] Initializing frontend element');
            
            // Normalize styles on initial load
            $(document).ready(function() {
                try {
                    this.fixStyles();
                    this.applyDynamicStyles();
                    this.initializeAnimations();
                    this.setupEventHandlers();
                    
                    // Hide platform overlay
                    this.$el.children('.platform-element-overlay').hide();
                } catch (error) {
                    console.error('[Timeline v2.0.0] Error during initialization:', error);
                }
            }.bind(this));

            // Also run immediately
            try {
                this.fixStyles();
                this.applyDynamicStyles();
                this.initializeAnimations();
                this.setupEventHandlers();
            } catch (error) {
                console.error('[Timeline v2.0.0] Error during immediate initialization:', error);
            }
            
            // Re-initialize on window resize
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
                console.error('[Timeline v2.0.0] Error fixing styles:', error);
            }
        },

        /**
         * Apply dynamic styles based on settings
         */
        applyDynamicStyles: function() {
            try {
                var self = this;
                var $timeline = this.$('.codo_timeline');
                
                // Apply icon style
                var iconStyle = this.settings.get('iconStyle') || 'solid';
                $timeline.attr('data-icon-style', iconStyle);
                
                // Apply connector visibility
                var showConnector = this.settings.get('showConnector');
                $timeline.attr('data-show-connector', showConnector !== false);
                
                // Apply shadow setting
                var enableShadow = this.settings.get('enableShadow');
                $timeline.attr('data-shadow', enableShadow !== false);
                
                // Apply hover effect
                var hoverEffect = this.settings.get('hoverEffect');
                $timeline.attr('data-hover', hoverEffect !== false);
                
            } catch (error) {
                console.error('[Timeline v2.0.0] Error applying dynamic styles:', error);
            }
        },

        /**
         * Initialize scroll-based animations
         */
        initializeAnimations: function() {
            try {
                var self = this;
                var animationStyle = this.settings.get('animationStyle') || 'fade';
                
                // Skip if animations are disabled
                if (animationStyle === 'none') {
                    this.$('.codo_tm_container').addClass('aos-animate');
                    return;
                }
                
                // Create intersection observer for scroll animations
                if ('IntersectionObserver' in window) {
                    var options = {
                        root: null,
                        rootMargin: '0px',
                        threshold: 0.1
                    };
                    
                    var observer = new IntersectionObserver(function(entries) {
                        entries.forEach(function(entry) {
                            if (entry.isIntersecting) {
                                $(entry.target).addClass('aos-animate');
                            }
                        });
                    }, options);
                    
                    // Observe all timeline items
                    this.$('.codo_tm_container').each(function(index, element) {
                        observer.observe(element);
                        
                        // Add staggered delay
                        $(element).css('transition-delay', (index * 0.1) + 's');
                    });
                    
                    // Store observer for cleanup
                    this.animationObserver = observer;
                } else {
                    // Fallback for browsers without IntersectionObserver
                    this.$('.codo_tm_container').addClass('aos-animate');
                }
                
            } catch (error) {
                console.error('[Timeline v2.0.0] Error initializing animations:', error);
            }
        },

        /**
         * Setup event handlers for interactive features
         */
        setupEventHandlers: function() {
            try {
                var self = this;
                
                // Add click tracking for analytics (if needed)
                this.$('.codo_tm_content').on('click', function(e) {
                    var index = $(this).closest('.codo_tm_container').attr('data-index');
                    // Could trigger custom events here for analytics
                });
                
            } catch (error) {
                console.error('[Timeline v2.0.0] Error setting up event handlers:', error);
            }
        },

        /**
         * Handle window resize events
         */
        handleResize: function() {
            try {
                // Recalculate positions if needed
                this.applyDynamicStyles();
            } catch (error) {
                console.error('[Timeline v2.0.0] Error handling resize:', error);
            }
        },

        /**
         * Update element when settings change (if in editor)
         */
        onSettingsUpdate: function() {
            try {
                this.fixStyles();
                this.applyDynamicStyles();
                
                // Reinitialize animations with new settings
                if (this.animationObserver) {
                    this.animationObserver.disconnect();
                }
                this.initializeAnimations();
            } catch (error) {
                console.error('[Timeline v2.0.0] Error updating settings:', error);
            }
        },

        /**
         * Clean up when element is removed
         */
        onRemove: function() {
            try {
                $(window).off('resize', this.handleResize);
                
                if (this.animationObserver) {
                    this.animationObserver.disconnect();
                }
                
                // Remove event handlers
                this.$('.codo_tm_content').off('click');
            } catch (error) {
                console.error('[Timeline v2.0.0] Error during cleanup:', error);
            }
        }
    });

    return Timeline;
})();