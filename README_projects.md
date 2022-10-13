# Project documentation

## Project uploading
To upload projects, we chose for markdown files. These files are easy to read and very straight-forward.

## Steps
Start from the `/public/projects/.template`. 
Copying this folder and renaming it to your project name, and filling out the blanks will create a project entry. Feeling dangerous, and want to start from scratch, following the steps below will have the same result.
 
1. pull the latest version of the git repository, `git checkout main` if not on main branch
2. Start from a new branch
    - Start from the `main` branch
    - Create a new branch named as `initials-projectname`
        - Eg.  'Syan Delbart' | 'Project of the moon' -> `sd-projectofthemoon`
        - `git checkout -b sd-projectofthemoon`
3. Create a `folder with the name of the project` which will be used as the link to the project.
4. Create a markdown file with the name `README.md` in the folder.
5. Add the `image` you want to use as the thumbnail to the folder.
    - The ideal resolution is 600x300
6. Structure the `README.md` file as follows:
    - Metadata (should be between the `---` lines above as well as beneath (see template)
        - `title`: The title of the project
        - `path`: Folder name (1)
        - `image`: Link to your image, starting with '`/projects/template/[image name]`'
        - `date`: Date of the project (dd-MM-YYYY)
        - `summary`: Summary visible on the project page
        - `featured`: Boolean, set `true` the project should be featured on the homepage & project page
    - Content
        - Use markdown to structure your content
        - You can use the [markdown cheatsheet](https://www.markdownguide.org/) for more information
7. Commit your changes and do a pull request

        git add .
        git commit -m "Added project [project name]"
        git push --set-upstream origin [branch name]

    Create a pull request from the [GitHub interface](https://github.com/Thomas-More-Digital-Innovation/2223-Startproject-DinoWebsite/pulls)

8. Wait for your pull request to be reviewed and merged