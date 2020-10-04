<h1 align="center">
  gatsby-blog-template
</h1>

This template is based on the awesome [Gatsby's default starter](https://github.com/gatsbyjs/gatsby-starter-default).

To learn more about Gatsby go to [https://www.gatsbyjs.com/](https://www.gatsbyjs.com/).

## View live example

The live example of this blog template can be found here: [https://gatsbyjs-blog-template.netlify.app/](https://gatsbyjs-blog-template.netlify.app/)

**Note:** this page will feature all of the latest changes made to this template, so you can see them work.

## What this template is

This template is a minimalist blog template with the following features:

-   Simple blog post creation wih markdown.
-   Tags can be added to each post to group them together.
-   Post history navigation with pages. Additionally the same navigation of pages with tags.
-   About me page written in markdown to tell the world about yourself.
-   Search bar implemented with elasticlunr to help readers find a specific blog by title or tag.
-   Support for multiple languages.
-   Automatic RSS feed creation from blog posts.

## What this template does not do

If you wish to take this template and modify it, go ahead. Some features may be added in the future, so this list could change.

If you just want to use it as it is and know it's limitations, then those are the following:

-   There is no image preview added to each post, like some blogs do.
-   There is no image preview when sharing posts on social media.

## Quick start guide

<details>
    <summary>Show quick start guide</summary>

1.  Copy this repository

    Use the Gatsby CLI to create your new blog.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/davidlunadeleon/gatsby-blog-template
    ```

    or

    ```shell
    git clone https://github.com/davidlunadeleon/gatsby-blog-template
    cd gatsby-blog-template
    npm install
    ```

2.  Change your configuration

    You probably want to change the configuration of your new blog to make it your own, so these are some thing to change:

    -   In `gatsby-config.js` in `siteMetadata`:
        -   Title: title of your blog. This will be used as your 'logo' and site name in each tab the site is open.
        -   Description: short description about your blog and it's purpose.
        -   Author: your name or alias.
    -   Further down in the same file in `gatsby-plugin-sharp`:
        -   Name: long or detailed of your blog.
        -   Short name: short name of your blog.
        -   Icon: icon that will be used in each tab that has the site open.

3.  Develop and preview the changes

    ```shell
    gatsby develop
    ```

    This will open your site in `http://localhost:8000/` to preview how it looks. If you are interested in the development part of things, check the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/). You can open the project in your code editor and explore how it all works.

4.  Write some blog posts

    You should probably modify your `about-me.md` file located at `content/` (do not change this name). To modify it follow the next steps.

    The following rules apply to every blog post you make:

    -   Add posts to the `content/posts/` directory.
    -   All posts have the `.md` file extension.
    -   The name of the file, will be the resulting name of the page in the website. For example `content/posts/test1.md` will result in [http://www.my-blog.com/posts/test1](http://www.my-blog.com/posts/test1).
    -   The following properties are set inside the file. Add these lines to the beginning of each file you make:

    ```md
    ---
    title: "This is the second test"
    date: "2020-07-07"
    tags: ["test", "blog post"]
    ---
    ```

    -   Note: `about-me.md` does not have any tags in it.
    -   After adding the post data, you can write anything you want below. To see examples check the files in `content/`

## Deploy

See Gatsby's guide on how to deploy: [https://www.gatsbyjs.com/docs/deploying-and-hosting/](https://www.gatsbyjs.com/docs/deploying-and-hosting/).

</details>

## To do list

**Specific pages:**

-   [x] Add About me page.
-   [x] Add Posts page.
-   [x] Add Home page.
-   [ ] Add Projects page.
-   [x] Add custom 404 page.

**Templates:**

-   [x] Add template for a Blog Post page.
-   [x] Add template to create page with list of blogs.
-   [x] Add template to create page with list of blogs filtered by tag.
-   [ ] Add template to create page with list of projects.
-   [ ] Add tempalte to create page with a specific project.

**Components:**

-   [x] Add search bar component to lookup posts.
-   [x] Add header component with nav bar for site navigation.
-   [x] Add pagination component to show number of pages and links to the previous or next page.
-   [x] Add tags component to display list of tags present in a blog post.
-   [x] Modify footer component to display site information.
-   [x] Modify footer component to show links to social media.
-   [x] Add language selection in navbar

**General:**

-   [ ] Add image preview when sharing to social media.
-   [x] Add multiple language support
-   [x] Add RSS feed creation

## License

This Gatsby blog template is licensed under the 0BSD license. To read more about it see the [LICENSE file](LICENSE).
