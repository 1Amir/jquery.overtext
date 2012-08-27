(function($) {
    $.fn.overtext = function(params) {
        var defaults = {
            overClass: ''
        };
        
        var options = $.extend(defaults, params);
        
        return this.each(function() {
            var label = $(this);
            var f = label.attr('for');
            
            this.hide = function() {
                label.hide();
             };
              
             this.show = function() {
                 if (input.val() == '') label.show();
             };
              
             this.focus = function() {
                  input.focus();
             };
             
             if (f) {
                 //id with : symbol bug fix
                 var input = $(document.getElementById(f));
                 
                 input
                    .unbind('focus', this.hide)
                    .focus(this.hide);
                 input
                    .unbind('blur', this.show)
                    .blur(this.show);
                 label
                    .addClass(options.overClass)
                    .unbind('click', this.focus)
                    .click(f, this.focus);

                 if (input.val() != '') this.hide(); 
             }
        });
    };
})(jQuery);