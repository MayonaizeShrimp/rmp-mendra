import express from "express";
import path from "path";
import testDataRouter from "./controllers/TestData";
import cors from 'cors';

const app = express();
const port = 5000;

//cors

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options))

//use test router
app.use('/api/TestData', testDataRouter);

//serve built frontend result from `npm run build:frontend`
app.use(express.static(path.join(__dirname, '../../frontend/build')))

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
})