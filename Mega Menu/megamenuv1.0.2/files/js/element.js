/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 *
 * we normalize the styles on initial load.
 */

(function() {
    var MegaMenu = PlatformElement.extend({
        initialize: function() {
            // we normalize the styles on initial load.
            $(document).ready(function() {
                this.fixStyles();
                this.$el.children('.platform-element-overlay').hide();

                $('body').prepend("<style>#wsite-menus,.wsite-menu{display: none;}@media(max-width: 992px){#wsite-menus,.wsite-menu{display: block;}}</style>");
                
                $('.wsite-menu-item-wrap').addClass('codo-mega-menu-item');
 
                $('.codo-mega-menu-item').hover(function() {
                    $('.codo-mega-menu-style').eq( $(this).index()).toggleClass('codo-slide');
                    $('.wsite-menu-item-wrap').eq( $(this).index()).toggleClass('codo-slide');
                });
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

    return MegaMenu;
})();