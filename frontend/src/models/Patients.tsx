import { IPatient } from "shared/interfaces";

const API_URL = "/api/patients";
const BASE_URL = "http://localhost:5000";

export const Patients = {
	getAll: () : Promise<IPatient[]> => {
		return fetch(BASE_URL + API_URL).then(res => res.json());
	}
}