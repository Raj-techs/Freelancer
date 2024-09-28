const WorksModel = require("../models/Works")
const express = require("express")
const WorksController = require("../controllers/WorksController")
const verifyToken = require("../middleware/verifyToken")
const router = express.Router()

router.get('/mywork',verifyToken,WorksController.MyWorks)

router.post('/addwork',verifyToken,WorksController.AddWork)
router.post('/addcompletedworks',verifyToken,WorksController.AddCompletedWorks)
router.post('/completedworks',verifyToken,WorksController.CompletedWorks)
router.get('/allworks',WorksController.AllWorks)
module.exports=  router