//
//
const WK = require('../model/WK')
const KKKS = require('../model/KKKS')
const Project = require('../model/project')


const find_all_doc = async (params) => {
    let {
        par_project_sort,
        par_project_select,
        par_KKKS_sort,
        par_KKKS_select,
        par_WK_sort,
        par_WK_select,
    } = params

    par_project_sort = par_project_sort || {}
    par_project_select = par_project_select || {}
    par_KKKS_sort = par_KKKS_sort || {}
    par_KKKS_select = par_KKKS_select || {}
    par_WK_sort = par_WK_sort || {}
    par_WK_select = par_WK_select || {}

    let list_project = await  Project.find().sort(par_project_sort).select(par_project_select)
    let list_KKKS = await  KKKS.find().sort(par_KKKS_sort).select(par_KKKS_select)
    let list_WK = await  WK.find().sort(par_WK_sort).select(par_WK_select)

    return {
        list_project: list_project,
        list_KKKS: list_KKKS,
        list_WK: list_WK
    }

}


const  create_info_upper = (
    list_project_length,
    list_KKKS_length,
    list_WK_length
) => {

    return {
        "total_project" : {
            "title": "Total Projects",
            "val": list_project_length,
            "percYTD": 4.0,
            "note": "from last year"
        },
        "total_KKKS" : {
            "title": "Total K3S",
            "val": list_KKKS_length,
            "percYTD": 0.0,
            "note": "from last year"
        },
        "total_WK" : {
            "title": "Total WK",
            "val": list_WK_length,
            "percYTD": 0.0,
            "note": ""
        },
        "average_time_project_finished": {
            "title": "Avg Time Project Finished (Months)",
            "val": 63,
            "percYTD": 4,
            "note": "from last year"
        },
        "avrg_cost_AFE" : {
            "title": "Avg AFE ($)",
            "val": 7310000,
            "percYTD": 0.0,
            "note": "from last year"
        },
        "avrg_cost_actual" : {
            "title": "Avg Actual Cost ($)",
            "val": 6325000,
            "percYTD": 24.0,
            "note": "from last year"
        },
    }
}

const create_status_kegiatan = (list) => {
    let obj = {
        "G&G Study": {
            "Not Started" : 0,
            "On-Going": 0,
            "Finished": 0
        },
        "2D Seismic": {
            "Not Started" : 0,
            "On-Going": 0,
            "Finished": 0
        },
        "3D Seismic": {
            "Not Started" : 0,
            "On-Going": 0,
            "Finished": 0
        },
        "Exploration Well": {
            "Not Started" : 0,
            "On-Going": 0,
            "Finished": 0
        },
        "Non-Seismic": {
            "Not Started" : 0,
            "On-Going": 0,
            "Finished": 0
        }
    }


    let a = "", b = ""
    for (let i=0; i< list.length; i++) {
        a = list[i]['jenis_kegiatan'].trim()
        b = list[i]['status_pelaksanaan'].trim()
        // console.log(a, "Seismik 2D",  a.localeCompare("Seismik 2D"),  b, b.localeCompare("Belum Mulai") )
        if ( a.localeCompare("Seismik 2D") == 0 ) {
            if ( b.localeCompare("Belum Mulai") == 0) {
                obj["2D Seismic"]["Not Started"] += 1
            } else if ( b.localeCompare("Selesai") == 0) {
                obj["2D Seismic"]["Finished"] += 1
            } else if ( b.localeCompare("Sedang Jalan (Recording)") == 0 || b.localeCompare("Sedang Jalan (Belum Recording)") == 0) {
                obj["2D Seismic"]["On-Going"] += 1
            } else {
                obj["2D Seismic"]["Not Started"] += 1
            }
        } else if ( a.localeCompare("Seismik 3D") == 0 ) {
            if ( b.localeCompare("Belum Mulai") == 0) {
                obj["3D Seismic"]["Not Started"] += 1
            } else if ( b.localeCompare("Selesai") == 0) {
                obj["3D Seismic"]["Finished"] += 1
            } else if ( b.localeCompare("Sedang Jalan (Recording)") == 0 || b.localeCompare("Sedang Jalan (Belum Recording)") == 0) {
                obj["3D Seismic"]["On-Going"] += 1
            } else {
                obj["3D Seismic"]["Not Started"] += 1
            }
        } else if ( a.localeCompare("Exploration Well") == 0 ) {
            if ( b.localeCompare("Belum Mulai") == 0) {
                obj["Exploration Well"]["Not Started"] += 1
            } else if ( b.localeCompare("Selesai") == 0) {
                obj["Exploration Well"]["Finished"] += 1
            } else if ( b.localeCompare("Sedang Jalan (Recording)") == 0 || b.localeCompare("Sedang Jalan (Belum Recording)") == 0) {
                obj["Exploration Well"]["On-Going"] += 1
            } else {
                obj["Exploration Well"]["Not Started"] += 1
            }
        } else if ( a.localeCompare("Survey Lainnya") == 0 ) {
            if ( b.localeCompare("Belum Mulai") == 0) {
                obj["Non-Seismic"]["Not Started"] += 1
            } else if ( b.localeCompare("Selesai") == 0) {
                obj["Non-Seismic"]["Finished"] += 1
            } else if ( b.localeCompare("Sedang Jalan (Recording)") == 0 || b.localeCompare("Sedang Jalan (Belum Recording)") == 0) {
                obj["Non-Seismic"]["On-Going"] += 1
            } else {
                obj["Non-Seismic"]["Not Started"] += 1
            }
        }

    }
    return obj
}

