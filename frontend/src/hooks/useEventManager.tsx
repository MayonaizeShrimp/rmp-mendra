import { useEffect, useState } from "react";
import { IPatient } from "shared/interfaces";
import { usePatientsModel } from "./usePatientsModel";

export const useEventManager = () => {
	const [selectedPatientId, setSelectedPatientId] = useState<number>(0);

	const [filteredPatients, setFilteredPatients] = useState<IPatient[]>([]);

	const patientsModel = usePatientsModel();

	useEffect(() => {
		handleSearchPatient("");
	}, [patientsModel.patients])

	const handleSearchPatient = (searchQuery: string) => {
		const filteredPatients = patientsModel.patients.filter((patient) => {
		const nameMatches = patient.nama
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const uuidMatches = patient.noPasien
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		return nameMatches || uuidMatches;
		});
		setFilteredPatients(filteredPatients);
	};

	const handleClickAddNewPatient = () => {
		setSelectedPatientId(0);
	}

	const handleClickPatientCard = (id: number) => {
		setSelectedPatientId(id);
	}

	return {
		...patientsModel,
		filteredPatients,
		selectedPatientId,
		handleSearchPatient,
		handleClickAddNewPatient,
		handleClickPatientCard,
	}
}