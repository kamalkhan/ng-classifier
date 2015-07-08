/*!
 * ng Classifier v0.1.0
 * A browserify transform for ng-classify.
 * https://github.com/kamalkhan/ng-classifier
 *
 * The MIT License (MIT)
 * Copyright (c) 2015 M. Kamal Khan <shout@bhittani.com>
 */(function() {
  'use strict';
  var ngClassify, path, through;

  through = require('through2');

  path = require('path');

  ngClassify = require('ng-classify');

  module.exports = function(file, args) {
    var config;
    if ((args == null) || (args.config == null)) {
      config = void 0;
    }
    if (args.config != null) {
      config = args.config;
    }
    return through(function(buf, enc, next) {
      if ((path.extname(file)) !== '.coffee') {
        return next();
      }
      this.push(ngClassify(buf.toString('utf8'), config));
      return next();
    });
  };

}).call(this);
