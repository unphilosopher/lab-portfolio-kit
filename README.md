# Lab Portfolio Kit

## What is this?

A UI kit for building portfolios with [Lab](https://compositor.io/lab) and [Iso](https://compositor.io/iso). Contains components and templates that you can customize and extend. It's configuration based, so you can fill in your own content and make design tweaks without writing any code. For those that want to dive deeper, you still have granular control over the markup and styles. Will also hopefully serve as a set of useful patterns for using Lab and Iso together to design UI.


![Templates](https://c8r.imgix.net/55dbc2bb77dfc76b86ed8c63/screens.jpg)

### Includes Templates for 

- [Full Page Profile](https://hywwjnyalymhgwykzjhp.c8r.pub)
- [404 page](https://tkxehokzqaydfajdabmx.c8r.pub)
- [About page](https://vfxrzuqoiwylqxyinbsv.c8r.pub)
- [Project / Case Study](https://labaketqlwbxgmnxmlhl.c8r.pub)
- [Home page](https://kiagqwwioqumawzmaavg.c8r.pub)
- [Photo page](https://iujerisjrtzimnyeekot.c8r.pub)
- [Image Gallery](https://hipvmtmyyinebsujeuvn.c8r.pub)

Style Guide and Component Library
[https://qpimodfhueiclzqysehs.c8r.pub](https://qpimodfhueiclzqysehs.c8r.pub)

## Installation

First clone the repo into a new project

##### HTTPS
```
git clone https://github.com/c8r/lab-portfolio-kit.git your-project
```

##### SSH
```
git clone git@github.com:c8r/lab-portfolio-kit.git your-project
```

Open Lab and go to File > Open project...

![Open a project in Lab](https://c8r.imgix.net/962c933490eb36b875da5000/open.png)

The ui elements will now be loaded in Lab. Feel free to edit and tweak their designs.

![UI kit for Lab](https://c8r.imgix.net/213bc9b8c0b2ad6c821feeaf/lab-portfolio-kit.png?w=1920&fit=clip)

Open Iso and navigate to the directory of your project. Open any of the .jsx files to edit or view the templates.

### Configuration

#### Site Header
Accepts a uri for an image and an array of links
```
avatar: 
links: 
  - href: 
    text: 
    title: 
  - href: 
    text: 
    title: 
```

#### Page
Each page has a title, subtitle, and text that can be inserted with front matter
```
title: 
subtitle: 
text: 
```

#### Footer
The footer has a block of text, a copyright blurb, and a list of social links
```
footerText: string
copyright: string
facebook: url
twitter: username
producthunt: url
pinterest: url
snapchat:url
instagram: username
dribbble: username
behance: username
soundcloud: username
youtube: url
vimeo: username
github: username
npm: username
codepen: url
stackoverflow: url
etsy: url
kickstarter: url
```

Panels, Cards, and Tiles are made up: Title, Subtitle, Kicker, Text, and an Href. Panels also display a link text. Examples of their usage can be found in Index.jsx.

#### Panels

```
panels: 
  - title: 
    subtitle: 
    kicker: 
    text: 
    src: 
    href: 
    linkText: 
```

#### Cards

```
cards: 
  - title: 
    subtitle: 
    kicker: 
    text: 
    src: 
    href: 
```

#### Tiles

```
tiles: 
  - title: 
    subtitle: 
    kicker: 
    text: 
    src: 
    href: 
```

