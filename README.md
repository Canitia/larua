# Mati theme for Ghost
====

A [Ghost](http://github.com/tryghost/ghost/) theme which is loosely based on [Material Design principles](http://www.google.com/design/spec/what-is-material/environment.html).

#Design & features
- As it's material design based - it's simple, no header images and stuff, no fuss, it just works.
- Ability to set your own site logo and cover image
- Shows 3 featured posts (need the API to be enabled in Ghost Dashboard -> Labs -> API).
- Navigation menu can be setup using the Ghost settings panel -> navigation option.
- Also includes a 'side swipe' menu on phones.
- Custom error, tags, static page and author pages.
- Author section at the bottom of each post incl. avatar and user bio.
- Shows pagination when available (aka when there are enough posts) in footer.
- Resolution-based CSS
- Seperated parts of the code in 'partials'

#Stuff used
mati uses the following libraries;
- [jQuery](https://github.com/jquery/jquery) (included within Ghost)
- [MaterializeCSS](https://materializecss.com)
- [FontAwesome-custom](http://www.fortawesome.com/)

#Release
This theme is still adding features and under development, but check the releases page for stable versions.

![Homescreen with featured posts](http://img.photobucket.com/albums/v385/hxkclan/2016-03-30.png)
![Post page with post image](http://img.photobucket.com/albums/v385/hxkclan/2016-03-30%201.png)
![Post page bottom - tags, author section and disqus](http://img.photobucket.com/albums/v385/hxkclan/2016-03-30%202.png)

#Use
- Download the package from the releases page and extract in your Ghost's 'content/theme' folder
- Restart your Ghost instance to see the new theme and apply it.

#Customization - partials
##Disqus
The Disqus inclusion is 'forced' as i think a blog/site should have a commentssection. 
To use disqus; create a file in the partials folder called disqus.hbs. Parse the full 'disqus universal' code in there.

##Google Analytics
To use Google Analytics, please parse the analytics code through Ghost's dashboard -> 'code injection'. 

##Header
The navigation.hbs partial (/partials/navigation.hbs) basically consists of a dynamic menu which gets generated based on the items setup in the Ghost dashboard's navigation menu. Also includes the mobile (side-swipe) menu with the same menu items.

##Sidebar(s)
Not available anymore (for now).

##Social
I've added the ability to add social links to the footer. In the mati/partials/social.hbs you can setup your own social media links. I have included a smaller version of font-awesome in this theme. The current available options in my version are: bitbucket, lastfm, linkedin, facebook-official, github, google-plus and twitter.

#Translation

##partials/pagination.hbs
In the current release there is an custom Pagination file. The file can be found at the following location: /partials/pagination.hbs. This file is the only one that you might want to translate. It's currently in English but if you want to change it you can do so here. 
