(function() {
    var CountdownTimer = PlatformElement.extend({
        initialize: function() {
            // Standard Weebly cleanup
            this.fixStyles();
            if (this.$el.children('.platform-element-overlay').length) {
                this.$el.children('.platform-element-overlay').hide();
            }

            // Start the timer logic
            this.startTimer();
        },

        startTimer: function() {
            var self = this;
            var timerMode = this.settings.get('timerMode');
            var evergreenMins = parseInt(this.settings.get('evergreenMinutes'), 10) || 60;
            var targetDateStr = this.settings.get('targetDate').replace(/["']/g, "");
            
            // Generate a unique key for this specific element instance using Weebly's internal ID
            var instanceId = (this.model && this.model.id) ? this.model.id : Math.random().toString(36).substring(2, 9);
            var targetTime;

            if (timerMode === "evergreen") {
                var storeKey = "codo_cd_eg_" + instanceId;
                var stored = sessionStorage.getItem(storeKey);
                if (stored) {
                    targetTime = parseInt(stored, 10);
                } else {
                    targetTime = Date.now() + (evergreenMins * 60 * 1000);
                    sessionStorage.setItem(storeKey, targetTime);
                }
            } else {
                targetTime = new Date(targetDateStr).getTime();
            }

            // Internal helper functions
            var pad = function(n) { return n < 10 ? "0" + n : "" + n; };

            // Replace your existing animFlip function with this:
            var animFlip = function($el, newVal) {
                if ($el.text() !== newVal) {
                    // 1. Remove the animation class
                    $el.removeClass("codo_flip_anim");
                    
                    // 2. Force a reflow (browser must calculate layout)
                    void $el[0].offsetWidth; 

                    // 3. Update text and re-apply class in the next paint frame
                    window.requestAnimationFrame(function() {
                        $el.text(newVal);
                        $el.addClass("codo_flip_anim");
                    });
                }
            };

            // Select elements scoped to this instance
            var $days = this.$('.codo_cd_days');
            var $hours = this.$('.codo_cd_hours');
            var $mins = this.$('.codo_cd_minutes');
            var $secs = this.$('.codo_cd_seconds');
            var $expMsg = this.$('.codo_countdown_expired');
            var $timerWrap = this.$('.codo_countdown_timer');

            var tick = function() {
                var diff = targetTime - Date.now();

                if (diff <= 0) {
                    if ($days.length) $days.text("00");
                    if ($hours.length) $hours.text("00");
                    $mins.text("00");
                    $secs.text("00");
                    $timerWrap.hide();
                    $expMsg.show();
                    return;
                }

                var days = Math.floor(diff / 86400000);
                var hours = Math.floor((diff % 86400000) / 3600000);
                var mins = Math.floor((diff % 3600000) / 60000);
                var secs = Math.floor((diff % 60000) / 1000);

                if ($days.length) animFlip($days, pad(days));
                if ($hours.length) animFlip($hours, pad(hours));
                animFlip($mins, pad(mins));
                animFlip($secs, pad(secs));

                // Store timeout ID so we can clear it if needed
                self.timerTimeout = setTimeout(tick, 1000);
            };

            tick();
        },

        fixStyles: function() {
            this.$('.editable-text, .element').attr('style', '');
        },

        // Clean up timeout when element is removed from editor
        remove: function() {
            if (this.timerTimeout) clearTimeout(this.timerTimeout);
            PlatformElement.prototype.remove.apply(this, arguments);
        }
    });

    return CountdownTimer;
})();