const fs = require("fs");
const path = require("path");

// Read the CSV file
const filePath = path.join(__dirname, "emails.csv");
const fileContent = fs.readFileSync(filePath, "utf8");

// log the second column of each row, skipping the first row
const rows = fileContent.split(`\n`);
rows.forEach((row, index) => {
	if (index === 0) return;
	const columns = row.split(",");
	// check if the second column is a valid email
	if (columns[1].includes("@") && columns[1].includes(".")) {
		console.log(columns[1]);
		// write columns[1] to a new file called test[index + 1].txt
		const newFilePath = path.join(__dirname, `test${index + 1}.txt`);
		fs.writeFileSync(newFilePath, columns[1]);
	} else {
		console.log(`Le mail n’est pas valide : ${columns[1]}`);
	}
});
