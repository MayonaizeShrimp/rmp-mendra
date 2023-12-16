import express from "express";
import path from "path";
import cors from 'cors';
import patientsRouter from "./controllers/patients";
import { connectToDB } from "./models";

const app = express();
const port = 5000;

//cors
const options: cors.CorsOptions = {
  origin: ['http://localhost:3000'],
};
app.use(cors(options));

//use implement routers
app.use('/api/patients', patientsRouter);

//serve built frontend result from `npm run build:frontend`
app.use(express.static(path.join(__dirname, '../../frontend/build')));

connectToDB().then(() => {
	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	})
});