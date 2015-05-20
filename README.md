# Mati theme for Ghost
====

A [Ghost](http://github.com/tryghost/ghost/) theme which is loosely based on [Material Design principles](http://www.google.com/design/spec/what-is-material/environment.html).

#Design & features
- As it's material design based - it's simple, no header images and stuff, no fuss, it just works.
- Header becomes smaller when you start scrolling (material design-ish FTW!)
- Shows post date/author/tags in post
- Show featured image for a post (or your main site 'cover picture' when not available)
- Has Featured Post support! (these get shown first, with an 'featured' indicator before the other posts)
- Sidebar support! (2 of them, check further down for more info)
- Shows pagination when available (aka when there are enough posts) in footer
- Resolution-based CSS (<= 1023, >= 1024, >= 1300)
- Seperated parts of the code in 'partials'
- High res users (big browser window) get a different look than 'low res' users

#Stuff used
mati uses the following libraries;
- [Bootstrap](https://github.com/twbs/bootstrap)
- [jQuery](https://github.com/jquery/jquery) (included within Ghost)
- [Classie.js](https://github.com/desandro/classie)

#Preview
This theme is still under development, but check the releases page for stable versions.

![Homescreen high resolution](http://img.photobucket.com/albums/v385/hxkclan/github/Mati%20for%20Ghost/Screenshot%20from%202015-05-20%2002-28-19.png)

![Post page with smaller header and author](http://img.photobucket.com/albums/v385/hxkclan/github/Mati%20for%20Ghost/Screenshot%20from%202015-05-20%2002-28-38.png)

![disqus and footer below a post](http://img.photobucket.com/albums/v385/hxkclan/github/Mati%20for%20Ghost/Screenshot%20from%202015-05-20%2002-28-50.png)

#Use
- Download the package
- Place the mati theme folder inside your 'content/theme' folder
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

##Modal
The actual modal is called from inside /mati/partials/default.hbs (infomodal). Which references the file mati/partials/infomodal.hbs. If you really want to remove the modal completely you can;
- remove mati/partials/infomodal.hbs
- remove the question mark (aboutmodal) from mati/partials/social.hbs

##Social
I've added the ability to add social links to the footer. In the mati/partials/social.hbs you can setup your own social media links.You can use the Font-Awesome icons that i use, it has more icons as you can see [here](http://fortawesome.github.io/Font-Awesome/icons/). Just simply add a new line and/or replace the current ones. Secondly there's a seperate social media section (at least that's what i've used it for) in partials/sidebar.hbs. 

#Translation
There's not much to translate, but the two things that are probably of interest are the following;

##index.hbs
Index.hbs includes the 'lees meer' (aka read more) button, so you might want to translate the text of the button

##partials/pagination.hbs
Includes dutch text to make more sense of the page indicators. So you can translate the text in here, or remove the text whatever.
