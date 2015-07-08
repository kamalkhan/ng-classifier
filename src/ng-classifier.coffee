###
Ng Classifier v0.1.0
http://bhittani.com
https://github.com/kamalkhan/ng-classifier
A browserify transformer for ng-classify.
The MIT License (MIT)
Copyright (c) 2015 M. Kamal Khan <shout@bhittani.com>
###

class window.NgClassifier

    constructor : ->
        # start here

# Support AMD (requirejs)
if (typeof window.define is 'function') and window.define.amd
    window.define 'NgClassifier', [], -> window.NgClassifier
