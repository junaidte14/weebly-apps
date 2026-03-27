/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 *
 * we normalize the styles on initial load.
 */

(function() {
    var AutoPopup = PlatformElement.extend({
        initialize: function() {
            // we normalize the styles on initial load.
            $(document).ready(function() {
                this.fixStyles();
                this.$el.children('.platform-element-overlay').hide();

                codo_isshow = 1;
                
                var popUpTrigger = this.settings.get("popUpTrigger");
                var durationInMinutes = this.settings.get("durationInMinutes");
                var popUpAutoClose = this.settings.get("popUpAutoClose");
                var closeDuration = this.settings.get("closeDuration")*1000;

                var waitDuration = this.settings.get("waitDuration")*1000;

                //console.log(popUpAutoClose);

                if(popUpTrigger == true){
                    setTimeout(function () {
                        $('#codoPopup').show();
                    }, waitDuration);
                }else{
                    var iscodoPopupshow = localStorage.getItem('iscodoPopupshow');

                    function setCookie(cname, cvalue, exdays) {
                        var d = new Date();
                        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                        var expires = "expires="+d.toUTCString();
                        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                    }

                    function getCookie(cname) {
                        var name = cname + "=";
                        var ca = document.cookie.split(';');
                        for(var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') {
                                c = c.substring(1);
                            }
                            if (c.indexOf(name) == 0) {
                                return c.substring(name.length, c.length);
                            }
                        }
                        return "";
                    }

                    var user = getCookie("codoPopupExpiry");
                    var no_of_days = durationInMinutes/24/60;
                    if (user != "") {
                        //setCookie("codoPopupExpiry", 'defined', no_of_days);
                    } else {
                        localStorage.removeItem("iscodoPopupshow");
                        setCookie("codoPopupExpiry", 'defined', no_of_days);
                    }

                    iscodoPopupshow = localStorage.getItem('iscodoPopupshow');
                    if (iscodoPopupshow == null) {
                        localStorage.setItem('iscodoPopupshow', codo_isshow);
                        // Show popup here
                        //$('#codoPopup').show();
                        setTimeout(function () {
                            $('#codoPopup').show();
                        }, waitDuration);
                    }
                }

                if(popUpAutoClose == true){
                    setTimeout(function () {
                        $('#codoPopup').hide();
                    }, closeDuration+waitDuration);
                }

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

    return AutoPopup;
})();