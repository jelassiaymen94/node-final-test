const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/:fileName", (req, res) => {
	// Get the file name from the request parameters
	const fileName = req.params.fileName;
	console.log(fileName);
	// Read the file
	const filePath = path.join(__dirname, `${fileName}.txt`);
	try {
		const fileContent = fs.readFileSync(filePath, "utf8");
		// Send the file content as a JSON object with a "result" field
		res.status(200).send({ result: fileContent });
	} catch (error) {
		// Return an error if the file does not exist or cannot be read
		res.status(500).send({ error: "VALIDATION_ERROR" });
	}
});

app.listen(3000, () => {
	console.log("API listening on port 3000");
});
