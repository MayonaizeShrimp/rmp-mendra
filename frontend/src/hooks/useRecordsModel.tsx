import { message } from "antd";
import { IRecord } from "shared/interfaces";
import { Records } from "src/models/Records";

export const useRecordsModel = () => {
	const create = async (data: IRecord) => {
		
		return Records.create(data)
			.then(res => {
				message.success(`Kunjungan berhasil ditambahkan`);
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

	const update = async (id: number, data: IRecord) => {
		return Records.update(id, data)
			.then(res => {
				message.success(`Kunjungan berhasil diupdate`);
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
		create,
		update,
	}
}