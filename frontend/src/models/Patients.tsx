import { IPatient } from "shared/interfaces";

const API_URL = "/api/patients";
const BASE_URL = "http://localhost:5000";

export const Patients = {
	getAll: () : Promise<IPatient[]> => {
		return fetch(`${BASE_URL}${API_URL}`).then(res => res.json());
	},
	getById: (id: number) : Promise<IPatient> => {
		return fetch(`${BASE_URL}${API_URL}/${id}`).then(res => res.json());
	},
	create: (data: IPatient) : Promise<IPatient> => {
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
	update: (id: number, data: IPatient) : Promise<IPatient> => {
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