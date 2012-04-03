/**
 * @copyright 		(c) 2012, by Stefan Nguyen
 * @date      		31st March 2012
 * @version   		0.1
 * @documentation
 * @website	  	http://stnguyen.com
 */

/**
 * @class Ext.ux.SliderWithBars
 * @author Stefan Nguyen
 */
Ext.define('Ext.ux.SliderWithBars', {
  extend: 'Ext.slider.Slider',
  xtype: 'slider-with-bars',
  requires: [
    'Ext.ux.BarInSlider',
  ],

  config: {
    barValue: 0,
    barCls: ''
  },

  constructor: function(config) {
    config = config || {};

    if (config.hasOwnProperty('barValues')) {
      config.barValue = config.barValues;
    }

    this.callParent([config]);
  },

  setBarWidth: function(newValue) {
    var bars = this.getBars();

    for (var i = 0; i < bars.length; i++) {
      bars[i].setWidth(newValue[i] * this.offsetValueRatio + 7);
    }
  },

  refresh: function() {
    this.callParent();
    this.setBarWidth(this.getBarValue());
  },

  refreshBarValue: function() {
    this.setBarValue(this.getBarValue());
  },

  factoryBar: function() {
    return Ext.factory({}, Ext.ux.BarInSlider);
  },

  setBarsCount: function(count) {
    var bars = this.getBars(),
    barsCount = bars.length,
    i, ln, bar;

    if (barsCount > count) {
      for (i = 0,ln = barsCount - count; i < ln; i++) {
        bar = bars[bars.length - 1];
        bar.destroy();
      }
    }
    else if (barsCount < count) {
      for (i = 0,ln = count - barsCount; i < ln; i++) {
        this.add(this.factoryBar());
      }
    }

    return this;
  },

  getBars: function() {
    return this.getDockedItems();
  },

  applyBarValue: function(value) {
    return Ext.Array.from(value || 0);
  },

  /**
  * Updates the sliders bars with their new value(s)
  */
  updateBarValue: function(newValue, oldValue) {
    //console.log("updateBarValue:" + this.newValue);
    this.setBarsCount(newValue.length);
    this.setBarWidth(newValue);
  },

  applyBarCls: function(value) {
    return Ext.Array.from(value || 0);
  },

  updateBarCls: function(newValue, oldValue) {
    oldValue = oldValue || [];
    var bars = this.getBars();

    for (var i = 0; i < bars.length; i++) {
      if (!bars[i].getCls())
        bars[i].setCls(newValue[i]);
      else {
        if (oldValue[i])
          bars[i].removeCls(oldValue[i]);

        bars[i].addCls(newValue[i]);
      }
    }
  },

  /**
  * Convience method. Calls {@link #setBarValue}
  */
  setBarValues: function(barValue) {
    this.setBarValue(barValue);
  },

  /**
  * Convience method. Calls {@link #getBarValue}
  */
  getBarValues: function() {
    return this.getBarValue();
  },
});
