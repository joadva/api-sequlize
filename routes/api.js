const router = require('express').Router();

const apiFilmsRouter = require('./api/films')
const apiUsersRouter = require('./api/users')

//middleware
const middleware = require('../middleware/userToken');

router.use('/films',middleware.checkToken, apiFilmsRouter);
router.use('/users',middleware.checkToken, apiUsersRouter);

module.exports = router;