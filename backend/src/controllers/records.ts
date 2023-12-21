import express from "express";
import { Record } from "../models/Record";
import { UpdateOptions } from "sequelize";


const recordsRouter = express.Router();

recordsRouter.use(express.json());

recordsRouter.post('/', async (req, res) => {
	Record.create({...req.body})
		.then(newData => res.status(201).json(newData))
		.catch(err => res.status(500).json(err))
})

recordsRouter.put("/:id", async(req, res) => {
	const condition : UpdateOptions = {
		where: {id: req.params.id}
	};

	Record.update({...req.body}, condition)
		.then(([affectedRows]) => {
			if (affectedRows === 0) return res.status(404).json({error: "Record not found"});
			res.json({success: true});
		})
		.catch(err => res.status(500).json({error: err}));
});


recordsRouter.delete("/:id", async(req, res) => {
	const condition : UpdateOptions = {
		where: {id: req.params.id}
	};
	Record.destroy(condition)
		.then(deletedRows => {
			if (deletedRows === 0) return res.status(404).json({error: "Record not found"});
			res.json({success: true});
		})
		.catch(err => res.status(500).json({error: err}));
});

export default recordsRouter; 