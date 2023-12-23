import { message } from "antd";
import { useEffect, useState } from "react";
import { IPatient } from "shared/interfaces";
import { Patients } from "src/models/Patients";

export const usePatientsModel = () => {
	const [patients, setPatients] = useState<IPatient[]>([]);

	useEffect(() => {
		getAll();
	}, []);

	const getAll = async () => {
		return Patients.getAll()
			.then(patients => setPatients(patients))
			.catch(err => console.error(err));
	}

	const getById = async (id: number) => {
		return Patients.getById(id);
	}

	const create = async (data: IPatient) => {
		return Patients.create(data);
	}

	const update = async (id: number, data: IPatient) => {
		return Patients.update(id, data)
	}

	return {
		patients,
		getAll,
		getById,
		create,
		update,
	}
}