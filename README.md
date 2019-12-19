# Chai's Portfolio Site
Welcome! For my final project at General Assembly I would liket to build a personal portfolio website to learn how to use the below technologies
- [Gatsby](https://www.gatsbyjs.org/)
- [Netlify CMS](https://www.netlifycms.org/)
- [React](https://reactjs.org/)
- [SASS](https://sass-lang.com/)
- [GraphQL](https://graphql.org/)
- [Google Analytics](https://developers.google.com/analytics/devguides/collection)

# Quick start guide  
Check out the demo [here](https://chai-ng.netlify.com/)

1. Clone the repo with `git clone`
2. Install NPM dependencies using `npm install`
3. Run `gatsby develop` while in the main folder
4. Access the site locally at `locahost:8000`

# Why Gatsby?
[Gatsby vs. JAMstack frameworks](https://www.gatsbyjs.org/features/jamstack/)  
[Gatsby vs. Traditional CMS](https://www.gatsbyjs.org/features/cms/)

**Gatsby is PWA-ready... what does that mean?**
- Reliable: near instant load times, and avoid showing the downasaur even in uncertain network conditions
- Fast: responds quickly to user interactions with smooth animations and no janky scrolling
- Engaging: feels like a natural app on device, instead of a webpage

**But really... what does that look like?**
- Using Service Workers 
- Site is served over HTTPS
- Site is responsive on tablets and mobile devices
- All app URLs load while offline
- Each page has a URL

[source](https://developers.google.com/web/progressive-web-apps/)

# Inspiration
- https://**mattfarley**.ca/
- https://caferati.me/portfolio
- https://pierre.io/
- https://timmyomahony.com/
- https://jonny.me/
- http://www.adhamdannaway.com/

# Overview of website
**Features**
- Include a user-friendly UI / CMS to edit the content for a non-developer
- Site analytics to understand performance of site, where users are coming from and top pages
- Cool CSS / animations
- Good tagging / search / filter function

**Potential Integrations**
- Goodreads for a list of current / previous reads
- Github to show code

**Pages**
- home
- about
- projects
- opinions

# Gatsby FAQ
## What Gatsby plugins were used and what do they do?
|Plugin|Description|
|------|-----------|
|[gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=)|Parses Markdown files with Remark for the GraphQL queries|
|[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/?=)|Allows lazy-loading of images|
|[gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/?=)|Creates responsive images that are optimised vs. bloated images|
|[gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/?=)|Processes images in Markdown|

## Creating new pages on Gatsby
1. Create new file within the `/src/pages` folder, where each folder or file, will create the routes using the Gatsby `createPages` API  
   1. Creating an `index.js` file - inclues both the React Component, and the GraphQL query
   2. Creating an `index.md` file, as well as a `template-name.js` file in `src/pages/templates` - where the template could be reused for different `index.md` files
2. Build out the page within the `index.md` or `index.js` file you have
   1. `export const pageQuery = graphql` to specify the data fields you want
   2. (optional) Build and export the template layout, specifying the props to be passed through
      1. Build out the React Component that will be the page template using HTML, and passing through the `props`
      2. Specific the `propTypes` of the GraphQL data that will be received (e.g. string, object, func)
   3. Build and export the actual, completed component or page
      1. `export default component` that pulls together the specificied GraphQL query and the ReactComponent template
3. Setup the `config.yml`, `cms.js` and `/cms/preview-templates` to allow Netlify CMS to edit the page, and

# Portfolio website design choices
**1. Mobile-first, single page focused design**  
Additional content in projects and opinions are looped into separate pages to avoid clutter. Merged the about and contact pages into the main page.

**2. Branding and style**  
What did I want my personal brand to convey?
- Colours: Shades of blue
- Font type: Professional, differentiated
- Logo: Minimalist, clean
  
**3. Page layouts**

**4. Using Google Analytics and Hotjar**

