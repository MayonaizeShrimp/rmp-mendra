import express from "express";
import path from "path";
import testDataRouter from "./controllers/TestData";

const app = express();
const port = 5000;

//use test router
app.use('/api/TestData', testDataRouter)

//serve built frontend result from `npm run build:frontend`
app.use(express.static(path.join(__dirname, '../../frontend/build')))

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
})