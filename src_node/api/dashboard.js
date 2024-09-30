//
//
const router = require('express').Router()
const { authentication } = require('../util/is-auth')



const { info_all } = require("../module/dashboard-query")
router.get('/', authentication, info_all)

const { info_select_project } = require("../module/dashboard-query")
router.post('/', authentication, info_select_project)


module.exports = router
