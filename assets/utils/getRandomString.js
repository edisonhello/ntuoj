module.exports = (len) => {
    let lib = '1234567890qwertyuiopasdfghjklzxcvbnm'
    let rt = ''
    for(let i=0; i<len; ++i) rt+=lib[Math.floor(Math.random()*lib.length)]
    return rt
}
