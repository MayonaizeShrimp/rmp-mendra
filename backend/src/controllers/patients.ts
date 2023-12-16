import express from "express";
import { Patient } from "../models/Patient";
import { PatientType } from "../models/PatientType";
import { Record } from "../models/Record";


const patientsRouter = express.Router();

patientsRouter.use(express.json());

patientsRouter.get('/', async (req, res) => {
	Patient.findAll()
		.then(patients => res.json(patients))
		.catch(err => res.status(500).json(err));
});

patientsRouter.get('/:id', async (req, res) => {
	Patient.findByPk(req.params.id, {include: [PatientType, Record]})
		.then(patient => {
			if (!patient) return res.status(404).json(patient);
			
			res.json(patient);
		})
		.catch(err => res.status(500).json(err));
})

// patientsRouter.post('/', async (req, res) => {
// 	ProfileModel.create({name: req.body.name})
// 		.then(newData => res.status(201).json(createSuccessResponse(newData)))
// 		.catch(err => res.status(500).json(createErrorResponse(err)))
// })

export default patientsRouter; 