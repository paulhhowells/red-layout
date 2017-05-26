(function ($) {
  "use strict";

  $(function () { // readyState
    var $drawers = $('.drawer');

    $drawers.each(function () {
      var
        $drawer,
        $button;

      $drawer = $(this);
      $button = $drawer.find('.drawer__button');

      $button.click(function () {
        $drawer.toggleClass('is-open');
      })
    });
  });
}(jQuery));
