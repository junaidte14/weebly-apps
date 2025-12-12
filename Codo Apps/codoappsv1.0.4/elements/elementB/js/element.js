/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 *
 * we normalize the styles on initial load.
 */

(function() {
    var MultiColumnBlog = PlatformElement.extend({
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
                $("#blogTable").append("<style>body.blog-columns-3 .blog-body div#wsite-content {-webkit-column-count: 3;-webkit-column-gap: "+ cardGap +"px;-webkit-column-fill: balance;-moz-column-count: 3;-moz-column-gap: "+ cardGap +"px;-moz-column-fill: balance;column-count: 3;column-gap: "+ cardGap +"px;column-fill: balance;}body.blog-columns-2 .blog-body div#wsite-content {-webkit-column-count: 2;-webkit-column-gap: "+ cardGap +"px;-webkit-column-fill: balance;-moz-column-count: 2;-moz-column-gap: "+ cardGap +"px;-moz-column-fill: balance;column-count: 2;column-gap: "+ cardGap +"px;column-fill: balance;}body.blog-columns-2 #blogTable .blog-post, body.blog-columns-3 #blogTable .blog-post {display: inline-block;margin: 0 2px 15px;-webkit-column-break-inside: avoid;-moz-column-break-inside: avoid;column-break-inside: avoid;padding: 15px;padding-bottom: 5px;opacity: 1;-webkit-transition: all .2s ease;-moz-transition: all .2s ease;-o-transition: all .2s ease;transition: all .2s ease;} @media(max-width: 767px){ body.blog-columns-3 .blog-body div#wsite-content {-webkit-column-count: 1;-webkit-column-gap: 0px;-webkit-column-fill: balance;-moz-column-count: 1;-moz-column-gap: 0px;-moz-column-fill: balance;column-count: 1;column-gap: 0px;column-fill: balance;}body.blog-columns-2 .blog-body div#wsite-content {-webkit-column-count: 1;-webkit-column-gap: 0px;-webkit-column-fill: balance;-moz-column-count: 1;-moz-column-gap: 0px;-moz-column-fill: balance;column-count: 1;column-gap: 0px;column-fill: balance;}}</style>");
                $("#blogTable").append("<style>body.post-style-card #blogTable .blog-post {background-color: #FEFEFE;border-radius: 5px;box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4); border: 2px solid #FAFAFA; margin-bottom: "+ cardGap +"px;padding: 10px;}body.post-style-card.custom-card-colors-1 #blogTable .blog-post {background-color: " + cardBgColor + ";border-radius: 5px;box-shadow: 0 1px 2px " + cardShadowColor + ";border: 2px solid " + cardBorderColor + ";margin-bottom: "+ cardGap +"px;padding: 10px;}</style>");
                $("#blogTable").append("<style>body.expand-posts-area-1 #blogTable tbody tr td{display: table-row;}</style>");
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

    return MultiColumnBlog;
})();