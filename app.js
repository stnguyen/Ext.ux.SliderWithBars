Ext.application({
  name: 'Sencha',

  launch: function() {
    Ext.create("Ext.Container", {
      fullscreen: true,
      requires: ['Ext.ux.SliderWithBars'],

      items: [
        {
          xtype: "slider-with-bars",
          value: 15,
          barValue: [70, 15],
          id: 'mySlider',
          barCls: ['', 'x-bar-orange']
        },
        {
          xtype: "button",
          text: "More thumbs",
          handler: function() {
            Ext.getCmp("mySlider").setValues([20, 40])
          }
        },
        {
          xtype: "button",
          text: "More bars",
          handler: function() {
            Ext.getCmp("mySlider").setBarValues([70, 30, 15]);
            Ext.getCmp("mySlider").setBarCls(['', 'x-bar-orange', 'x-bar-green']);
          }
        }
      ]
    });
  }
});
