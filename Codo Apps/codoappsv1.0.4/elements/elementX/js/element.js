/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 *
 * References
 * 1 : https://css-tricks.com/css3-progress-bars/
 * 2 : http://jsfiddle.net/rAQev/4/
 */

(function() {
    var ProgressBar = PlatformElement.extend({
        initialize: function() {
            // we normalize the styles on initial load.
            var progressId = this.settings.get("progressId");
            var progressPercentage = this.settings.get("progressPercentage");
            $(function() {
                var $el = $("#codo-progress-" + progressId);
                var $elBar = $("#codo-progress-" + progressId + "> div.barbg");
                var origWidth = progressPercentage + "%";
                $elBar.width(0);
                if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                    $elBar.css({"width": origWidth});
                }else{
                  $elBar.animate({width: origWidth}, 2000);  
                }
            });

            this.fixStyles();
        },

        /**
         * Lots of styles are applied by default to editable areas of
         * the editor. To make the element looks how you want, some styles
         * need to be overwritten.
         */
        fixStyles: function() {
            this.$('.editable-text').each(function(index, value) {
                $(value).attr('style', '');
            });

            this.$('.element').each(function(index, value) {
                $(value).attr('style', '');
            });
        }
    });

    return ProgressBar;
})();