---
layout: post
title:  "Jekyll installation"
date:   2014-01-07 15:20:04
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

Just run the following command

 # yum -y install gcc mysql-devel ruby-devel rubygems

and then try it again :)

If everyting goes ok you should have correctly installed Jekyll on your machine ^.^

