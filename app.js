Ext.application({
  name: 'Sencha',

  launch: function() {
    Ext.create("Ext.Container", {
      fullscreen: true,
      requires: ['Ext.ux.SliderWithBars'],

      items: [
        {
          xtype: "slider-with-bars",
          value: 70,
          barValue: [70, 15],
          id: 'mySlider'
        },
        {
          xtype: "button",
          text: "Do something",
          handler: function() {
            Ext.getCmp("mySlider").setValue([14, 50, 80])
          }
        }
      ]
    });
  }
});
