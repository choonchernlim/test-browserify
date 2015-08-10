
# test-browserify

## 1 - One JS file - b() after a()

* `b() ia not a function`

## 2 - One JS file - b() before a()

* Function order is important.
* Variables leak into global scope.
    
## 3 - Separate JS files - b.js after/before a.js

* Order of script tags is important.
    * `b.js` must be added before `a.js` 
    * Script tag hell in MV* world.
* Variables still leak into global scope.

## 4 - Browserify approach - app.js

* `npm init` - create `package.json`
* `npm install --save-dev browserify`
* `./node_modules/browserify/bin/cmd.js 4/a.js > 4/app.js`
* `require()` - get dependency
* `module.exports` - export function for others to use
* Inspect `app.js`
    * Better performance - all JS files into one file
* No variables leak into global scope.

## 5 - With external lib - jQuery

* `npm install --save-dev jquery`
* Inspect `app.js`
* Still no variables leak into global scope.

## 6 - Karma

* `npm install -save-dev phantomjs jasmine browserify-istanbul proxyquireify karma-browserify karma-jasmine karma-phantomjs-launcher karma-junit-reporter karma-coverage`
* `karma.conf.js`
* `./node_modules/karma/bin/karma start`
