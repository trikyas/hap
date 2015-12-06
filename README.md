## PROLOGUE:

With the advent of cross-platform requirements and with pixel precision sites, there are new problems with the layout.
This is especially true for the full screen mode sites.
Implement an adaptive pixel-perfect design, it was a daunting task.

![HAP - Logo](http://hap.themedron.com/assets/img/Logo.png)

HAP - "HTML AS PICTURE":
===========
THE TECHNOLOGY ALLOWS YOU TO CREATE A FULLY ADAPTIVE PIXEL PERFECT HTML SITES WITH DYNAMIC SCALING OF ALL HTML-DOCUMENT ELEMENTS. NESTING SITE IS DONE USING EM AND QUANTITIES PER CENT INSTEAD OF THE USUAL PX.


HOW TO USE:
===========
At the present time we can offer to create your project Jquery plugin.
The plugin has a function mini HTML-framework to maintain the adaptability of the site.
You can use the plug-in to extend the functionality of other HTML-frameworks such as: Twitter Bootstrap.

### Installation and setup - download and plug in before the closing `</body>` Jquery plugin "HAP" (HTML as Picture).

#### Recommendation on the site layout using the plugin "HAP":
- Magnitude of the width of the container is set to "%". Indentation, font sizes, UL-elements installed in EM.
- Not use the small picture: the images on the buttons is better to resort to icon fonts (eg: FontAwesome).
- Do not use the font size is less than 10px.

To avoid problems it is best to create the design of the future site resolution is 500/1000/1500/2000 / PX.

#### Note: For the container to 1000px width font size in the `<BODY>` is 100px.

Example for the site with the layout image 1000px: 
The site has 2 columns of different widths, the first - 200, the width of the second column 800. 
For the first column, set the width of 200 - 20%, for the second - 80%. 
Further, in the first column font size 12px, the second 16px. For the first column, font size: 12/100 = 0.12em, for the second column: 16/100 = 0.16em.

#### Recommendation: Do not use the plug-in with a small resolution screens. Disable function, you can using CSS:
```css
@media (max-width: 768px) {
  body {
    font-size: 100px !important;
    }
  }
```

The output is cross-platform solution suitable for the realization of a pixel-perfect. With automatic scaling for any screen resolution. 
We hope it will be useful to you.

### License:

#### Copyright (C) 2015 All right reserved. ThemeDron Inc (themedron.com). 

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. 
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the General Public License for more details. 
You should have received a copy of the GNU General Public License along with this program. If not, see 
http://www.gnu.org/licenses/


