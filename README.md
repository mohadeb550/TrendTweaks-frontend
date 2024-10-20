
PROJECT NAME : TrendTweaks
LIVE SERVER  : https://trend-tweaks.vercel.app

This is a site related to social media where users can share their thoughts by creating posts.

- Summary of this project.
Like every social media platform, users can share their posts, give votes, write comment, follow other users, see their profile and manage everything from the dashboard.


What users can do : 
-  sign up and login by giving information and update their data from Profile.
-  create, delete and edit a post and also comments.
-  give votes, upvotes, print the post, follow others, search posts and filter.
-  create post by selecting the content type like 'free' or 'premium' only if they have membership and only premium users can see the premium posts.

- while creating the post user can format the text with TinyMce editor.
- from dashboard, user can handle all the things done by the user and can see the statistics.


What admin can do : 
-  admin can manage all the things from dashboard.
-  admin can manage posts, users and see payments history of users.
-  admin can see the statistics in the dashboard.


Features : 
- Has a secure authentication with JWT and Next Auth.
- Has a role based dashboard.
- Has protected routes.
- Pixel Perfect Responsive.
- Error handing and UX focused.


How to run the project locally?

- Install all the dependencies and replace the 'BASE_API' in '.env' file with your the server URL.
- Add an property named 'NEXT_PAYMENT_KEY' in .env file for stripe payment secret. 
- Add 'GOOGLE_CLIENT_ID' and 'GOOGLE_CLIENT_SECRET' in .env and replace with your own key.

The technologies and packages used in this project :  

- Tailwind CSS for clean style.
- Next JS, Next Auth
- React, RTK Query and redux-persist
- Typescript
- Daisy UI just for some cases around 10%
- react-intersection-observer for infinite scrolling
- react-hook-form
- react-light-gallery
- stripe for payments
- TinyMce as a text editor
- react-to-print for printing the post
