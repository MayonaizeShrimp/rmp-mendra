import express from "express";
import { Patient } from "../models/Patient";


const patientsRouter = express.Router();

patientsRouter.use(express.json())

patientsRouter.get('/', async (req, res) => {
	Patient.findAll()
		.then(patients => res.json(patients))
		.catch(err => res.status(500).json(err));
})

// patientsRouter.get('/:id', async (req, res) => {
// 	ProfileModel.findByPk(req.params.id, {include: "phrases"})
// 		.then(profile => {
// 			if (!profile) return res.status(404).json(createErrorResponse("error profile not found"));
			
// 			res.json(createSuccessResponse(profile));
// 		})
// 		.catch(err => res.status(500).json(createErrorResponse(err)));
// })

// patientsRouter.post('/', async (req, res) => {
// 	ProfileModel.create({name: req.body.name})
// 		.then(newData => res.status(201).json(createSuccessResponse(newData)))
// 		.catch(err => res.status(500).json(createErrorResponse(err)))
// })

export default patientsRouter; 