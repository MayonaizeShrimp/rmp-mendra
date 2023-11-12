import dayjs from "dayjs";
import express from "express";
import { TestData } from "shared/interfaces";

const testDataRouter = express.Router();
const createDummyData = () : TestData[] => {
	const result : TestData[] = [];

	for (let i=0; i<20; i++){
		result.push({
			id: i,
			name: `test Data name ${i}`,
			manufacturer: `test manUfacturer ${i}`,
			expiry_date: dayjs().add(i, "day").format("DD MM YYYY")
		});
	}

	return result;
}

testDataRouter.get('/', (req, res) => {
	res.status(200).json(createDummyData());
})

export default testDataRouter;