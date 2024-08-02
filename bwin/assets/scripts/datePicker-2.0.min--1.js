(function($) {
    pg.datePicker = function(id_, args_, options_) {
        this.id = id_;
        this.args = args_;
        this.options = options_;
        this.options.minDate = eval(this.options.minDate);
        this.options.maxDate = eval(this.options.maxDate);
        this.options.defaultDate = eval(this.options.defaultDate);
        this.options.changeMonth = true;
        this.options.changeYear = true;
        this.options.showMonthAfterYear = false;
        this.options.showAnim = "";
        this.render()
    };
    pg.datePicker.prototype = {
        render: function() {
            var $dateDiv = $("<div class='date-container'>");
            var $hiddenInput = $("<input type='hidden'>").attr({
                name: this.args.name,
                value: this.options.dateFormat
            });
            if (this.options.dateFormat) {
                this.options.dateFormat = this.options.dateFormat.replace(/MM/, "mm").replace(/yy/g, "y")
            }
            var $dateInput = $("<input>").attr({
                id: this.args.id,
                name: this.args.name,
                value: this.options.defaultInputDate
            });
            if (this.args.style != undefined) {
                $dateInput.attr("style", this.args.style)
            }
            if (this.args.dateClass != undefined) {
                $dateInput.attr("class", this.args.dateClass)
            }
            if (this.options.onChange != undefined) {
                $dateInput.attr("onChange", this.options.onChange)
            }
            $dateDiv.append($dateInput);
            $dateDiv.append($hiddenInput);
            $("#" + this.id).append($dateDiv);
            var thiz = this;
            jQuery(function($) {
                $.datepicker.setDefaults($.datepicker.regional[thiz.args.lang]);
                $("#" + thiz.args.id).datepicker($.extend({
                    changeFirstDay: false,
                    shortYearCutoff: "+20"
                }, $.datepicker.regional[thiz.args.lang], thiz.options))
            });
            if (this.options.timeZone) {
                var $hiddenTimeZone = $("<input type='hidden'>").attr({
                    name: this.args.name,
                    value: this.options.timeZone
                });
                $("#" + this.id).append($hiddenTimeZone)
            }
        }
    }
})(jQuery);
