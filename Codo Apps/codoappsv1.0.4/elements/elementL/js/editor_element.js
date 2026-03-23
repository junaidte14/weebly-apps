/**
 * Pricing Table — PlatformElement (Backbone pattern)
 *
 * Reads numberOfCards and highlightedCard from settings.
 * Applies codo_pricing_highlighted class to the correct card via
 * this.$() which is automatically scoped to this element instance —
 * no uniqueId needed.
 *
 * All content (badge text, plan name, price, period, features, button)
 * is managed via native Weebly editor fields in the template.
 */

(function() {
    var PricingTable = PlatformElement.extend({

        initialize: function() {
            $(document).ready(function() {
                this.fixStyles();
                this.$el.children('.platform-element-overlay').hide();
                this.applyHighlight();
            }.bind(this));

            this.fixStyles();
        },

        /**
         * Reads highlightedCard setting ("none" | "0" | "1" | "2" | "3").
         * Iterates all .codo_pricing_card elements within this instance
         * and adds the codo_pricing_highlighted class to the matching index.
         * The CSS file controls all visual differences for highlighted cards
         * purely via the .codo_pricing_highlighted class.
         */
        applyHighlight: function() {
            var highlightSetting = this.settings.get('highlightedCard');
            var highlightIndex   = parseInt(highlightSetting, 10);
            var isValid          = !isNaN(highlightIndex);

            this.$('.codo_pricing_card').each(function(i, card) {
                if (isValid && i === highlightIndex) {
                    $(card).addClass('codo_pricing_highlighted');
                } else {
                    $(card).removeClass('codo_pricing_highlighted');
                }
            });
        },

        fixStyles: function() {
            this.$('.editable-text, .element').each(function(i, el) {
                $(el).attr('style', '');
            });
        }

    });

    return PricingTable;
})();