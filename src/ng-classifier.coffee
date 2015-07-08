'use strict'
through    = require 'through2'
path       = require 'path'
ngClassify = require 'ng-classify'

module.exports = (file, args) ->
    config = undefined if not args? or not args.config?
    config = args.config if args.config?
    through (buf, enc, next) ->
        return next() if (path.extname file) isnt '.coffee'
        @push ngClassify (buf.toString 'utf8'), config
        next()
