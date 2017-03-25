test
'use strict';

function solve() {

    var VALIDATION = {
        valudateSelector: function(value){
            if(typeof value !== 'string' && !(value instanceof jQuery)){
                throw new Error('Invalid selector');
            }
        }
    };

    return function (selector) {
        VALIDATION.valudateSelector(selector);

        if($(selector).length === 0){
            throw new Error('No such element');
        }

        var $allButtons = $(selector + ' .button')
            .html('hide');

        $allButtons.click(function(event){

            var button = $(this);
            var content = button;

            while (!(content.hasClass('content')) && content.length !== 0) {
                content = content.next();
            }

            if(content.css('display') === 'none'){
                content.css('display', '');
                button.html('hide');
            } else {
                content.css('display', 'none');
                button.html('show');
            }
        });
    };
}

module.exports = solve;