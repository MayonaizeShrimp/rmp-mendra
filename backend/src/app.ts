import express from "express";
import path from "path";

const app = express();
const port = 5000;

app.get('/api/test', (req, res) => {
	res.json("hello world");
});

app.use(express.static(path.join(__dirname, '../../frontend/build')))

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
})