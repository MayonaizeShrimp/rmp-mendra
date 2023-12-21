import { useEffect, useState } from "react";
import { usePatientsModel } from "./usePatientsModel";
import { IPatient, IRecord } from "shared/interfaces";
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

const EMPTY_RECORD : IRecord = {
	tanggal: dayjs().format("YYYY-MM-DD"),
	tinggiBadan: 0,
	beratBadan: 0,
	lingkarPerut: 0,
	sistole: 0,
	diastole: 0,
	keluhan: "",
	icd10: "",
	dxPrimer: "",
	terapi: "",
	hasilLab: "",
	patientId: 0
}

export const useEventManager = () => {
	//list of patients to show
	const [filteredPatients, setFilteredPatients] = useState<IPatient[]>([]);
	//user selected states
	const [selectedPatient, setSelectedPatient] = useState<IPatient>(EMPTY_PATIENT);
	const [selectedRecord, setSelectedRecord] = useState<IRecord>(EMPTY_RECORD);
	//disable form when loading
	const [isBiodataFormLoading, setIsBiodataFormLoading] = useState<boolean>(false);

	//model hooks
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
		setSelectedPatient(EMPTY_PATIENT);
		setSelectedRecord(EMPTY_RECORD);
	}

	const handleClickPatientCard = (id: number) => {
		patientsModel.getById(id)
			.then(patient => setSelectedPatient(patient));
		setSelectedRecord(EMPTY_RECORD);
	}

	const handleSubmitBiodata = async (data: IPatient) => {
		const id = data.id as number;

		setIsBiodataFormLoading(true);
		if (id === 0) {
			await patientsModel.create(data);
		} else {
			await patientsModel.update(id, data);
		}

		setIsBiodataFormLoading(false);
		patientsModel.getAll();
	}

	const handleClickAddNewRecord = () => {
		setSelectedRecord({
			...EMPTY_RECORD,
			patientId: selectedPatient.id ? selectedPatient.id : 0,
		})
	}

	const handleClickMedRecord = (rowData: IRecord) => {
		setSelectedRecord(rowData);
	}

	return {
		filteredPatients,
		selectedRecord,
		selectedPatient,
		isBiodataFormLoading,
		handleSearchPatient,
		handleClickAddNewPatient,
		handleClickPatientCard,
		handleSubmitBiodata,
		handleClickAddNewRecord,
		handleClickMedRecord,
	}
}