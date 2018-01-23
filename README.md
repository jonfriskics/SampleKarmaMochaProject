# SampleKarmaMochaProject

## Test suite command

`npm run mocha` runs `NODE_ENV=test mocha 'test/unit/mocha/**/*.spec.js'`, which starts mocha then searches for any files ending in `.spec.js` files located in `test/mocha/`.

`npm run unit` runs `cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run`, which starts karma then searches for any files ending in `.spec.js` files located in `test/specs/`.

I have attempted to write the tests in a manner where the mocha tests are running static analysis of the files and the karma tests are testing what renders.

Learners will be prompted to run the standard `npm run test` command in a Project, which runs Karma tests and mocha tests from the standard karma.conf.js

I am open to discussing a better way to handle this.

## Steps to pass all tests

1. `@hello-world-exists` - In `src/componenets` rename `HelloWorlds.vue` to `HelloWorld.vue`.
2. `@hello-world-exists` - In `src/componenets/HelloWorld.vue` modify the msg string from `Welcome to Your Vue.js Application` to `Welcome to Your Vue.js App`.
3. `@hello-world-renders-correct-contet` - In `src/componenets/HelloWorld.vue` on line 3, replace tag of `h2` surrounding the msg with an `h1`.

# Default Vue CLI README appears below

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
