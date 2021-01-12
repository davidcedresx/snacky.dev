---
date: 2021-01-12T05:21:35Z
slug: side-projects
picture: "/photo-1516259762381-22954d7d3ad2.jpeg"
title: Side Projects

---
# Let's build some side projects

My portfolio is mostly empty, I have done some side and academic projects in the past but either they are all incomplete or I just get cringy out of thinking of sharing them with anyone, that's the reason I won't list them here, on my brand new website.

## New projects to put into my pocket

I came across [this post](https://dev.to/hb/7-fullstack-projects-you-need-to-make-in-2021-bdn) recently and decided to give it a try.

The first project I decided to go with was the blog, you are currently in it, I'll keep tweaking it until I decide it's good enough and then move to my next project: a chat app.

## Building my blog

I had a blog before, although I never actually wrote anything in it, it was built with Jekyll and was hosted on GitHub pages, this was okay but I wanted a new start, after getting a new domain I started to work in this one, it took me one day to build it.

### Choosing the stack

I could have gone with either react or vue, as I have experience with both, I wanted the blog to be SSR to get fast speeds, SEO, and caching, this put two options in my table: NextJS and NuxtJS.

Having worked with vue3 for the last months I could not imagine working with the old vue2 API, and NuxtJS at this time has not completely migrated into the vue3 composition API, so NextJS was my choice.

### Deploying it up

I just followed the instructions, after reading the NextJS official docs and saw it could be deployed easily into Vercel I just went with that.

### Adding a CMS

This was really new to me, as a freelancer, it's common to see job listings for WordPress, Shopify, and other content managers but I never really decided to learn that stuff, this time I was in need of it, but I already had a fully custom solution which I coded myself so I just wanted something that could handle the data and not a WYSIWYG kind of editor.

[This list](https://www.g2.com/categories/headless-cms) helped me see some of the options available and after seeing the official examples on the NextJS GitHub repo, I decided [forestry](https://forestry.io/) would fit my needs, it was fairly simple to integrate and since it's git-based GitHub would continue to serve as my hosting.