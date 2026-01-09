/**
 * Enhanced Timeline v2.0.0 - Frontend Element
 * Handles scroll animations and dynamic styling
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
            $(window).on('resize', function() {
                self.applyDynamicStyles();
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
            this.$('.editable-text, .element').attr('style', '');
        },

        /**
         * Apply dynamic styles based on settings
         */
        applyDynamicStyles: function() {
            var $timeline = this.$('.codo_timeline');
            
            $timeline.attr('data-icon-style', this.settings.get('iconStyle') || 'solid');
            $timeline.attr('data-show-connector', this.settings.get('showConnector') !== false);
            $timeline.attr('data-hover', this.settings.get('hoverEffect') !== false);
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
                
                // Observe each timeline item with staggered delay
                this.$('.codo_tm_container').each(function(index, element) {
                    observer.observe(element);
                    $(element).css('transition-delay', (index * 0.1) + 's');
                });
                
                this.observer = observer;
            } else {
                // Fallback for older browsers
                this.$('.codo_tm_container').addClass('aos-animate');
            }
        },

        /**
         * Called when settings are updated
         */
        onSettingsUpdate: function() {
            if (this.observer) {
                this.observer.disconnect();
            }
            this.init();
        },

        /**
         * Clean up on element removal
         */
        onRemove: function() {
            $(window).off('resize');
            if (this.observer) {
                this.observer.disconnect();
            }
        }
    });

    return Timeline;
})();