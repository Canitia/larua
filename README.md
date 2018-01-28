# Canitia Jr.

A [Ghost](http://github.com/tryghost/ghost/) theme based on the Canitia theme (for Wordpress). It has the same look-n-feel but some feature differences due to their platform.

# Main Features
- Slider that shows featured posts (need the API to be enabled in Ghost Dashboard -> Labs -> API).
- UI optimised for different form factors (phone/tablet/pc)
- Ability to set your own publication icon and publication logo.
- Set cover- and featured-post images for tags, author and single post pages.
- Navigation configurable via navigation-section in Ghost panel.
- Responsive sidebar with Recent posts, Most used tags and Related posts which shows up on high-res (tablet+) displays.
- Author section at the bottom of each post includes avatar and user bio.
- Set social media links through Ghost settings panel (they will show in the footer)
- Translation support!
- Custom AMP, tag, author and error page designs.

![Canitia Jr. Theme](https://github.com/boumannm/canitia-jr/blob/master/canitiajr.png)

# Canitia Jr's base
Canitia Jr. uses the following libraries;
- Font Awesome 4.7.0
- Bootstrap v4 (beta)
- JQuery (3.1.x)

# Theme requirements
- Canitia Jr **requires** Ghost version **1.20.0** to install and work as intended. 
- Enable the Ghost API in the Ghost settings panel -> Labs -> Ghost API for the full featureset.

# Release
This theme is currently marked 'stable'. Unless a new Ghost update introduces major new features or rewrites it's about as stable as can be ;).

# Use
- Download the package from the releases page and extract in your Ghost' 'content/theme' folder
- Restart your Ghost instance to see the new theme and apply it.

# Tested on:
The theme is tested on Microsoft Edge (Creators Update), Google Chrome 64.0.3282.119, Firefox 57.0.2, Firefox Nightly 60 (28-jan-2018).

# Customization

## Google Analytics
To use Google Analytics, please parse the analytics code through Ghost's dashboard -> 'code injection'.

## Social
I've added the ability to add social links to the footer. You can include Facebook and Twitter profiles from the Ghost admin page (website-wide) and enter Twitter and Facebook urls for specific user profiles
