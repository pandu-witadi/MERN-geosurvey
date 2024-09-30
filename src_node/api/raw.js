//
//
const router = require('express').Router()
const { authentication } = require('../util/is-auth')


const { find_all: project_find_all } = require("../module/raw-query")
router.get('/project/q_find-all', authentication, project_find_all)


const { find_all: WK_find_all } = require("../module/WK-query")
router.get('/WK/q_find-all', authentication, WK_find_all)


const { find_all: KKKS_find_all } = require("../module/KKKS-query")
router.get('/KKKS/q_find-all', authentication, KKKS_find_all)


module.exports = router
