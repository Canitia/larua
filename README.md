# Canitia Jr.

A [Ghost](http://github.com/tryghost/ghost/) theme based on the Canitia theme (for Wordpress). It has the same look-n-feel but not the full featureset of Cinitia as Ghost doesn't, at least fairly easily, allow for it at this point.

# Main Features
- Slider that shows featured posts (need the API to be enabled in Ghost Dashboard -> Labs -> API).
- UI optimised for different form factors
- Ability to set your own site logo
- Dynamic navigation that can be set from Ghost settings panel. It's also touch enabled (side swipe) on touch devices.
- Dynamic sidebar with Recent posts, Most used tags, Related posts and more (shows different items depending the type of page you are on).
- Author section at the bottom of each post includes avatar and user bio
- Set social media links for the website (they will show in the footer)
- Custom AMP, tag, author and error page designs.

![Canitia Jr. Theme](https://github.com/boumannm/canitia-jr/blob/master/canitiajr.png)

# Stuff used
Canitia Jr. uses the following libraries;
- [jQuery](https://github.com/jquery/jquery)
- [MaterializeCSS](https://materializecss.com)
- [FontAwesome](http://www.fontawesome.com/)

# Tested
This theme was used and tested on Ghost 0.11.7 using Chrome, Firefox and Edge as test browsers. Ofcourse i might still have missed some bugs so please report them through the issue tracker. 

# Release
This theme is currently marked 'stable'. Unless a new Ghost update introduces major new features or rewrites it's about as stable as can be ;).

# Use
- Download the package from the releases page and extract in your Ghost' 'content/theme' folder
- Restart your Ghost instance to see the new theme and apply it.

# Theme requirements
To make full use of this theme you need at least version **0.11.7** as that's the version where it's currently tested on. You also need to enable the Ghost API in the Ghost Dashboard -> Labs -> Ghost API.

# Tested on:
The theme is tested on Microsoft Edge <Creators Update>, Microsoft Edge <Creators Update> (Mobile), Chrome 58 (mobile), Firefox 53.0.2 and Internet Explorer 11.

# Customization

## Google Analytics
To use Google Analytics, please parse the analytics code through Ghost's dashboard -> 'code injection'.

## Social
I've added the ability to add social links to the footer. You can include Facebook and Twitter profiles from the Ghost admin page (website-wide) and enter Twitter and Facebook urls for specific user profiles
