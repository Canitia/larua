# Larua

![Master version](https://img.shields.io/github/package-json/v/Canitia/larua/master?style=flat-square)
![Development version](https://img.shields.io/github/package-json/v/Canitia/larua/dev?style=flat-square)
![License](https://img.shields.io/github/license/Canitia/larua?style=flat-square)
[![CodeFactor](https://www.codefactor.io/repository/github/canitia/larua/badge)](https://www.codefactor.io/repository/github/canitia/larua)

A [Ghost](http://github.com/tryghost/ghost/) theme with a card based UI, fresh looks and fancy fonts. 

# Main Features
- UI optimised for different form factors (phone/tablet/pc)
- Ability to set your own publication icon and publication logo.
- Set site cover.
- Set cover- and featured-post images for tags, author and single post pages.
- Navigation configurable via navigation-section in Ghost panel.
- Author section at the bottom of each post includes avatar, user bio and socials.
- Shows related posts (by primary tag) below a post.
- Set social media links through Ghost settings panel (they will show in the header)
- Translation support!
- Custom tag, author and error page designs.

![Larua](https://github.com/canitia/larua/raw/master/assets/screenshot-desktop.png)

# Larua's base
Larua uses the following libraries;
- Bootstrap 4
- JQuery (3.1.x)
- Font Awesome 5
- Webfontloader 1.6.28

# Theme requirements
- Larua **requires** Ghost version **3.0** or higher to install and work as intended. 
- In case it's not enabled: enable Ghost API in the Ghost settings panel -> Labs -> Ghost API for the full featureset (although it's likely on by default if you run the latest version).

# Use
- Download the package from the releases page
- Go to your Ghost-panel and to the Design-tab
- Upload the theme .zip
- Activate the theme

# Tested:
## Browsers
- Microsoft Edge (November 2018 Update)
- Google Chromium 79.0.3945.130
- Firefox 74.0a1

# Customization

## Google Analytics
To use Google Analytics, please parse the analytics code through Ghost's dashboard -> 'code injection'.

## Experimental: Members support
- Upload the routes.yaml file in the Labs section 'routes'
- Enable members option
- **Members functionality is completely untested at this point**