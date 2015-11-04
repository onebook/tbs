
const request = require('requisition')
const app = require('koa')()

app.use(function*() {
  const url = decodeURIComponent(this.query.url)
  if (!url) {
    return
  }

  const res = yield request(url)
  this.body = yield res.text()
})

app.listen(3003)
console.info('listen: %d', 3003)
