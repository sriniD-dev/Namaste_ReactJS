what is npm?
npm---> npm is not node package manager,it manages the package
what is package.json?
package.json is a version file for npm,a meta-data file that describes the project dependancies,script,configurations of the project.
what is package-lock.json?
package-lock.json is a lock file which has exact version list of dependancies of the project,including react version numbers.
what is Bundler?
A bundle of scripts,style sheets and html file when its hosted in the webpage or production build.Webpack is a bundler,parcel is a bundler and its most commonly used because of its fastness.

how to install a package in a react app?
npm install -d <package name>
There are two types of depandancies in the project.ii)Dev dependancies iii) production dependancies
Dev Dependancies:::::::: are the packages that are required in development envt. of a project.These can be installed after install command..."-D".
npm install -d "packagename"
Prod Dependancies:::::::: are the dependancies in production envt.

what is the difference between "tilde" and "caret" in package.json?
tilde - gives you the bug fixes of the dependancy,
caret - gives you the backward compatibility of the package.

what is transitive dependancies?
 Dependancies that are not directly used in the project brought by other third party libraries in the project.
 For Example :::::: if we install parcel package from npm, the entire parcel npm library is  downloaded into nodemodules.In parcel  folder from node_modules -->which hasinbuilt package.json which has list of dependancies.Those dependancies are called as transitive depandancies..

 In a reat project  do we have single package.json file or multiple package.json files?

 can you add nodemodules to the project?
 No as node_modules are bulk in size and its not necessary to add node_modules as we had package.json and package-lock.json files which we can able to recreate  the nodemoduls

 what is gitignore?
 the filenames under this .gitignore are obmitted in git repo when publishing to github
 