import { useEffect, useState } from "react";
import { IPatient } from "shared/interfaces";
import { Patients } from "src/models/Patients";

export const usePatientsModel = () => {
	const [patients, setPatients] = useState<IPatient[]>([]);

	useEffect(() => {
		getAll();
	}, []);

	const getAll = async () => {
		Patients.getAll()
			.then(patients => setPatients(patients))
			.catch(err => console.error(err));
	}

	return {
		patients,
	}
}