const request = require('request')
const cheerio = require('cheerio')
const debug = require('debug')('testStatus')

const getHeader = require('../utils/getHeader.js')

module.exports = (cookie) => {
    return new Promise((resolve, reject) => {
        let url = 'http://acm.csie.org/ntujudge/status.php'
        debug(url, cookie)

        request.get({
            headers: getHeader(cookie),
            url: url,
            timeout: 30000,
        }, (err, res, body) => {
            if(err) return resolve([false, err])

            debug(body)
        })
    })
}
