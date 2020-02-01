'use strict';

/*******************
*  File input     *
******************/
(function ($) {

    $(document).on('change', '.file-field input[type="file"]', function (e) {

        var $this = $(e.target);
        var $file_field = $this.closest('.file-field');
        var $path_input = $file_field.find('input.file-path');
        var files = $this[0].files;
        var file_names = [];
        for (var i = 0; i < files.length; i++) {
            var file_name = files[i]["name"];
            file_names.push(file_name);
        }
        $path_input.val(file_names.join(', '));
        $path_input.trigger('change');
    });
})(jQuery);