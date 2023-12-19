import { useEffect, useState } from "react";
import { usePatientsModel } from "./usePatientsModel";
import { IPatient } from "shared/interfaces";
import dayjs from "dayjs";

const EMPTY_PATIENT : IPatient = {
	id: 0,
	nama: "",
	tanggalLahir: dayjs().format("YYYY-MM-DD"),
	ktp: "",
	noPasien: "",
	alamat: "",
	patientTypeId: 0,
	alergi: "",
	hp: "",
	gender: 0,
	Records: [],
}

export const useEventManager = () => {
	const [selectedPatientId, setSelectedPatientId] = useState<number>(0);
	const [selectedPatient, setSelectedPatient] = useState<IPatient>(EMPTY_PATIENT);

	const [filteredPatients, setFilteredPatients] = useState<IPatient[]>([]);

	const patientsModel = usePatientsModel();

	const [isBiodataFormLoading, setIsBiodataFormLoading] = useState<boolean>(false);

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
		setSelectedPatient(EMPTY_PATIENT);
	}

	const handleClickPatientCard = (id: number) => {
		patientsModel.getById(id)
			.then(patient => setSelectedPatient(patient));
	}

	const handleSubmitBiodata = async (data: IPatient) => {
		const id = data.id as number;

		setIsBiodataFormLoading(true);
		if (id === 0) {
			const result = await patientsModel.create(data);
		} else {
			const result = await patientsModel.update(id, data);
		}

		setIsBiodataFormLoading(false);
	}

	return {
		filteredPatients,
		selectedPatientId,
		selectedPatient,
		isBiodataFormLoading,
		handleSearchPatient,
		handleClickAddNewPatient,
		handleClickPatientCard,
		handleSubmitBiodata,
	}
}