
'use strict'

const request = require('requisition')
const app = require('koa')()

app.use(function*(next) {
  this.set('Access-Control-Allow-Credentials', 'true')
  this.set('Access-Control-Allow-Origin', 'some-origin')
  this.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,others')
  this.set('Access-Control-Allow-Headers', 'Accept,Content-Type,Origin,X-Requested-With,others')

  yield next
})

app.use(function*() {
  let url = this.query.url
  if (!url) {
    return
  }

  url = decodeURIComponent(url)
  const res = yield request(url)
  this.body = yield res.text()
})

app.listen(3003)

console.info('listen: %d', 3003)
