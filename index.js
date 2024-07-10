import { CSVJSONConverter } from "./src/CSVConverter.js";

export { CSVJSONConverter };

// import fs from "fs";
// const path = "./color_srgb.csv";

// import { CSVJSONConverter } from "./CSVConverter.js";
// const a = new CSVJSONConverter();
// fs.readFile(path, "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(a.csvFileDataToJson(data));
// });

// a.csvPathToJson(path).then((b) => {
//   console.log(b);
// });

// (async () => {
//   console.log(await a.csvPathToJson(path));
// })();

// // // Function to convert CSV to JSON format
// a.jsonToCSV(
//   [
//     { Name: "White", HEX: "#FFFFFF", RGB: "rgb(100,100,100)" },
//     { Name: "Silver", HEX: "#C0C0C0", RGB: "rgb(75,75,75)" },
//     { Name: "Gray", HEX: "#808080", RGB: "rgb(50,50,50)" },
//     { Name: "Black", HEX: "#000000", RGB: "rgb(0,0,0)" },
//     { Name: "Red", HEX: "#FF0000", RGB: "rgb(100,0,0)" },
//     { Name: "Maroon", HEX: "#800000", RGB: "rgb(50,0,0)" },
//     { Name: "Yellow", HEX: "#FFFF00", RGB: "rgb(100,100,0)" },
//     { Name: "Olive", HEX: "#808000", RGB: "rgb(50,50,0)" },
//     { Name: "Lime", HEX: "#00FF00", RGB: "rgb(0,100,0)" },
//     { Name: "Green", HEX: "#008000", RGB: "rgb(0,50,0)" },
//     { Name: "Aqua", HEX: "#00FFFF", RGB: "rgb(0,100,100)" },
//     { Name: "Teal", HEX: "#008080", RGB: "rgb(0,50,50)" },
//     { Name: "Blue", HEX: "#0000FF", RGB: "rgb(0,0,100)" },
//     { Name: "Navy", HEX: "#000080", RGB: "rgb(0,0,50)" },
//     { Name: "Fuchsia", HEX: "#FF00FF", RGB: "rgb(100,0,100)" },
//     { Name: "Purple", HEX: "#800080", RGB: "rgb(50,0,50)" },
//   ],
//   "output"
// );
