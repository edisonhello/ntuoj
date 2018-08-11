const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const koaLogger = require('koa-logger')
const koaViews = require('koa-views')
const koaBodyparser = require('koa-bodyparser')

const debug = require('debug')('main')

const parseCookie = require('./assets/utils/parseCookie.js')
const getRandomString = require('./assets/utils/getRandomString.js')
const NTUOJLogin = require('./assets/apps/NTUOJLogin.js')
const testLoginStatus = require('./assets/apps/testLoginStatus.js')

app.use(koaLogger())
app.use(koaBodyparser())
app.use(koaViews(__dirname, { extension: 'html' }))

let homeRouter = new Router()

homeRouter.get(['/', '/login'], async (ctx) => {
    let cookie = ctx.request.header.cookie
    cookie = parseCookie(cookie)
    await ctx.render('main')
    // if(typeof(cookie['PHPSESSID']) != 'string' || cookie['PHPSESSID'].length != 26) {
    //     // this part does really set header, unknown reason.
    //     // but now, if cookie is empty, it will be set at front-end
    //     debug("got no cookie")
    //     ctx.response.header['set-cookie'] = getRandomString(26)
    // }
}).post(['/login'], async (ctx) => {
    // console.log(ctx.request)
    let {username, password} = ctx.request.body
    let cookie = ctx.request.header.cookie
    let sessionid = parseCookie(cookie)['PHPSESSID']
    debug(username, cookie, sessionid)

    let res = await NTUOJLogin(username, password, cookie)
    if(res[0] === true) ctx.body = 'success'
    else ctx.body = res[1]

    // testLoginStatus(cookie)
})

let router = new Router()
router.use(homeRouter.routes(), homeRouter.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(10011)
