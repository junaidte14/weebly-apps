/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 *
 * we normalize the styles on initial load.
 */

(function() {
    var PostColumns = PlatformElement.extend({
        initialize: function() {
            // we normalize the styles on initial load.
            var cardGap = this.settings.get("cardGap");
            $(document).ready(function() {
                this.fixStyles();
                var newBlogColumnsClass = blogColumns;
                var expandPostsArea1 = expandPostsArea;
                var postStyleClass = postStyle;
                var customCardColorsClass = customCardColors;
                $('body.wsite-blog-index').addClass(newBlogColumnsClass);
                $('body.wsite-blog-index').addClass(expandPostsArea1);
                $('body.wsite-blog-index').addClass(postStyleClass);
                $('body.wsite-blog-index').addClass(customCardColorsClass);
                $("#blogTable").append("<style>body.blog-columns-3 .wsite-blog-index #wsite-content{display:block;}.wsite-blog-index.blog-columns-3 .blog-post {width:32.3%;padding:1em;box-sizing:border-box;display: block;float: left;margin: 0 0.5%;}.wsite-blog-index.blog-columns-2 .blog-post {width:49%;padding:1em;box-sizing:border-box;display: block;float: left;margin: 0 0.5%;}.wsite-blog-index.blog-columns-1 .blog-post {width:100%;padding:1em;box-sizing:border-box;}.wsite-blog-post .blog-post {width:100%;}.wsite-blog-index .blog-body {display: block;}.wsite-blog-post .blog-body {display:block;}body.post-style-card #blogTable .blog-post {background-color: #FEFEFE;border-radius: 5px;box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4); border: 2px solid #FAFAFA; margin-bottom: "+ cardGap +"px;padding: 10px;}body.post-style-card.custom-card-colors-1 #blogTable .blog-post {background-color: " + cardBgColor + ";border-radius: 5px;box-shadow: 0 1px 2px " + cardShadowColor + ";border: 2px solid " + cardBorderColor + ";margin-bottom: "+ cardGap +"px;padding: 10px;}body.expand-posts-area-1 #blogTable tbody tr td{display: table-row;}.wsite-blog-index.blog-columns-3 .blog-post:nth-child(3n) {clear: right;}.wsite-blog-index.blog-columns-2 .blog-post:nth-child(odd){clear: both;}.blog-page-nav-previous, .blog-page-nav-next {clear: both;}@media screen and (max-width:767px) {.blog-post {width:100%;}.wsite-blog-index.blog-columns-3 .blog-post {width:100%;margin: 0;}.wsite-blog-index.blog-columns-2 .blog-post {width:100%;margin: 0;}</style>");
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

    return PostColumns;
})();