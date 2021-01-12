---
date: 2021-01-12T20:29:09Z
slug: building-my-blog
picture: https://res.cloudinary.com/djavoiqhp/image/upload/v1610483553/snacky.dev/glenn-carstens-peters-npxXWgQ33ZQ-unsplash_mdjkkf.jpg
title: Building a blog in a single day
picture_credit: <span>Photo by <a href="https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Glenn
  Carstens-Peters</a> on <a href="https://unsplash.com/s/photos/blog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

---
## Building my blog

I had a blog before, although I never actually wrote anything in it, it was built with Jekyll and was hosted on GitHub pages, this was okay but I wanted a new start, after getting a new domain I started to work in this one, it took me one day to build it.

### Choosing the stack

I could have gone with either react or vue, as I have experience with both, I wanted the blog to be SSR to get fast speeds, SEO, and caching, this put two options in my table: NextJS and NuxtJS.

Having worked with vue3 for the last months I could not imagine working with the old vue2 API, and NuxtJS at this time has not completely migrated into the vue3 composition API, so NextJS was my choice.

### Deploying it up

I just followed the instructions, after reading the NextJS official docs and saw it could be deployed easily into Vercel, I just went with that.

### Adding a CMS

This was really new to me, as a freelancer, it's common to see job listings for WordPress, Shopify, and other content managers but I never really decided to learn that stuff, this time I was in need of it, but I already had a fully custom solution which I coded myself so I just wanted something that could handle the data and not a WYSIWYG kind of editor.

[This list](https://www.g2.com/categories/headless-cms) helped me see some of the options available and after seeing the official examples on the NextJS GitHub repo, I decided [forestry](https://forestry.io/) would fit my needs, it was fairly simple to integrate and since it's git-based GitHub would continue to serve as my hosting.