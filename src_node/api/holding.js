//
//
const router = require('express').Router()
const { authentication } = require('../util/is-auth')

const { find_all } = require("../module/holding-query")
router.get('/q_find-all', authentication, find_all)

const { find_all_summary } = require("../module/holding-query")
router.get('/q-s_find-all', authentication, find_all_summary)



module.exports = router
