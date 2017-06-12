const mustBeLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You must be logged in')
  }
  next()
}

const selfOnly = action => (req, res, next) => {
  if (req.params.id !== req.user.id) {
    return res.status(403).send(`You can only ${action} yourself.`)
  }
  next()
}

const selfOrSessionOnly = action => (req, res, next) => {
  if (req.params.userId !== req.user.id && req.sessionID != req.params.sessionId) {
    return res.status(403).send(`You can only ${action} yourself.`)
  }
  next()
}


const forbidden = message => (req, res) => {
  res.status(403).send(message)
}

// Feel free to add more filters here (suggested: something that keeps out non-admins)

const adminsOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(401).send('You must be an admin user')
  }
  next()
}

module.exports = {mustBeLoggedIn, selfOnly, forbidden, adminsOnly}
