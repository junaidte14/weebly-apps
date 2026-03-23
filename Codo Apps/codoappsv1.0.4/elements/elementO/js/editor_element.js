/**
 * Exit Intent Popup — editor JS (editor_element.js)
 * Handles editor-only concerns: strip injected styles, hide overlay.
 */

(function() {
    var ExitIntentPopup = PlatformElement.extend({
        initialize: function() {
            this.fixStyles();
            if (this.$el.children('.platform-element-overlay').length) {
                this.$el.children('.platform-element-overlay').hide();
            }
        },

        fixStyles: function() {
            this.$('.editable-text, .element').attr('style', '');
        }
    });

    return ExitIntentPopup;
})();