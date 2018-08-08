const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

const debug = require('debug')('main')

let homeRouter = new Router()

homeRouter.get('/', async (ctx) => {
    debug(ctx)
    ctx.body = 'This is main page.'
})

let router = new Router()
router.use('/', homeRouter.routes(), homeRouter.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(10011)
