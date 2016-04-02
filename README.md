# Mati theme for Ghost
=

A [Ghost](http://github.com/tryghost/ghost/) theme which is loosely based on [Material Design principles](http://www.google.com/design/spec/what-is-material/environment.html).

#Design & features
- material design based.
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
- [jQuery](https://github.com/jquery/jquery)
- [MaterializeCSS](https://materializecss.com)
- [FontAwesome-custom](http://www.fortawesome.com/)

#Release
This theme is still adding features and under development, but check the releases page for stable versions.

![Homescreen with featured posts, sidebar and regulat posts](http://img.photobucket.com/albums/v385/hxkclan/2016-04-02%203.png)
![Post UI om homescreen](http://img.photobucket.com/albums/v385/hxkclan/2016-04-01%203.png)
![Post page bottom - tags, author section and disqus](http://img.photobucket.com/albums/v385/hxkclan/2016-04-02%202.png)

#Use
- Download the package from the releases page and extract in your Ghost's 'content/theme' folder
- Restart your Ghost instance to see the new theme and apply it.

#Requirement
To make full use of this theme you need to enable the Ghost API in the Ghost Dashboard -> Labs -> Ghost API. 

#Must do
In the folder 'assets/js/randompost.js' you need to enter your own website url (at the result.append ... section). This is the url it uses to connect to your API. 

#Customization - partials
##Disqus
To use disqus; create a file in the partials folder called disqus.hbs. Parse the full 'disqus universal' code in there. After that open the post.hbs file and search for 'disqus' you should find a long comment showing where to load the disqus.hbs. You load this file by including: {{> disqus}} at the location. 

##Google Analytics
To use Google Analytics, please parse the analytics code through Ghost's dashboard -> 'code injection'. 

##Header
The navigation.hbs partial (/partials/navigation.hbs) basically consists of a dynamic menu which gets generated based on the items setup in the Ghost dashboard's navigation menu. Also includes the mobile (side-swipe) menu with the same menu items.

##Sidebar(s)
Included again as of version 0.8. Only shows on medium and high resolutions (~1000 and up horizontal). By default i have included a 'most used tags' section but you can easily add your own in 'partials/ui/sidebar.hbs'. 

##Social
I've added the ability to add social links to the footer. In the partials/ui/footer.hbs you can setup your own social media links. I have included a smaller version of font-awesome in this theme so the available icons are limited unless you add the full font-awesome (in default.hbs). The current available options in my version are: bitbucket, lastfm, linkedin, facebook-official, github, google-plus, rss, arrow-left, arrow-right and twitter.

#Translation
There are a few places where a static (English) text has been placed if you want to translate these check the sections below.

##partials/pagination.hbs
In the current release there is an custom Pagination file. The file can be found at the following location: /partials/pagination.hbs. 

##partials/post/author-section.hbs
Includes 'about' and 'no bio available' text. 

##partials/ui/sidebar.hbs
If you keep the 'most used tags' included in the sidebar by default you may want to translate the 'most used tags' text in the h1 tag. 


