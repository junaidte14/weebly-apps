(function() {
    var CodoAnimation = PlatformElement.extend({
        initialize: function() {
            var self = this;
            setTimeout(function() {
                self.setup();
            }, 150);
        },

        setup: function() {
            var $container = this.$('.codo-anim-container');
            if (!$container.length) return;

            // 1. Extract Settings
            var data = $container.data();
            var settings = {
                anim: data.anim || 'fadeInUp',
                trig: data.trigger || 'scroll',
                dur:  data.duration,
                del:  data.delay,
                colorStyle: data.colorStyle,
                fill: data.fillColor,
                gFrom: data.gradFrom,
                gTo: data.gradTo
            };

            // 2. Apply Background Styles via JS
            var bgStyle = {};
            if (settings.colorStyle === 'gradient') {
                bgStyle['background'] = 'linear-gradient(135deg, ' + settings.gFrom + ', ' + settings.gTo + ')';
            } else {
                bgStyle['background-color'] = settings.fill;
            }
            $container.css(bgStyle);

            // 3. Animation Logic
            var runAnimation = function() {
                $container.addClass('codo-anim-active').css({
                    'animation-name': 'codo_' + settings.anim,
                    'animation-duration': settings.dur,
                    'animation-delay': settings.del,
                    'animation-timing-function': 'ease-out',
                    'animation-fill-mode': 'both'
                });
            };

            // 4. Trigger Handling
            if (settings.trig === 'hover') {
                $container.css('opacity', '1');
                $container.on('mouseenter', function() {
                    $container.css('animation-name', 'none');
                    $container[0].offsetHeight; // Flush CSS changes
                    runAnimation();
                });
            }else {
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            runAnimation();
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                observer.observe($container[0]);
            }
        }
    });

    return CodoAnimation;
})();