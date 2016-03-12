# Mati theme for Ghost
====

A [Ghost](http://github.com/tryghost/ghost/) theme which is loosely based on [Material Design principles](http://www.google.com/design/spec/what-is-material/environment.html).

#Design & features
- As it's material design based - it's simple, no header images and stuff, no fuss, it just works.
- Shows post date/author/tags in post
- Show featured image for a post (or your main site 'cover picture' when not available)
- Has Featured Post support! (these get shown first, with an 'featured' indicator before the other posts)
- Sidebar support has been removed as of the next major version 0.3. 
- Shows pagination when available (aka when there are enough posts) in footer
- Resolution-based CSS (<= 1023, >= 1024, >= 1300)
- Seperated parts of the code in 'partials'

#Stuff used
mati uses the following libraries;
- [Bootstrap](https://github.com/twbs/bootstrap)
- [jQuery](https://github.com/jquery/jquery) (included within Ghost)
- [MaterializeCSS](https://materializecss.com)

#Preview
This theme is still under development, but check the releases page for stable versions.

![Homescreen](http://img.photobucket.com/albums/v385/hxkclan/2016-03-12%201.png)

#Use
- Download the package
- Clone the repo inside your 'content/theme' folder
- Restart your Ghost instance to see the new theme and apply it.

#Customization - partials
##Disqus
To use disqus; create mati/partials/disqus.hbs. Parse the full 'disqus universal' code in there.

##Google Analytics
To use Google Analytics, please create a file (mati/partials/analytics.hbs) and parse your full script code in it.

##Header
The header.hbs partial (mati/partials/header.hbs) basically consists of the blogtitle and the blog description. 

##Sidebar(s)
First sidebar (mati/partials/sidebar.hbs) is shown on the main screen. Default template is basically an empty sidebar div. Just put what you want to show inside the div and voila. 

Second sidebar (mati/partials/sidebar-secondary.hbs) is shown when viewing a post. The second sidebar has support for your own images. Check your user profile and add a profile image and if you want a bit more 'wow'; add a user cover image as well.

##Pagination
In the current release there is an custom Pagination file for tweaking. For example to translate the pagination text into a different language. The file can be found at the following location: /mati/partials/pagination.hbs. If you want to remove the (custom) pagination remove this file.

##Social
I've added the ability to add social links to the footer. In the mati/partials/social.hbs you can setup your own social media links.You can use the Font-Awesome icons that i use, it has more icons as you can see [here](http://fortawesome.github.io/Font-Awesome/icons/). Just simply add a new line and/or replace the current ones. Secondly there's a seperate social media section (at least that's what i've used it for) in partials/sidebar.hbs. 

#Translation
There's not much to translate, but the two things that are probably of interest are the following;

##partials/pagination.hbs
Includes dutch text to make more sense of the page indicators. So you can translate the text in here, or remove the text whatever.
