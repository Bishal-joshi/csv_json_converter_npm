# CSVJSONDataType

`CSVJSONDataType` is a simple utility class for managing CSV data with JavaScript. It provides methods to upload CSV files, set headers, add rows, delete rows, convert data back to CSV format, and retrieve rows and headers.

## Installation

```bash
npm i npm_csv_to_json
```

To use `CSVJSONDataType` in your project, first include it in your JavaScript file:

```javascript
import { CSVJSONDataType } from "npm_csv_to_json";
```

## Usage

### Initializing and Uploading a CSV File

You can initialize a CSVJSONDataType instance and upload a CSV file as follows:

```javascript
const a = new CSVJSONDataType();
await a.uploadCSV("./output.csv");
console.log(a.head, a.row);
```

### Setting Headers and Adding Rows

You can also initialize CSVJSONDataType with an existing header, replace the current header, and add rows:

```javascript
const a = new CSVJSONDataType(["Apple"]);
a.setHead(["apple", "ball", "cat"]);
a.addRow({ apple: 1, ball: 2 })
  .addRow({ apple: 5, Ball: 6 })
  .addRow({ cat: 10, ball: 12 });
```

### Deleting a Row

You can delete a row by specifying its index:

```javascript
a.deleteRow(0);
```

### Converting Data to CSV

To convert the current data back to CSV format:

```javascript
a.convertToCSV();
```

### Retrieving Rows and Headers

You can retrieve all rows and headers as follows:

```javascript
console.log(a.getRows());
console.log(a.getHead());
```

Example

Here is a full example demonstrating all the features:

```javascript
import { CSVJSONDataType } from "npm_csv_to_json";

// Initialize with a header
const a = new CSVJSONDataType();

// Set a new header
a.setHead(["apple", "ball", "cat"]);

// Add rows
a.addRow({ apple: 1, ball: 2 })
  .addRow({ apple: 5, Ball: 6 })
  .addRow({ cat: 10, ball: 12 });

// Delete the first row
a.deleteRow(0);

// Convert to CSV
a.convertToCSV();

// Retrieve rows and headers
console.log(a.getRows()); // Output the rows
console.log(a.getHead()); // Output the headers
```

License

This project is licensed under the MIT License. See the LICENSE file for details.

css

Feel free to adjust the paths and additional details according to your specific proj
