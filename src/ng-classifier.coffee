'use strict'
through    = require 'through2'
path       = require 'path'
ngClassify = require 'ng-classify'

module.exports = (file, args) ->
    options = undefined
    options = args if typeof args is 'function'
    if typeof args is 'object'
        for key,val of args
            options = {} if not options?
            options[key] = val
    through (buf, enc, next) ->
        return next() if (path.extname file) isnt '.coffee'
        @push ngClassify (buf.toString 'utf8'), options
        next()
