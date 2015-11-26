ng Classifier [![Build Status](https://travis-ci.org/kamalkhan/NgClassifier.svg?branch=master)](https://travis-ci.org/kamalkhan/NgClassifier)
======
A browserify transform for ng-classify ([https://github.com/CaryLandholt/ng-classify](https://github.com/CaryLandholt/ng-classify)).

**Table of contents**

- [Install](#install)
- [Usage](#usage)
- [Development](#development)
	- [Test](#test)
	- [Build](#build)
	- [Test & Build](#test-build)
- [License](#license)

---
# Install
```shell
$ npm install --save-dev ng-classifier
```

# Usage

Use `ng-classifier` as the browserify transform.
```js
transform: [
    ['ng-classifier', {config: {
        appName: 'App' // ng-classify arguments
    }}],
    ['coffeeify']
]
```
ng-classify arguments can be passed in the config object.
*Note* `coffeeify` is not included in this module. It is only listed here to convert coffee to js.

# Development

```shell
$ npm install
```
## Test
```shell
$ gulp test
```
## Build
```shell
$ gulp js
```
## Test & Build
```shell
$ gulp
```

# License

Released under the [MIT License](http://opensource.org/licenses/MIT).
