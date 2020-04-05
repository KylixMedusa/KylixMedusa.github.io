# One Page Portfolio

***

<h3 align="center">Fork this repo with a :star: to start editing it as your own!

***

# Quick Setup

1. Install Ruby Devkit. [Click here](https://rubyinstaller.org/downloads/)
2. Install Jekyll: run `gem install jekyll bundler` in your terminal
3. Fork this repository and clone your fork in your system.
4. Edit `_config.yml` to personalize your site

# Settings

You have to update informations on `_config.yml` to customize your site:

## Site settings
```yml
title: Write a title for your web site here
github_username: add your username here

You may leave the following three settings as they are if you're unsure what to edit.
description: 
baseurl: "" # the subpath of your site, e.g. /blog/
url: "http://localhost:3000" # the base hostname & protocol for your site
```

## User settings
```yml
Fill the following profile section with your details

authour:
  name: 
  email: 
(Leave blank if you do not have one.)
social:
  github: 
  instagram: 
  facebook: 
  linkedin: 
```

> You can even change the port, but it isn't recommended at the beginning

# Content

You can (and should) edit the `.html` files for adding your own information, icons, working experience, social links or whatever you want to add by editing the content of the markdown files in the cloned directory. I.e.:

1. index.markdown
2. about.markdown
3. blog.markdown

To edit the header/ footer, navigate to the **_includes** directory and edit the header.html / footer.html according to your choice.

# Running locally

In order to compile the assets open the terminal in the cloned directory and follow those steps:

1. Run `jekyll build`
2. Run `jekyll serve`
3. Open your browser and type `127.0.0.1:8080` and hit enter!

> Note : 
> 1. If you receive errors while following steps 1 or 2, run `bundle install` or if, this doesn't work, re-install the ruby dev kit and jekyll.
> 2. If you changed the port in the config_yml file, the address in step 3 above would have to changed accordingly.
