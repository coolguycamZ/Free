# Portfolio

Free theme for [Ghost](http://github.com/tryghost/ghost/) prepared by [GavickPro](http://www.gavick.com/).

[-> DEMO <-](http://portfolio-gk.ghost.io)

**Important** The v.1.2.0 adds a built-in support for the post cover images - if you are using older version of the theme, you will have to set cover images for all your older posts.

## Download

**Important** All below packages contain the "portfolio" directory with the theme which should be moved to the content/themes directory.

[Download v.1.2.2 for Ghost 0.5.*](https://github.com/GavickPro/Portfolio-Free-Ghost-Theme/releases/tag/v.1.2.2)

[Download v.1.2.1 for Ghost 0.5.*](https://github.com/GavickPro/Portfolio-Free-Ghost-Theme/releases/tag/v.1.2.1)

[Download v.1.2.0 for Ghost 0.5.2](https://github.com/GavickPro/Portfolio-Free-Ghost-Theme/releases/tag/v.1.2.0)

[Download v.1.1.0 for Ghost 0.5.0](https://github.com/GavickPro/Portfolio-Free-Ghost-Theme/releases/tag/v1.1.0)

[Download v.1.0.0 for Ghost 0.4.2](https://github.com/GavickPro/Portfolio-Free-Ghost-Theme/releases/tag/v1.0.0)

![Screenshot](https://www.gavick.com/res/free-portfolio-ghost-theme-gavickpro.jpg)

## Important information

This theme contains a few features which may require some additional knowledge or settings.

### Featured images/videos

The image or video placed at the beginning of the post will be used as a featured image/video on the post list. Additionally if you want to display the post over the title on the post page, you have to set the alternative text of the image to **featured-image**.

In theory you can use different images as a featured image on the posts’ list and on the post page (in this case you can add the **featured-image** alternative text to a different image).

The videos will be responsive thanks to the fitvids jQuery plugin.

### Disqus comments

You can specify your Disqus username in the **partials/config.hbs** file in the following line:

```js
var disqus_shortname = '';
```

### Google Analytics support

You can specify your Google Analytics tracking code ID in the **partials/config.hbs** file in the following line:

```js
var ga_ua = 'UA-XXXXX-X';
```

### Background image

The image displayed in the background can be a blog cover image which can be defined in the Ghost settings. As default there is a grey background displayed.

### Footer area

You can modify the content of the page footer in the **partials/footer.hbs** file. It will be displayed on all subpages of your Ghost blog.

## Useful Ghost resources

We recommend these Ghost resources if you need to improve your knowledge regarding this CMS:

* [Ghost cheatsheet](http://howtoghost.net/ghost-cheatsheet/)
* [Ghost API overview](http://www.metacotta.com/ghost-api-overview/)
* [How to make Ghost Themes](http://docs.ghost.org/themes/)
* [Ghost Themes development links](http://ghost.centminmod.com/ghost-themes/)
* [Ghost dev bookmarks](https://github.com/ninjaas/ghost-dev-bookmark)

## Copyright & License

Copyright (C) 2014 GavickPro - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
