const express = require('express')
const { createReadStream } = require('fs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const USERS = {
  alice: 'password',
  bob: 'hunter2'
}
const BALANCES = {
  alice: 500,
  bob: 100
}

let nextSessionId = 0
const SESSIONS = {} // sessionid -> { username: '', etc}

app.get('/', (req, res) => {
	const sessionId = req.coookies.sessionId
  const username = SESSIONS[sessionId]
  if (username) {
    const balance = BALANCES[username]
    res.send(`Hi ${username}. Your balance is $${balance}`)
  } else {
    createReadStream('index.html').pipe(res)
  }
})

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = USERS[username]
  if (req.body.password === password) {
		res.cookie('sessionId', nextSessionId)
		SESSIONS[nextSessionId] = username
		nextSessionId += 1
    res.redirect('/')
  } else {
    res.send('failed login')
  }
})

app.get('/logout', (req, res) => {
  res.clearCookie('sessionId')
  res.redirect('/')
})

app.listen(4000)
