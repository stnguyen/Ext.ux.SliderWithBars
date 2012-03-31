/**
 * @private
 * Utility class used by Ext.ux.SliderWithBars - should never need to be used directly.
 */
Ext.define('Ext.ux.BarInSlider', {
    extend: 'Ext.Component',
    xtype : 'bar-in-slider',

    config: {
        baseCls: Ext.baseCSSPrefix + 'bar-in-slider',
        docked: 'left',
        value: 10
    },

    initialize: function() {
        this.callParent();
    }
});
