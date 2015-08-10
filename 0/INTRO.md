## AMD and CommonJS
* Specification for defining JS modules and their dependencies.
* CommonJS covers more topics than AMD: Modules, Packages, IO, FileSystem, Promises, etc.

## Why modules?
* Encapsulation
* No globals and namespace hack
* Dependency management
* Script tag hell - not scalable, order is important
* Easier to configure/write test cases

## AMD
* Implementation - RequireJS
* Modules loaded asynchronously - load only when needed
* requireJs.txt

## CommonJS
* Implementation - Browserify, NodeJS
* Modules loaded synchronously - load all up front
* browserify.txt

## Why Browserify?
* Less boilerplate code
* Ability to write JS module that works in the browser and NodeJS
* Less upfront configuration

## Future - Webpack
* Bundles both CommonJS and AMD modules