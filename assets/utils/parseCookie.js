module.exports = (cookie) => {
    if(typeof(cookie) != 'string') return {}
    let cookies = cookie.split(';')
    for(let i in cookies) if(cookies[i][0] == ' ') cookie[i] = cookie[i].substr(1, cookie[i].length)
    let ret = {}
    for(let i in cookies) {
        let z = cookies[i].split('=')
        ret[z[0]] = z[1]
    }
    return ret
}
