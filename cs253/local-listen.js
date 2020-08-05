const express = require('express')
const { exec } = require('child_process')

const COMMAND = 'open /Applications/Dictionary.app'

const app = express()

app.get('/', (req, res) => {
  exec(COMMAND, err => {
    // res.set('Access-Control-Allow-Origin', '*')
    if (err) res.status(500).send(err.stack)
    else res.status(200).send('Success')
  })
})

app.listen(4000, '127.0.0.1')