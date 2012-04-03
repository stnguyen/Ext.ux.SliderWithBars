Ext.ux.SliderWithBars
===

### Introduction

This is a Sencha Touch 2 component, extending Ext.slider.Slider with the **abilility to put progress bars inside**.

**[Demo](http://stnguyen.com/demo/sencha-touch/Ext.ux.SliderWithBars/)**

### How to use

1. Copy `slider_with_bars` folder into your project root folder.
2. Include files:
    
        <link rel="stylesheet" href="slider_with_bars/style.css" type="text/css">
        
        <script type="text/javascript" src="slider_with_bars/bar.js"></script>
        <script type="text/javascript" src="slider_with_bars/slider.js"></script>
        
4. Usage

		{
          xtype: "slider-with-bars",
          value: 15,
          barValue: [70, 15],
          id: 'mySlider',
          barCls: ['', 'x-bar-orange']
        },
        
### API


This component extends `Ext.slider.Slider`, so [all functions provided by its parent class](http://docs.sencha.com/touch/2-0/#!/api/Ext.slider.Slider) are inherited unchanged.


##### Set the number of bars and their values

The number of bars is derived from the length of `barValues` array being passed in, so this line will create 3 bars:

    mySlider.setBarValue([70, 30, 10]);
    
** Note **: because later bar (in the array above) will overlay the previous ones, so the bar with bigger value should be put on top.

##### Set css classes for each bar

You can customize each bars' style by applying css classes to them.

    mySlider.setBarCls(['', 'x-bar-orange', 'x-bar-green']);

The number of css classes in the array should be equal to the number of bars created.
