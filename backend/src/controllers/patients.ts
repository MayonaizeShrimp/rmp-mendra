import express from "express";
import { Patient } from "../models/Patient";
import { PatientType } from "../models/PatientType";
import { Record } from "../models/Record";
import { UpdateOptions } from "sequelize";


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

patientsRouter.post('/', async (req, res) => {
	Patient.create({...req.body})
		.then(newData => res.status(201).json(newData))
		.catch(err => res.status(500).json(err))
})

patientsRouter.put("/:id", async(req, res) => {
	const condition : UpdateOptions = {
		where: {id: req.params.id}
	};

	Patient.update({...req.body}, condition)
		.then(updateResult => {
			const [affectedRows] = updateResult;

			if (affectedRows === 0) res.status(404).json({error: "Patient not found"});
			
			res.json({success: true});
		})
		.catch(err => res.status(500).json({error: err}));
});

export default patientsRouter; 