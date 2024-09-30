//
//
const CF = require('../conf/conf_app')
const { appCurrentDateTime } = require('../util/time_format')


let api = {
    "test": {
        "/api/test": {
            "method": "GET",
            "url": "/api/test",
            "input": {},
            "desc": "test get check server health and API"
        }
    },
    "dashboard": {
            "method": "GET",
            "url": "/api/dashboard",
            "input": {},
            "desc": "query all dashboard : total project, K3S, WK, avrg AFE cost, avrg_cost_actual"
    },
    "raw": {
        "WK": {
            "method": "GET",
            "url": "/api/raw/WK/q_find-all",
            "input": {},
            "desc": "query find all raw data project"
        },
        "KKKS": {
            "method": "GET",
            "url": "/api/raw/KKKS/q_find-all",
            "input": {},
            "desc": "query find all raw data project"
        },
        "project`": {
            "method": "GET",
            "url": "/api/raw/project/q_find-all",
            "input": {},
            "desc": "query find all raw data project"
        }
    },
    "project" : {
        "query": {
            "find_all": {
                "method": "GET",
                "url": "/api/project/q_find-all",
                "input": {},
                "desc": "query find all raw data project"
            }
        }
    },
    "WK": {

    },
    "KKKS" : {

    }
}


const test_get = async (req, res) => {
    try {
        const servDateTime = appCurrentDateTime()

        return res.json({
            isSuccess: true,
            payload: {
                appName: CF.app.name,
                port: CF.server.port,
                environment: CF.server.ENV,
                appVersion: CF.app.version,
                serverDate: servDateTime.strDate,
                serverTime: servDateTime.serverTime,
                random: Math.random()
            },
            api: api
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

// -----------------------------------------------------------------------------
module.exports = {
    test_get
}
