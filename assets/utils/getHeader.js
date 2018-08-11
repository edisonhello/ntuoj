module.exports = (cookie) => {
    return {
        // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        // 'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Contest-type': 'application/x-www-form-urlencoded',
        // 'Connection': 'keep-alive',
        'Host': 'acm.csie.org',
        // 'Origin': 'http://acm.csie.org',
        'Referer': 'http://acm.csie.org/ntujudge/index.php',
        'Cookie': cookie,
        // 'Upgrade-Insecure-Requests': 1,
        // 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
    }
}
