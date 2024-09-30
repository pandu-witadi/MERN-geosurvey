//
//
const router = require('express').Router()
const { authentication } = require('../util/is-auth')


const { info_select_project : titik_info_select_project } = require("../module/geospatial-query")
router.post('/titik', authentication, titik_info_select_project)

const { info_select_project: WK_info_select_project } = require("../module/geospatialWK-query")
router.post('/WK', authentication, WK_info_select_project)


module.exports = router
