const request = require('request')
const cheerio = require('cheerio')
const debug = require('debug')('NTUOJLogin')

const getHeader = require('../utils/getHeader.js')

module.exports = (username, password, cookie) => {
    return new Promise((resolve, reject) => {
        let url = 'http://acm.csie.org/ntujudge/bin/login.php'
        debug(url, username)

        let formdata = {
            'username': username,
            'password': password,
            'submit': 'LOGIN'
        }
        // let formbody = []
        // for(let key in formdata) {
        //     let _key = encodeURIComponent(key)
        //     let _val = encodeURIComponent(formdata[key])
        //     formbody.push(_key + '=' + _val)
        // }
        // debug(formbody)
        // formbody = formbody.join('&')
        request.post({
            headers: getHeader(cookie),
            url: url,
            timeout: 30000,
            form: formdata
        }, (err, res, body) => {
            if(err) return resolve([false, err])

            // console.log(res)
            // console.log(body)

            debug('login response header', res.headers)

            let location = res.headers.location
            if(location === '../index.php') return resolve([true])
            else {
                let msg = location.split('?')[1]
                return resolve([false, msg])
            }
        })
    })
}
