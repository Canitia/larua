# Cerulean for Ghost

A [Ghost](http://github.com/tryghost/ghost/) theme which is loosely based on [Material Design principles](http://www.google.com/design/spec/what-is-material/environment.html).

# Main Features
- Slider that shows featured posts (need the API to be enabled in Ghost Dashboard -> Labs -> API).
- UI optimised for different form factors
- Ability to set your own site logo ~~and cover image~~ (cover image has been removed as of 0.9.8)
- Dynamic navigation that can be set from Ghost settings panel. It's also touch enabled (side swipe) on touch devices.
- Dynamic sidebar with Recent posts, Most used tags, Related posts and more (shows different items depending the type of page you are on).
- Author section at the bottom of each post includes avatar and user bio ~~website and social icons.~~ (Temporarily disabled since 0.9.8)
- Custom AMP, tag, author and error page designs.

**Image of the theme**
An image of the latest version is included in the theme as you can see in Cerulean.png.

![Cerulean Theme](https://github.com/boumannm/cerulean-for-ghost/blob/master/cerulean.png)

# Stuff used
Cerulean for Ghost uses the following libraries;
- [jQuery](https://github.com/jquery/jquery)
- [MaterializeCSS](https://materializecss.com)
- [FontAwesome](http://www.fontawesome.com/)

# Release
This theme is still adding features and under development, but check the releases page for stable versions.

# Use
- Download the package from the releases page and extract in your Ghost' 'content/theme' folder
- Restart your Ghost instance to see the new theme and apply it.

# Requirement
To make full use of this theme you need to enable the Ghost API in the Ghost Dashboard -> Labs -> Ghost API.

# Customization - partials
## Disqus
To use disqus; create a file in the partials/thirdparty folder called disqus.hbs. Parse the full 'disqus universal' code in there. After that open the post.hbs file and search for 'disqus' you should find a long comment showing where to load the disqus.hbs. You load this file by including: {{> disqus}} at the location. 

## Google Analytics
To use Google Analytics, please parse the analytics code through Ghost's dashboard -> 'code injection'.

## Sidebar(s)
Included again as of version 0.8. Only shows on high resolutions (~1000px and up horizontal). By default i have included a 'recent posts' and a 'most used tags' section but you can easily add your own (or remove the included ones) in 'partials/ui/sidebar.hbs'.

## Social
I've added the ability to add social links to the footer. You can include Facebook and Twitter profiles from the Ghost admin page (website-wide) and enter Twitter and Facebook urls for specific user profiles
