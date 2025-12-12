/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 *
 * we normalize the styles on initial load.
 */
(function() {
    var VideoLightbox = PlatformElement.extend({
        initialize: function() {
            // we normalize the styles on initial load.
            $(document).ready(function() {
                this.fixStyles();
                //First get the  iframe URL
                //var ytiframe = "#ytiframe" + ytiframeid;
                //var url = $(ytiframe).attr('src');
                //alert(url);

                //Then assign the src to null, this then stops the video been playing
                //$('#YourIFrameID').attr('src', '');

                // Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
                //$('#YourIFrameID').attr('src', url);
            }.bind(this));

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

    return VideoLightbox;
})();