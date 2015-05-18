# Mati theme for Ghost
====

A [Ghost](http://github.com/tryghost/ghost/) theme which is based on [Material Design principles](http://www.google.com/design/spec/what-is-material/environment.html).

#Design & features
- As it's material design based - it's simple, no header images and stuff, no fuss, it just works.
- Header becomes smaller when you start scrolling (material design FTW!)
- Shows post date/tags in post header
- Show featured image (or your 'cover picture' when not available)
- Shows author info at bottom of each post
- Shows pagination when available (aka when there are enough posts)
- Resolution-based CSS (<= 825, > 825  and > 950)
- Seperated parts of the code in 'partials'
- High res users get a different look than 'low-res' users

#Stuff used
mati uses the following libraries;
- [Bootstrap](https://github.com/twbs/bootstrap)
- [jQuery](https://github.com/jquery/jquery) (included within Ghost)
- [Classie.js](https://github.com/desandro/classie)

#Preview
This theme is still under development, but check the releases page for stable versions.

![Homescreen high resolution](http://img.photobucket.com/albums/v385/hxkclan/github/Mati%20for%20Ghost/Screenshot%20from%202015-05-18%2023-36-41.png)

![Post page with smaller header](http://img.photobucket.com/albums/v385/hxkclan/github/Mati%20for%20Ghost/Screenshot%20from%202015-05-18%2023-37-12.png)

![Author and disqus below a post](http://img.photobucket.com/albums/v385/hxkclan/github/Mati%20for%20Ghost/Screenshot%20from%202015-05-18%2023-44-28.png)

![Footer with social media and pagination](http://img.photobucket.com/albums/v385/hxkclan/github/Mati%20for%20Ghost/Screenshot%20from%202015-05-18%2023-45-11.png)

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

##Pagination
In the current release there is an custom Pagination file for tweaking. For example to translate the pagination text into a different language. The file can be found at the following location: /mati/partials/pagination.hbs. If you want to remove the (custom) pagination remove this file.

##Modal
The actual modal is called from inside /mati/partials/default.hbs (infomodal). Which references the file mati/partials/infomodal.hbs. If you really want to remove the modal completely you can;
- remove mati/partials/infomodal.hbs
- remove the question mark (aboutmodal) from mati/partials/social.hbs

##Social
I've added the ability to add social links to the footer. In the mati/partials/social.hbs you can setup your own social media links.You can use the Font-Awesome icons that i use, it has more icons as you can see [here](http://fortawesome.github.io/Font-Awesome/icons/). Just simply add a new line and/or replace the current ones. 

#Translation
There's not much to translate, but the two things that are probably of interest are the following;

##index.hbs
Index.hbs includes the 'lees meer' (aka read more) button, so you might want to translate the text of the button

##partions/pagination.hbs
Includes dutch text to make more sense of the page indicators. So you can translate the text in here, or remove the text whatever.
