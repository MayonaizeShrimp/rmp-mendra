import { TestData } from "shared/interfaces";

const BASE_URL = "/api/testdata"

export const TestDataModel = {
	get: () : Promise<TestData[]> => {
		return fetch(BASE_URL).then(res => res.json());
	}
}