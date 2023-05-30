1.How to run react app in react app ?
Instead of using commands all the way,the apps can be run using scripts with node modules.
In package.json :::
"start":"parcel index.html"--development mode
"build":"parcel build index.html" -- production mode

The react app can be run in local/dev mode -->> npm run start // npm start
prod/mode -->> npm run build

2. what is jsx?
   JSX is HTML-like syntax

3.What is plain Javascript?
Its a code js engine can understand.JSX is not a plain javascript.

4.How JSX is printed in browser ?
Browser cannot reac JSX,hence before reaching the browser,its ger transpild to pure JS using -Parcel-Babel

5.What is react functionalcomponent?
Its aJS function which returns jsx
