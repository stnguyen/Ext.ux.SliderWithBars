/**
 * @copyright 		(c) 2012, by Stefan Nguyen
 * @date      		31st March 2012
 * @version   		0.1
 * @documentation
 * @website	  	http://stnguyen.com
 */

/**
 * @class Ext.ux.SliderWithProgressBars
 * @author Stefan Nguyen
 *
 * This extension wraps the Ext.ux.TouchCalendarView in a Ext.Carousel component and allows the calendar to respond to swipe
 * gestures to switch the displayed period. It works by creating 3 Ext.ux.TouchCalendarViews and dynamically creating/removing
 * views as the user moves back/forward through time.
 *
 * ![Ext.ux.TouchCalendar Screenshot](http://www.swarmonline.com/Ext.ux.TouchCalendar/screenshots/Ext.ux.TouchCalendar-month-ss.png)
 *
 * [Ext.ux.TouchCalendar Demo](http://www.swarmonline.com/wp-content/uploads/Ext.ux.TouchCalendar/examples/Ext.ux.TouchCalendar.html)
 *
 */
Ext.define('Ext.ux.SliderWithProgressBars', {
  extend: 'Ext.slider.Slider',
  xtype: 'slider-with-progress-bars',

  config: {
    cls: 'slider-with-progress-bars',

  },

  initialize: function() {
    /*if (this.progressBars) {*/
      //if (!this.menu.isComponent) {
        //this.menu = new Ext.ux.Menu(this.menu);
        //this.on('tap', function() {
          ////Trying to show a menu which is already visible mysteriously masks the screen.
          //if (this.menu.isHidden()) {
            //this.menu.showBy(this);
          //}
        //});
      /*}*/
    //}
    alert("aaaa");

    this.callParent(arguments);
  },

  destroy: function() {
    /*if (this.menu && this.menu.destroy) {*/
      //this.menu.destroy();
    //}

    this.callParent(arguments);
  }
});
