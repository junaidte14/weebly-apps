/**
 * Enhanced Timeline v2.0.0 - Frontend Element
 * Handles scroll animations and dynamic styling
 * 100% Backward Compatible
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
            
            // Also run immediately in case DOM is already ready
            self.init();
            
            // Handle window resize
            $(window).on('resize.timeline', function() {
                self.handleResize();
            });
        },

        /**
         * Main initialization
         */
        init: function() {
            try {
                this.normalizeStyles();
                this.applyDynamicStyles();
                this.initializeAnimations();
                this.$el.children('.platform-element-overlay').hide();
            } catch (error) {
                console.error('[Timeline v2.0.0] Initialization error:', error);
            }
        },

        /**
         * Normalize editor styles
         */
        normalizeStyles: function() {
            this.$('.editable-text').each(function(index, value) {
                $(value).attr('style', '');
            });

            this.$('.element').each(function(index, value) {
                $(value).attr('style', '');
            });
        },

        /**
         * Apply dynamic styles based on settings
         */
        applyDynamicStyles: function() {
            var $timeline = this.$('.codo_timeline');
            var $container = this.$('.codotimeline_container');
            
            // Apply hover effect setting
            var hoverEffect = this.settings.get('hoverEffect');
            $timeline.attr('data-hover', hoverEffect !== false);
            
            // Apply animation style
            var animationStyle = this.settings.get('animationStyle') || 'fade';
            $container.attr('data-animation', animationStyle);
            
            // Apply connector visibility
            var showConnector = this.settings.get('showConnector');
            if (showConnector === false) {
                this.$('.codo_tm_container::before').css('display', 'none');
            }
        },

        /**
         * Initialize scroll-based animations
         */
        initializeAnimations: function() {
            var animationStyle = this.settings.get('animationStyle') || 'fade';
            
            // Skip animations if disabled
            if (animationStyle === 'none') {
                this.$('.codo_tm_container').addClass('aos-animate');
                return;
            }
            
            // Use Intersection Observer for scroll animations
            if ('IntersectionObserver' in window) {
                var options = {
                    root: null,
                    rootMargin: '0px 0px -10% 0px',
                    threshold: 0.1
                };
                
                var self = this;
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            $(entry.target).addClass('aos-animate');
                            // Optionally unobserve after animation
                            // observer.unobserve(entry.target);
                        }
                    });
                }, options);
                
                // Observe each timeline item with staggered delay
                this.$('.codo_tm_container').each(function(index, element) {
                    observer.observe(element);
                    
                    // Add staggered delay for animation
                    var delay = index * 0.15; // 150ms between each item
                    $(element).css('transition-delay', delay + 's');
                });
                
                // Store observer for cleanup
                this.observer = observer;
            } else {
                // Fallback for older browsers - show all items
                this.$('.codo_tm_container').addClass('aos-animate');
            }
        },

        /**
         * Handle window resize
         */
        handleResize: function() {
            // Reapply layout on resize to handle responsive changes
            this.applyLayout();
        },

        /**
         * Called when settings are updated
         */
        onSettingsUpdate: function() {
            // Clean up existing observer
            if (this.observer) {
                this.observer.disconnect();
            }
            
            // Reinitialize everything
            this.init();
        },

        /**
         * Clean up on element removal
         */
        onRemove: function() {
            // Remove event handlers
            $(window).off('resize.timeline');
            
            // Disconnect observer
            if (this.observer) {
                this.observer.disconnect();
            }
        }
    });

    return Timeline;
})();