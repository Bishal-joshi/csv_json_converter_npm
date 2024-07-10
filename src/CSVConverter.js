import fs from "fs/promises";

export class CSVJSONConverter {
  constructor() {}

  /**
   * This function takes CSV File content and converts it to JSON
   * @param {string} csvFile - The CSV file content as a string
   * @returns {Array<Object>} - The JSON representation of the CSV data
   */
  csvFileDataToJson(csvFile) {
    const lines = csvFile.split("\n");
    const headers = lines[0].split(",").map((header) => header.trim());

    return lines
      .slice(1)
      .map((line) => {
        const data = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
        if (!data) return null; // Skip empty lines
        let obj = {};
        headers.forEach((header, index) => {
          obj[header] = data[index].replace(/(^"|"$)/g, "").trim();
        });
        return obj;
      })
      .filter((obj) => obj); // Filter out any null entries
  }

  /**
   * This function takes the path to a CSV file and converts it to JSON
   * @param {string} path - The full path to the CSV file
   * @returns {Promise<Array<Object>>} - A promise that resolves to the JSON representation of the CSV data
   */
  async csvPathToJson(path) {
    try {
      const data = await fs.readFile(path, "utf8");
      const jsonData = this.csvFileDataToJson(data);
      return jsonData;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   * This function takes a JSON array and converts it to CSV format, then saves it to a file
   * @param {Array<Object>} jsonArray - The JSON data to convert to CSV
   * @param {string} filename - The name of the output CSV file (without extension)
   */
  async jsonToCSV(jsonArray, filename) {
    const headers = Object.keys(jsonArray[0]);
    const csvRows = [headers.join(",")];

    jsonArray.forEach((obj) => {
      const values = headers.map((header) => {
        let value = obj[header];
        if (typeof value === "string" && value.includes(",")) {
          value = `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      });
      csvRows.push(values.join(","));
    });

    const csvString = csvRows.join("\n");
    const outputPath = filename ? `./${filename}.csv` : `./output.csv`;

    try {
      await fs.writeFile(outputPath, csvString, "utf8");
      console.log("CSV file has been created successfully.");
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
