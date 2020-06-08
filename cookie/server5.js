const express = require('express')
const cookieParser = require('cookie-parser')
const { createReadStream } = require('fs')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

const USERS = {
  alice: 'password',
  bob: 'hunter2'
}
const BALANCES = {
  alice: 500,
  bob: 100
}

const SESSIONS = {} // sessionid -> { username: '', etc}

app.get('/', (req, res) => {
	const sessionId = req.cookies.sessionId
  const username = SESSIONS[sessionId]
  if (username) {
    res.send(`
      Hi ${username}. Your balance is $${BALANCES[username]}.
      <form method='POST' action='/transfer'>
        Send amount:
        <input name='amount' />
        To user:
        <input name='to' />
        <input type='submit' value='Send' />
      </form>
    `)
  } else {
    createReadStream('index.html').pipe(res)
  }
})

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = USERS[username]
  if (req.body.password === password) {
    const nextSessionId = randomBytes(16).toString('base64')
		res.cookie('sessionId', nextSessionId)
		SESSIONS[nextSessionId] = username
    res.redirect('/')
  } else {
    res.send('failed login')
  }
})

app.get('/logout', (req, res) => {
  const sessionId = req.cookies.sessionId
  delete SESSIONS[sessionId]
  res.clearCookie('sessionId')
  res.redirect('/')
})

app.post('/transfer', (req, res) => {
  const sessionId = req.cookies.sessionId
  const username = SESSIONS[sessionId]

  if (!username) {
    res.send('fail!')
    return
  }
  
  const amount =  Number(req.body.amount)
  const to = req.body.to

  BALANCES[username] -= amount
  BALANCES[to] += amount
  res.redirect('/')
})

app.listen(4000)

