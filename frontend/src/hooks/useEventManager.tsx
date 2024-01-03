import { useEffect, useState } from "react";
import { usePatientsModel } from "./usePatientsModel";
import { IPatient, IRecord } from "shared/interfaces";
import dayjs from "dayjs";
import { useRecordsModel } from "./useRecordsModel";
import { message } from "antd";

const EMPTY_PATIENT : IPatient = {
	id: 0,
	nama: "",
	tanggalLahir: dayjs().format("YYYY-MM-DD"),
	ktp: "",
	noPasien: "",
	alamat: "",
	patientTypeId: 1,
	alergi: "",
	hp: "",
	gender: false,
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

export type InputMode = "patient" | "record" ;

export const useEventManager = () => {
	//list of patients to show
	const [filteredPatients, setFilteredPatients] = useState<IPatient[]>([]);
	//user selected states
	const [selectedPatient, setSelectedPatient] = useState<IPatient>(EMPTY_PATIENT);
	const [selectedRecord, setSelectedRecord] = useState<IRecord>(EMPTY_RECORD);
	//disable form when loading
	const [isBiodataFormLoading, setIsBiodataFormLoading] = useState<boolean>(false);
	//input mode patient or records
	const [inputMode, setInputMode] = useState<InputMode>("patient");

	//model hooks
	const patientsModel = usePatientsModel();
	const recordsModel = useRecordsModel();

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
		setFilteredPatients(filteredPatients.sort((a, b) => a.nama.toLowerCase().localeCompare(b.nama.toLowerCase())));
	};

	const handleClickAddNewPatient = () => {
		setSelectedPatient(EMPTY_PATIENT);
		setSelectedRecord(EMPTY_RECORD);
	}

	const handleClickPatientCard = (id: number) => {
		patientsModel.getById(id)
			.then(patient => setSelectedPatient(patient))
			.catch(err => message.error("Tidak bisa terhubung ke server"));
		setSelectedRecord(EMPTY_RECORD);
	}

	const handleSubmitBiodata = async (data: IPatient) => {
		const id = data.id as number;

		setIsBiodataFormLoading(true);
		if (id === 0) {
			patientsModel.create(data).then(res => {
					if (!res.id || res.id === 0) {
						console.error(res);
						throw {message: "error ketika insert ke DB"};
					}

					patientsModel.getAll();
					handleClickPatientCard(res.id)
					message.success(`Pasien ${data.nama} berhasil ditambahkan`);
				})
				.catch(err => {
					if (err.message) message.error(err.message);
					else message.error(err.name);
				});
		} else {
			patientsModel.update(id, data).then((res: any) => {
				if (res.success) {
					handleClickPatientCard(id)
					message.success(`Pasien ${data.nama} berhasil diupdate`);
					return;
				}

				console.error(res);
				throw {message: "error ketika update ke DB"};
			})
			.catch(err => {
				if (err.message) message.error(err.message);
				else message.error(err.name);
			});
		}

		setIsBiodataFormLoading(false);
		patientsModel.getAll();
	}

	const handleDeletePatient = async (patient: IPatient) => {
		setIsBiodataFormLoading(true);

		patientsModel.remove(patient.id as number).then(res => {
			if (!res || !res.success) {
				console.error(res);
				throw {message: "error ketika update ke DB"};
			}

			//reset biodata form balik ke normal? atau balik ke patient lain
			patientsModel.getAll();
			handleClickAddNewPatient()
			message.success(`Pasien ${patient.nama} berhasil dihapus`);
		})
		.catch(err => {
			if (err.message) message.error(err.message);
			else message.error(err.name);
		})
		.finally(() => setIsBiodataFormLoading(false));
	};

	const handleClickAddNewRecord = () => {
		setSelectedRecord({
			...EMPTY_RECORD,
			patientId: selectedPatient.id ? selectedPatient.id : 0,
		})
		setInputMode("record");
	}

	const handleClickMedRecord = (rowData: IRecord) => {
		setSelectedRecord(rowData);
		setInputMode("record");
	}

	const handleSubmitRecord = async (data: IRecord) => {
		if (data.patientId === 0 || data.patientId === undefined) {
			console.error("patient id is 0")
			return;
		}

		const id = data.id;

		setIsBiodataFormLoading(true);
		if (id === 0 || id === undefined) {
			await recordsModel.create(data);
		} else {
			await recordsModel.update(id as number, data);
		}

		setIsBiodataFormLoading(false);
		handleClickPatientCard(selectedPatient.id as number);
		setInputMode("patient");
	}

	const handleCloseRecord = () => {
		setInputMode("patient");
	}

	const handleCheckNoPasienUnique = (val: string) : boolean => {
		for (const p of patientsModel.patients) {
			if (p.noPasien.toLowerCase() === val.toLowerCase()) return false;
		}

		return true;
	}

	return {
		inputMode,
		filteredPatients,
		selectedRecord,
		selectedPatient,
		isBiodataFormLoading,
		handleSearchPatient,
		handleDeletePatient,
		handleClickAddNewPatient,
		handleClickPatientCard,
		handleSubmitBiodata,
		handleClickAddNewRecord,
		handleClickMedRecord,
		handleSubmitRecord,
		handleCloseRecord,
		handleCheckNoPasienUnique,
	}
}