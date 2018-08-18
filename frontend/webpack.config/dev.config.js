const merge = require('webpack-merge')
const config = require('./default.config.js')

module.exports = merge(config, {
    mode: 'development'
})