const dummy_total_rencana_vs_realisasi_pekerjaan = () => {
    return {
        "2D Seismic": {
            "rencana_kerja": 3250,
            "realisasi_kerja": 2750
        },
        "3D Seismic": {
            "rencana_kerja": 3750,
            "realisasi_kerja": 2150
        },
        "G&G Study": {
            "rencana_kerja": 20000,
            "realisasi_kerja": 9750
        },
        "Exploration Well": {
            "rencana_kerja": 15000,
            "realisasi_kerja": 5000
        },
        "Non-Seismic": {
            "rencana_kerja": 15,
            "realisasi_kerja": 9
        }
    }
}


const dummy_persentase_rencana_vs_realisasi_pekerjaan = () => {
    return {
        "2D Seismic": 73.5,
        "3D Seismic": 60.5,
        "G&G Study": 61.5,
        "Exploration Well": 51.5,
        "Non-Seismic": 20.0
    }
}

const dummy_trend_budget_cost_vs_actual_cost = () => {
    return [
        {
            "date": "2023-06-01",
            "Budget Cost": 45000000,
            "Actual Cost": 35000000
        },
        {
            "date": "2023-07-01",
            "Budget Cost": 50000000,
            "Actual Cost": 38000000
        },
        {
            "date": "2023-08-01",
            "Budget Cost": 52000000,
            "Actual Cost": 43000000
        },
        {
            "date": "2023-09-01",
            "Budget Cost": 50000000,
            "Actual Cost": 41000000
        },
        {
            "date": "2023-10-01",
            "Budget Cost": 49000000,
            "Actual Cost": 39000000
        },
        {
            "date": "2023-11-01",
            "Budget Cost": 47000000,
            "Actual Cost": 36000000
        },
        {
            "date": "2023-12-01",
            "Budget Cost": 48000000,
            "Actual Cost": 40000000
        },
        {
            "date": "2024-01-01",
            "Budget Cost": 55400000,
            "Actual Cost": 45700000
        },
        {
            "date": "2024-02-01",
            "Budget Cost": 47000000,
            "Actual Cost": 46000000
        },
        {
            "date": "2024-03-01",
            "Budget Cost": 44000000,
            "Actual Cost": 46000000
        },
        {
            "date": "2024-04-01",
            "Budget Cost": 47000000,
            "Actual Cost": 44000000
        },
        {
            "date": "2024-05-01",
            "Budget Cost": 46000000,
            "Actual Cost": 41000000
        },
        {
            "date": "2024-06-01",
            "Budget Cost": 45000000,
            "Actual Cost": 42000000
        },
    ]
}



