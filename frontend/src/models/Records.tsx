import { IRecord } from "shared/interfaces";

const API_URL = "/api/records";
const BASE_URL = "";

export const Records = {
	create: (data: IRecord) : Promise<IRecord> => {
		const payload : RequestInit = {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};

		return fetch(`${BASE_URL}${API_URL}`, payload).then(res => res.json());
	},
	update: (id: number, data: IRecord) : Promise<IRecord> => {
		const payload : RequestInit = {
			method: "PUT",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};

		return fetch(`${BASE_URL}${API_URL}/${id}`, payload).then(res => res.json());
	},
}