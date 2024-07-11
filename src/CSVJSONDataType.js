import { convertObjectKeysToLowerCase } from "./utils/objectModifier.js";
import { CSVJSONConverter } from "./CSVConverter.js";

/**
 * You can think this datatype as a table which has headers (head) and rows
 */
export class CSVJSONDataType extends CSVJSONConverter {
  constructor(head) {
    super();
    this.head = head ? head.map((d) => d.toLowerCase()) : [];
    this.row = [];
  }

  /**
   * This function sets the head for the table/CSVJSONDatatype
   * @param {Array[string]} head
   * @returns object
   */
  setHead(head) {
    this.head = head.map((d) => d.toLowerCase());
    return this;
  }

  /**
   *
   * @returns head
   */
  getHead() {
    return this.head;
  }

  /**
   * add row to the table/CSVJSONDatatype
   * @param {Array[Object]} row
   * @returns the this object
   */
  addRow(row) {
    const rowInLowerCase = convertObjectKeysToLowerCase(row);
    //check if all keys are present in head?
    if (Object.keys(rowInLowerCase).every((d) => this.head.includes(d))) {
      this.row.push(rowInLowerCase);
    }
    return this;
  }

  /***
   * Return all the rows
   */
  getRows() {
    return this.row;
  }

  /**
   * This function delete the row of that index
   * @param {Number} index
   */
  deleteRow(index) {
    this.row.splice(index, 1);
  }

  /**
   * this function converts your table to csv
   */
  convertToCSV() {
    super.jsonToCSV(this.head, this.row);
  }

  /**
   *  Give the path of the file, and it converts csv to JSON and sets the header and rows
   * @param {String} filePath
   *
   */
  async uploadCSV(filePath) {
    //clear old head and rows
    this.row = [];
    this.head = [];
    //set new csv as json
    const { head, row } = await super.csvPathToJson(filePath);
    this.row = row;
    this.head = head;
  }
}
