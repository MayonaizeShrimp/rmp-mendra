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
		return Patients.create(data)
			.then(res => {
				console.log(res);
				message.success(`Pasien ${data.nama} berhasil ditambahkan`)
			})
			.catch(err => {
				if (err.message) {
					console.error(err.message)
					message.error(err.message);
					return;
				}

				console.error(err);
			});
	}

	const update = async (id: number, data: IPatient) => {
		return Patients.update(id, data)
			.then(res => {
				console.log(res);
				message.success(`Pasien ${data.nama} berhasil diupdate`)
			})
			.catch(err => {
				if (err.message) {
					console.error(err.message)
					message.error(err.message);
					return;
				}

				console.error(err);
			});
	}

	return {
		patients,
		getAll,
		getById,
		create,
		update,
	}
}