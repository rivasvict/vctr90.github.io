---
layout: post
title:  "Jekyll installation"
date:   2014-01-07 15:20:04
description: "This is a test of properties"
---

**Instalation document**
========================

*What is Jekyll*
----------------

*Jekyll* is a static-site generator. This is ideal for blogs.

*Steps for installation*
------------------------

*Pre requirements*

- Ruby
- Ruby gem
- Linux/Mac Os

*Step 1*

 # gem install jekyll

*NOTE:* If you ever find this message after trying to install jekyll.

    Building native extensions.  This could take a while...
    ERROR:  Error installing jekyll:
    	ERROR: Failed to build gem native extension.

        /usr/bin/ruby extconf.rb
    mkmf.rb can't find header files for ruby at /usr/share/include/ruby.h

    extconf failed, exit code 1

This error is because you need to install ruby-devel.

Just run the following command

For fedora:
 # yum -y install ruby-devel

For Debian:
 # apt-get -y install ruby-dev

and then try it again :)

**NOTE**: If you are running this on debian, you will also need to install json gem
 # gem install json

If everyting goes ok you should have correctly installed Jekyll on your machine ^.^
