# Project Portfolio 5 - WHIRL

Purpose: A social media platform rating and reviewing books.

Aim: To connect with a community of book lovers to share and recommend books.

![Responsive Mockup](/static/media/readme_images/responsivemockup.jpg/)

The live link can be found here - (https://whirl.herokuapp.com/)

## 1. Design and Development

For the design of this social media app, the 5 pillars of User Experience Design (UXD) were used to cover the strategy, scope, structure, skeleton and surface to make sure the design is intuitive, simple and enjoyable.

### 1.1 Strategy

Initial interviews with the stakeholder were conducted to understand their high-level requirements for the app. This allowed further research to be conducted into user profiles / groups benefitting.

Competitor research was then carried out on similar sites to get an idea of what is currently in the market.

### 1.2 Scope

A brainstorming session was held with the customer to generate user themes and epics, which user stories can then be generated from. Once the user stories had been generated and confirmed, they were prioritised and time bound. For a full list of all user stories, please click [here](https://github.com/AlyshaJohnson/pp5-api/issues).

![Brainstorm](/static/media/readme_images/brainstorm.png)

The SP, or Story Point, is a relative prediction of the time taken to complete the user story against a baseline. The baseline user story was "Register for account".

To complete all user stories, the predicted time it would take would be 8 weeks. As the customer required a release date of the 1st March 2023, a minimum set of user stories were agreed and reviewed weekly. The final agreed set of user stories were:

| USER STORY # | TITLE                            | PRIORITY |
|--------------|----------------------------------|----------|
| #11          | Register for account             | Mo       |
| #26          | Search for books by keyword      | Mo       |
| #23          | View following                   | Mo       |
| #34          | Log in                           | Mo       |
| #22          | View followers                   | Mo       |
| #5           | Delete a book in library         | Mo       |
| #12          | Change password                  | Mo       |
| #14          | Edit personal info on profile    | S        |
| #2           | Create book from scratch         | Mo       |
| #18          | Edit profile picture             | Co       |
| #17          | Add profile picture              | Co       |
| #4           | Edit book in library             | S        |
| #13          | Add personal info to profile     | S        |
| #44          | Create book review               | Mo       |
| #45          | Edit book review                 | Mo       |
| #46          | Delete book review               | Mo       |
| #20          | Add reading preferences          | Co       |
| #46          | Edit reading preferences         | Co       |


### 1.3 Structure

From the user stories, content, data, features and functionality can be determined.

**For the content / features:**

- Sign in page - directs to newsfeed
- Sign up page - directs to sign in
- Profile Page
    - profiles details
    - book preferences
    - reviews feed
- Newsfeed
    - Reviews from followed accounts
- Search
    - filter and search bar to find reviews
- Library
    - list of all books in library
    - search feature to search by author and title

**Data Model:**

The following data model was created:

![Data Model](/static/media/readme_images/data_model.jpeg)

### 1.4 Skeleton

When the structure of the app, features and data model had been determined, a wireframe for each view could be created:

**Sign in / sign up**

![sign in / sign up](/static/media/readme_images/wf-signinup.png)

**Home page**

![Info](/static/media/readme_images/wf-home.png)

**Library**

![Gallery](/static/media/readme_images/wf-library.png)

**Profile**

![Profile](/static/media/readme_images/wf-profile.png)

### 1.5 Surface

**Colour Palette**

![Colour Palette](/static/media/readme_images/colour.jpg)

- The app's primary colours are (from left to right) #64868F, #96BOA2, #F5E2DA #E8AB4F and #BB7058 as seen in the picture above. These were generated using [colourmind](http://colormind.io/) to generate 
- #64868F is used as the font colour through the majority of the site. It is also used as the border colour in the header and on icon buttons in the nav bar.
- #96BOA2 is used as a border colour.
- #F5E2DA is used as the main background colour.
- #E8AB4F is used as the button and link colour.
- #BB7058 is used as the clicked button and link colour.

**Typography**
- Roboto is used for headings and header elements. The fallback font is sans serif.
- The font is from Google Fonts.

## 2. Technologies used

Several technologies were used to aid the project:

- [React.js]
- Used to build the front-end UI.
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- Used as the basic building block for the project and to structure the content.
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- Used to style web content across the project.
- [React-Bootstrap](https://react-bootstrap.github.io/)
- Used as a CSS framework to style and structure app.
- [PP5 API](https://whirl-backend-api.herokuapp.com/)
- Used to store and handle data within the app.
- [Google Fonts](https://fonts.google.com/)
- Used to obtain the fonts in website
- [Font Awesome](https://fontawesome.com/)
- Used to obtain the icons used throughout website.
- [GitHub](https://github.com/)
- Used to store code for the project after being pushed.
- [Git](https://git-scm.com/)
- Used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
- [Gitpod](https://www.gitpod.io/)
- Used as the development environment.
- [Balsamiq](https://balsamiq.com/)
- Used to create the wireframes for the project.
- [Colormind](http://colormind.io/)
- Used to determine colour palette throughout website.
- [Tiny.png](https://tinypng.com/)
- Used to compress my images so that the page would load faster.
- [Techsini](http://techsini.com/multi-mockup/index.php)
- Used to generate multi-device mockup.
- [Freeformatter CSS Beautify](https://www.freeformatter.com/css-beautifier.html)
- Used to accurately format CSS code.
- [Freeformatter HTML Formatter](https://www.freeformatter.com/html-formatter.html)
- Used to accurately format HTML code.
- [Python](https://www.python.org/)
- Python is the core programming language used to write all of the code in this game to make it fully functional.
- [Heroku](https://dashboard.heroku.com/apps)
- Used to deploy the app
- []()
- Used to create Data Model map

## 3. Features

### 3.1 Existing Features

The features deployed for this app are as follows:

**Sign in / Sign up**

Allows access to the site for users to be able to interact with reviews and books.

![Sign in](/static/media/readme_images/signin.png)

**Navbar**

Allows users to navigate through site. The options available to the user are dependant on whether they are signed in to their account.

![Navbar with user](/static/media/readme_images/navbar-nouser.png)

![Navbar without user](/static/media/readme_images/navbar-user.png)

It is responsive by using a collapsable burger menu for devices with screens smaller than 768px.

![Navbar on mobile](/static/media/readme_images/navbar-mobile.png)

**Reviews feed**

The reviews view is filtered by reviews from followed users.

![Reviews feed](/static/media/readme_images/reviewsfeed.png)

If you are the owner of a review, a menu option appears next to date created to allow you to edit or delete it.

**Search bar**

The search bar allows users to search the database for specific objects. There are two contexts where you can search: books in the library and reviews on the homepage.

![Search bar](/static/media/readme_images/search.png)

**Most followed users**

This feature is on the homepage and on the profile view. It allows users to see popular profiles which may be of interest to the user.

![Most followed](/static/media/readme_images/mostfollowed.png)

**Add review**

From the navbar or against the a book in the library, a user can navigate to the 'create review' page and fill in the form to create their review.

![Add review](/static/media/readme_images/addreview.png)

A future feature would be to automatically select the book field when a user has been directed from a specific book.

**Library**

The library page shows a list of all books available to users to create a review from.

![Library](/static/media/readme_images/library.png)

There are two views of the library, the one above and the one for a librarian. The librarian view includes a button enabling them to create a book and on each book an option menu to edit or delete a book.

![Library](/static/media/readme_images/libraryadmin.png)

To create a book, a librarian can use the folling form.

![Create Book](/static/media/readme_images/createbook.png)

**Profile page with editting**

The profile page shows information about the user. This information can be editted by the user.

![Profile](/static/media/readme_images/profile.png)

### 3.2 Future Features

There is an addition of 3 weeks worth of work still to perform to give the customer everything they require for realease 1. This includes the following user stories:

| USER STORY # | TITLE                            | PRIORITY |
|--------------|----------------------------------|----------|
| #48          | Request new book                 | Co       |
| #47          | Set/edit review visibility       | Co       |
| #40          | Add comment                      | Co       |
| #41          | Edit comment                     | Co       |
| #42          | Delete Comment.                  | Co       |
| #31          | Search for accounts by username  | Mo       |
| #30          | Search for accounts by name      | S        |
| #7           | Search book by filtering         | S        |
| #21          | Set reading goal                 | Co       |
| #15          | Add social media info to profile | Co       |
| #16          | Edit social media info to profile| Co       |
| #3           | Create book from request         | S        |
| #1           | Manage user restrictions         | Co       |

It was decided early on the in project to forgo the forum functionality and this will be added in the next release / update.

## 4. Testing

Multiple layers of testing were performed on this project including:
- Bug capturing during development
- Code validation testing 
- User experience tesing

### 4.1 Initial Developer Testing

As the project was developed and coded, developer testing was conducted to reduce the impact of bugs and errors in the code. This testing consisted of general debugging of written code based off gitpod IDE recommendations; running through input validator testing scenarios to check for input errors; and testing on different browsers.

**General Debugging**

Bugs were captured throughout the course of the project using the 'issues' object within GitHub. 

**Browser / Device testing**

The development of this app was conducted on Google Chrome, therefore extensive testing was conducted on this browser. This was used as a benchmark against Firefox and Safari.

The elements of testing conducted on each browser are:
- User Experience - what does the app look like; is the flow through the app the same; are all elements where they are expected?
- Functionality - do the buttons work as expected; do the forms work as expected?
- Performance - how responsive is the site?

The user experience is consistent on Chrome, Firefox and Safari.

Responsive design is important, CSS code had to be amended and adjusted to make sure the app could work on a number of devices. There were a number of user experience bugs that were produced when testing. These have now been fixed in the code.

### 4.2 Code Validation Testing

Using tools such as W3C validator, Jigsaw and Lighthouse gives visibility of any code, scripts or elements that are causing any errors. The results for the site are as follows:

**HTML**
- 0 errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fwhirl.herokuapp.com%2F)

**CSS**
- 0 errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwhirl.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

**Performance**
- Results can be seen through the official [Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fwdg-invite.herokuapp.com%2Finvite%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext) report.

As part of the performance test through Lighthouse, some changes were made:
- Accessibility (aria-label) tags were implemented on all buttons to improve the score.
- The cache policy was amended to increase the length of number of seconds the browser should cache the resource.

### 4.3 User Testing
This app has been tested by a small group of 10 users in which some feedback was captured in the design and some errors in functionality and spelling were corrected.

UI improvements made:
- Responsive-ness of sign in page. Image removed for mobile devices.

Errors / bug fixes:
- CORS error on app
- Remove gap on library page next to search bar for non-librarians
- Library permissions to create book
- Follow other users
- Multi-select form on profile edit does not work
- Add comments

### 4.4 Unfixed Bugs

- Comments app wasn't added in time
- Multi-select form on profile edit does not work

## 5. Deployment

The master branch of this repository has been used for the deployed version of this application.

### 5.1 Using Github & Gitpod 

- Click the `Use This Template` button.
- Add a repository name and brief description.
- Click the `Create Repository from Template` to create your repository.
- To create a Gitpod workspace you then need to click `Gitpod`, this can take a few minutes.
- When you want to work on the project it is best to open the workspace from Gitpod (rather than Github) as this will open your previous workspace rather than creating a new one. You should pin the workspace so that it isn't deleted.
-  Committing your work should be done often and should have clear/explanatory messages, use the following commands to make your commits:
    - `git add .`: adds all modified files to a staging area
    - `git commit -m "A message explaining your commit"`: commits all changes to a local repository.
    - `git push`: pushes all your committed changes to your Github repository.

*Forking the GitHub Repository*

To make changes to a repository without affecting it, a copy can be be made by 'Forking' it. This ensures the original repository remains unchanged.

1. Find the relevant GitHub repository
2. In the top right corner of the page, click the Fork button (under account)
3. The repository has now been 'Forked' and a copy has been made

*Cloning the GitHub Repository*

Cloning a repository will allow a local version of the repository to be downloaded and worked on. Cloning is also be a great way to backup work.

1. Find the relevant GitHub repository
2. Press the arrow on the Code button
3. Copy the link that is shown in the drop-down
4. Now open Gitpod & select the directory location where the clone is to be created
5. In the terminal type 'git clone' & then paste the link copied in GitHub
6. Press enter and a local clone will be created.

### 5.2 Creating an Application with Heroku

Following the below steps using the Code Institute tutorial:

- The following command in the Gitpod CLI will create the relevant files needed for Heroku to install project dependencies `pip3 freeze --local > requirements.txt`. Please note this file should be added to a .gitignore file to prevent the file from being committed. Int he instance of this project, no requirements were created as there were no project dependencies.

1. Go to [Heroku.com](https://dashboard.heroku.com/apps) and log in; create an account if needed.
2. Click the `New` dropdown and select `Create New App`.
3. Enter a name for the new project - all Heroku apps need to have a unique name.
4. Select the region.

*Heroku Settings*
Environment Variables need to be set up - this is a key step to ensuring the application is deployed properly.
- In the Settings tab, click on `Reveal Config Vars` and set the following variables:
    - If using credentials they will need to be added as a variable, the key is the name 'CREDS' and the value is the contents of the creds JSON
    - Add key: `PORT` & value `8000`
- Buildpacks are also required for proper deployment, simply click `Add buildpack` and search for the ones required.
- Nodejs is a required buildpack for this project.

*Heroku Deployment*
In the Deploy tab:
1. Connect the Heroku account to the Github Repository following these steps:
    1. Click on the `Deploy` tab and choose `Github-Connect to Github`.
    2. Enter the GitHub repository name and click on `Search`.
    3. Choose the correct repository for the application and click on `Connect`.
2. A choice is given to deploy the project manually or automatically, automatic deployment will generate a new application every time a change is pushed to Github, whereas manual deployment requires the `Deploy Branch` button to be pushed whenever a change is made.
3. Once the deployment method has been chosen, the application will be built and can be opened using the `Open App` button at the top of the page.

![heroku-deployment](/static/media/readme_images/heroku_deployment.png)

## 6. Credits

### 6.1 Content

Logos and Fonts:
- The fonts were taken from [GoogleFonts](https://fonts.google.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

Tutorials and support:
- General guidance, information and limitations on elements, attributes, and methods from [w3schools](https://www.w3schools.com/default.asp) and [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [realpython](https://realpython.com/customize-django-admin-python/
https://ordinarycoders.com/blog/article/django-user-register-login-logout) tutorials on how to do user registration and log in, plus amending the admin page views.
- The many people who 'beta tested' the app.

### 6.2 Media

Any photos used throughout the app are stock imagery from the following services:
- [unsplash](https://unsplash.com/)

Credit goes to the following artists for use of their images on the site:
- [Sincerely Media](https://unsplash.com/@sincerelymedia) on Unspalsh for the sign in / sign up image.

All profile images for mock profiles came from:
- [Ben den Engelsen](https://unsplash.com/@benjeeeman) as John Snow
- [Sarah Brown](https://unsplash.com/@sweetpagesco) as Jane Eyre
- [Ayo Ogunseinde](https://unsplash.com/@armedshutter) as Bilbo Baggins
- [Ana Itonishvili](https://unsplash.com/@aniitonishvili) as Matilda Wormwood
- [Princess](https://unsplash.com/@princessolan) as Violet Baudelaire


### 6.3 Research

As mentioned in the design section, competitor research was conducted. These are credited below:
- [Greenvelope](greenvelope.com)
- [Paperless Post](paperlesspost.com)

### 6.4 Special Thanks

Special thanks goes to the Code Institute community for helping when I was in a bind, especially to Sean Murphy, Jason Duntun and Ed Bradley.