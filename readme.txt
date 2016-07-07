Hello there!

In order to use the template in PHPStorm you must:

1) Put all the libraries (jquery, three etc.) into js/lib folder
2) Write rest of the code into main.js
3) Configure server for the website, use it as default, click on the Tools -> Deployment -> Automatic Upload,
   go to Tools -> Deployment -> Options and check Upload External Changes.
4) Globally install grunt js, install grunt-cli (sudo npm install -g grunt-cli)
5) Run "npm install" to install all the dependencies
5.1) Run "npm install grunt-postcss autoprefixer" to install the autoprefixer
6) Run "grunt watch" to start watching the files
7) Put favicon.ico and favicon192.png into img folder

//PHP
1) Uncomment PHP code
2) Add Correct links to the valid URL array
3) Add your database username, password and tablename to $dbCredentials array;

//JS
1) To use my library -> G() || G(selector)
P.s In order to compress SVG files use SVGO (svgo --disable=cleanupIDs (folder/ or pic.svg))

P.S If you want to show grunt tools window, right-click the gurntfile.js and click show grunt tasks
