const express = require('express')
const ejs = require('ejs')

const app = express()

app.get('/', (req, res) => {
    const template =`
    <h1> Hi, <%= name %>.</h1>
    `
    const html = ejs.render(template, { name: 'Raph' })

    res.send(html)

})
app.listen(4000)