const dummy_total_budget_vs_actual_cost = () => {
    return {
        "2D Seismic": {
            "Budget Cost": 625000000,
            "Actual Cost": 475000000
        },
        "3D Seismic": {
            "Budget Cost": 715000000,
            "Actual Cost": 495000000
        },
        "G&G Study": {
            "Budget Cost": 715000000,
            "Actual Cost": 495000000
        },
        "Exploration Well": {
            "Budget Cost": 800000000,
            "Actual Cost": 510000000
        },
        "Non-Seismic": {
            "Budget Cost": 715000000,
            "Actual Cost": 450000000
        }
    }
}

const dummy_persentase_rencana_vs_realisasi_cost = () => {
    return {
        "2D Seismic": 75.5,
        "3D Seismic": 70.25,
        "G&G Study": 74.3,
        "Exploration Well": 73.6,
        "Non-Seismic": 81.5

    }
}

const dummy_status_usulan_program = () => {
    return {
        "2D Seismic": {
            "New": 9,
            "Carry Forward": 4,
            "Carry Over": 2,
            "KP": 15,
            "KKP": 10,
            "KK": 5,
            "NK": 70
        },
        "3D Seismic": {
            "New": 9,
            "Carry Forward": 4,
            "Carry Over": 2,
            "KP": 15,
            "KKP": 10,
            "KK": 5,
            "NK": 70
        },
        "G&G Study": {
            "New": 60,
            "Carry Forward": 15,
            "Carry Over": 25,
            "KP": 15,
            "KKP": 10,
            "KK": 5,
            "NK": 70
        },
        "Exploration Well": {
            "New": 30,
            "Carry Forward": 7,
            "Carry Over": 13,
            "KP": 15,
            "KKP": 10,
            "KK": 5,
            "NK": 70
        },
        "Non-Seismic": {
            "New": 3,
            "Carry Forward": 1,
            "Carry Over": 2,
            "KP": 15,
            "KKP": 10,
            "KK": 5,
            "NK": 70
        }
    }
}



const info_all = async (req, res) => {
    //  find all docs
    let {
        list_project,
        list_KKKS,
        list_WK
    } = await find_all_doc({})

    // create Summary of list_project
    let list_project_summary = []
    list_project.forEach( (el) => {
        list_project_summary.push({
            "_id": el._id.toString(),
            name: el.name,
            nilai_investasi: el.nilai_investasi
        })
    })

    // show 6 top_watch
    let top_watch = list_project_summary.sort((a, b) => parseFloat(b.nilai_investasi) - parseFloat(a.nilai_investasi)).slice(0, 6)


    let obj = {
        "info_upper": create_info_upper(list_project.length, list_KKKS.length, list_WK.length),
        "top_watch": top_watch,
        "status_kegiatan": create_status_kegiatan(list_project),
        "total_rencana_vs_realisasi_pekerjaan": dummy_total_rencana_vs_realisasi_pekerjaan(),
        "persentase_rencana_vs_realisasi_pekerjaan": dummy_persentase_rencana_vs_realisasi_pekerjaan(),
        "trend_budget_cost_vs_actual_cost": dummy_trend_budget_cost_vs_actual_cost(),
        "total_budget_vs_actual_cost": dummy_total_budget_vs_actual_cost(),
        "persentase_rencana_vs_realisasi_cost": dummy_persentase_rencana_vs_realisasi_cost(),
        "status_usulan_program": dummy_status_usulan_program()

    }
    return res.status(200).json(obj)
}
// -----------------------------------------------------------------------------
module.exports = {
    // info_upper,
    info_all
}
