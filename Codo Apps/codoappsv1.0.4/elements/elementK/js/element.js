(function() {
    var CodoAccordion = PlatformElement.extend({
        
        // Backbone events: Scoped automatically to this element instance
        events: {
            'click .codo_accordion_header': 'toggleAccordion'
        },

        initialize: function() {
            // we normalize the styles on initial load.
            $(document).ready(function() {
                this.fixStyles();
                this.$el.children('.platform-element-overlay').hide();
                
                // Handle "Open First Item" on load
                this.initFirstItem();
            }.bind(this));

            this.fixStyles();
        },

        /**
         * Logic to open the first item if the toggle is enabled in settings
         */
        initFirstItem: function() {
            var openFirst = this.settings.get('openFirstItem');
            if (openFirst) {
                this.$('.codo_accordion_item').first().find('.codo_accordion_header').addClass('active');
                this.$('.codo_accordion_item').first().find('.codo_accordion_body').addClass('open');
            }
        },

        /**
         * The toggle logic
         */
        toggleAccordion: function(event) {
            var $header = $(event.currentTarget);
            var $body = $header.next('.codo_accordion_body');
            var allowMultiple = this.settings.get('allowMultiple');

            // If "Allow Multiple" is OFF, close other items in THIS widget instance
            if (!allowMultiple && !$body.hasClass('open')) {
                this.$('.codo_accordion_body').removeClass('open');
                this.$('.codo_accordion_header').removeClass('active');
            }

            // Toggle the clicked item
            $body.toggleClass('open');
            $header.toggleClass('active');
        },

        fixStyles: function() {
            this.$('.editable-text, .element').each(function(index, value) {
                $(value).attr('style', '');
            });
        }
    });

    return CodoAccordion;
})();