Ext.ux.SliderWithBars
===

### Introduction

This is a Sencha Touch 2 component, extending Ext.slider.Slider with the abilility to put **customizable progress bars inside**.

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

**Note**: because later bar (in the array above) will overlay the previous ones, so the bar with bigger value should be put on top.

##### Set css classes for each bar

You can customize each bars' style by applying css classes to them.

    mySlider.setBarCls(['', 'x-bar-orange', 'x-bar-green']);

The number of css classes in the array should be equal to the number of bars created.

### License

Copyright (c) 2012 stefan@vinova.sg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.