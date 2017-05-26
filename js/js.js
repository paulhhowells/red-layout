(function ($) {
  "use strict";

  // Run on readyState.
  $(function () {
    var
      OPEN = true,
      transitionDurationMs = 600,
      drawerReadySelector = 'is-ready',
      drawerOpenSelector = 'is-open',
      $drawers = $('.drawer');

    $drawers.each(function () {
      var
        $drawer,
        $button,
        state,
        transitionTimeoutID;

      $drawer = $(this);
      $button = $drawer.find('.drawer__button');
      $button.click(click);

      function click () {
        if (state === OPEN) {
          // Drawer is open, so close it.
          $drawer
            // .addClass(drawerReadySelector)
            .removeClass(drawerOpenSelector);

          transitionTimeoutID = setTimeout(function () {
            $drawer.removeClass(drawerReadySelector);
            state = !state;
          }, transitionDurationMs);
        }
        else {
          // Drawer is shut, so open it.
          clearTimeout(transitionTimeoutID);

          $drawer.addClass(drawerReadySelector);

          setTimeout(function () {
            $drawer
              .addClass(drawerOpenSelector);
              // .removeClass(drawerReadySelector);
            state = !state;
          }, 1);
        }
      }
    });
  });
}(jQuery));
