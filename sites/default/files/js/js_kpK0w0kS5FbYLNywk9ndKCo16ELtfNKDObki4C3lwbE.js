/**
 * @file
 * Custom JS for the pd_menu module.
 */

(function($) {
  Drupal.behaviors.pd_menu = {
    attach: function (context, settings) {
      // Prevent the megamenu from being triggered by breadcrumb links.
      jQuery('.breadcrumb > A').unbind('mouseover');

      // Adjust position of hamburger menu when there is an urgent alert.
      if(jQuery('.mean-bar').length && jQuery('#block-views-pdal-alerts-block').length) {
        var menuInitialTop = parseFloat(jQuery('.mean-bar').css('top'));
        var alertHeight = jQuery('#block-views-pdal-alerts-block').height();
        jQuery('.mean-bar').css({top:menuInitialTop+alertHeight});
      }
    }
  }
})(jQuery, Drupal, this, this.document);

;
