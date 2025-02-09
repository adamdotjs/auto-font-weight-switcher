# Auto Font Weight Switcher

Font thickness can can appear different in light and dark mode due to a phenomenon called [irradiation illusion](https://signbrad.com/2016/10/02/why-white-looks-bigger-than-black-the-irradiation-illusion/).

This extension allows you to manually define font weights for each theme type (Light, Light High Contrast, Dark, Dark High Contrast) and let VSCode automatically set those font weights depending on the theme type you select.

It is responsive by design, and will change the font weight any time you...

- Select a theme of a different type (e.g. Solarized Light vs. Solarized Dark)
- Have `window.autoDetectColorScheme` enabled, and the theme changes automatically
- Change the font weight settings

No reloading is required.

![An animation showing the font weights changing when going from dark to light mode](/demo.gif)

_Font shown is the absolutely magical [Berkeley Mono](https://usgraphics.com/products/berkeley-mono)_

## Settings

Define your font weights by setting the following inside your `settings.json` file.

```json
{
	"autoFontWeightSwitcher.lightWeight": "500",
	"autoFontWeightSwitcher.darkWeight": "400",
	"autoFontWeightSwitcher.darkHighContrastWeight": "500",
	"autoFontWeightSwitcher.lightHighContrastWeight": "600",
	"autoFontWeightSwitcher.includeTerminal": true // this setting will also change the font weight of your terminal
}
```

### Issues?

As this is a very early release and mostly a proof of concept in its current state, there may be bugs. Please reach out if you encounter any.

**Enjoy!**
