Ext.application({
  name: 'Sencha',

  launch: function() {
    Ext.create("Ext.tab.Panel", {
      fullscreen: true,
      tabBarPosition: 'bottom',
      requires: ['Ext.ux.SliderWithProgressBars'],

      items: [
        {
          xtype: "slider-with-progress-bars",
          value: 50,
          title: 'Slider',
          iconCls: 'star',
          displayField: 'title'
        }
      ]
    });
  }
});
