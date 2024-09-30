//
//
const router = require('express').Router()
const { authentication } = require('../util/is-auth')


const { test_get } = require("../module/test-query")
router.get('/', test_get)


router.get('/auth', authentication, test_get)


module.exports = router
