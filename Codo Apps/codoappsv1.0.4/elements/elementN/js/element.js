(function() {
    var AnySlider = PlatformElement.extend({
        initialize: function() {
            this.fixStyles();
            if (this.$el.children('.platform-element-overlay').length) {
                this.$el.children('.platform-element-overlay').hide();
            }

            // State
            this.current = 0;
            this.timer = null;
            this.dots = [];
            
            // Settings
            this.total = parseInt(this.settings.get('numberOfSlides'), 10) || 1;
            this.doAuto = this.settings.get('autoplay') === true || this.settings.get('autoplay') === "true";
            
            // Interval Logic (Seconds to MS)
            var seconds = parseFloat(this.settings.get('autoplayInterval')) || 4;
            this.interval = Math.max(500, seconds * 1000); 

            // Scoped Elements
            this.$track = this.$('.codo_slider_track');
            this.$wrapper = this.$('.codo_slider_wrapper');
            this.$bar = this.$('.codo_slider_progress_bar');

            this.setupEvents();
            this.buildDots();
            
            // Final Sync: Jump to start
            this.goTo(0, true); 
            
            if (this.doAuto) {
                this.startAutoplay();
            }
        },

        setupEvents: function() {
            var self = this;

            this.$('.codo_slider_prev').on('click', function() {
                self.goTo(self.current - 1);
                self.resetAutoplay();
            });

            this.$('.codo_slider_next').on('click', function() {
                self.goTo(self.current + 1);
                self.resetAutoplay();
            });

            // Touch support with passive listeners for performance
            var touchStartX = 0;
            this.$track.on('touchstart', function(e) {
                touchStartX = e.originalEvent.touches[0].clientX;
            }, { passive: true });

            this.$track.on('touchend', function(e) {
                var diff = touchStartX - e.originalEvent.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) { // 50px threshold for accuracy
                    self.goTo(diff > 0 ? self.current + 1 : self.current - 1);
                    self.resetAutoplay();
                }
            }, { passive: true });

            // Hover: Accuracy fix - stop timer immediately on enter
            this.$wrapper.on('mouseenter', function() { 
                self.stopAutoplay(); 
            });
            
            this.$wrapper.on('mouseleave', function() { 
                if (self.doAuto) self.startAutoplay(); 
            });
        },

        buildDots: function() {
            var self = this;
            var $dotsContainer = this.$('.codo_slider_dots');
            if (!$dotsContainer.length) return;

            $dotsContainer.empty();
            this.dots = [];

            for (var i = 0; i < this.total; i++) {
                (function(idx) {
                    var $dot = $('<button>', {
                        class: 'codo_slider_dot',
                        'aria-label': 'Go to slide ' + (idx + 1)
                    });
                    
                    $dot.on('click', function() {
                        self.goTo(idx);
                        self.resetAutoplay();
                    });

                    $dotsContainer.append($dot);
                    self.dots.push($dot);
                })(i);
            }
        },

        /**
         * Core Navigation Logic
         * @param {number} idx - Target slide index
         * @param {boolean} silent - If true, skip progress bar reset (used for init)
         */
        goTo: function(idx, silent) {
            if (this.total <= 0) return;

            // Handle wrap-around
            if (idx < 0) idx = this.total - 1;
            if (idx >= this.total) idx = 0;
            
            this.current = idx;

            // 1. Move Track (Percentages are most accurate for CSS flex)
            this.$track.css({
                'transform': 'translateX(-' + (this.current * 100) + '%)'
            });
            
            // 2. Update Dots
            if (this.dots.length) {
                var self = this;
                this.dots.forEach(function($d, i) {
                    $d.toggleClass('active', i === self.current);
                });
            }

            // 3. Reset progress bar visually if not silent
            if (!silent && this.doAuto) {
                this.stopProgress();
            }
        },

        startProgress: function() {
            if (!this.$bar.length || !this.doAuto) return;
            
            // Ensure bar is at 0
            this.$bar.css({ transition: 'none', width: '0%' });
            
            // Force browser to acknowledge the 0% state before animating
            void this.$bar[0].offsetWidth; 

            // Start animation
            this.$bar.css({
                transition: 'width ' + this.interval + 'ms linear',
                width: '100%'
            });
        },

        stopProgress: function() {
            if (this.$bar.length) {
                this.$bar.css({ transition: 'none', width: '0%' });
            }
        },

        startAutoplay: function() {
            var self = this;
            if (!this.doAuto) return;
            
            this.stopAutoplay(); // Clear any existing timer
            this.startProgress();

            this.timer = setTimeout(function() {
                self.goTo(self.current + 1);
                self.startAutoplay();
            }, this.interval);
        },

        stopAutoplay: function() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.stopProgress();
        },

        resetAutoplay: function() {
            this.stopAutoplay();
            if (this.doAuto) {
                this.startAutoplay();
            }
        },

        fixStyles: function() {
            this.$('.editable-text, .element').attr('style', '');
        },

        remove: function() {
            this.stopAutoplay();
            PlatformElement.prototype.remove.apply(this, arguments);
        }
    });

    return AnySlider;
})();