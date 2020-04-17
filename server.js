const express = require('express')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
    const server = express()
    // server.get('/portfolio/:id', (req, res) => {
    //     console.log(req.params.id + ' REQ-ID')
    //     const actualPage = '/portfolio'
    //     const queryParams = { id: req.params.id }
    //     return app.render(req, res, actualPage, queryParams)
    // })

    // server.get('/b', (req, res) => {
    //     return app.render(req, res, '/b', req.query)
    // })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.use(handle).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
