# Mati theme for Ghost

A [Ghost](http://github.com/tryghost/ghost/) theme which is loosely based on [Material Design principles](http://www.google.com/design/spec/what-is-material/environment.html).

# Design & features
- Ability to set your own site logo and cover image
- Shows last 5 featured posts in a slider (need the API to be enabled in Ghost Dashboard -> Labs -> API).
- Navigation menu can be setup using the Ghost settings panel -> navigation option.
- Also includes a 'side swipe' hamburgermenu on phones.
- Custom error, tag and author pages.
- Author section at the bottom of each post incl. avatar, user bio, website and social icons.
- Shows pagination when available (aka when there are enough posts) in footer.
- Optimised for different form factors
- Seperated parts of the code in 'partials'

# Stuff used
mati uses the following libraries;
- [jQuery](https://github.com/jquery/jquery)
- [MaterializeCSS](https://materializecss.com)
- [FontAwesome](http://www.fontawesome.com/)

# Release
This theme is still adding features and under development, but check the releases page for stable versions.

**New requirement as of 0.9.5**
Limits cover/header image size to 250px in height. So make sure you have an image that aligns correctly. 

![Homescreen with featured posts, sidebar and regular posts](https://u8zxna.dm2303.livefilestore.com/y3mX3WZWKlc5_H-_t8ExOYJ3upzB4wzlKPUE93RdXSNaoBYZUr4uH6Diu0L-Zeiz12u8uhtkOibdAUsvRW0quwRckEjZzN5CH_qESsByMK3LkndWuyC9uYgiBnSZi4ThdME3ATEArV-IC0JLKnLiC550w?width=1206&height=1147&cropmode=none)

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
