import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { xml2js } from 'xml-js';
import * as convert from 'xml-js';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

  jsonToExcel(jsonText: string, fileName: string) {
    try {
      const json = JSON.parse(jsonText);
      const worksheet = XLSX.utils.json_to_sheet(json);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveExcel(excelBuffer, fileName);
      return true;
    } catch (err) {
      return false;
    }
  }

  xmlToExcel(xmlText: string, fileName: string) {
    try {
      //const json = JSON.parse(xml2js(xmlText, { compact: true, spaces: 2 }));
     // const json = JSON.parse(xml2js(xmlText, { compact: true }));
     debugger;
     const json = convert.xml2js(xmlText, { compact: true });
      const array = [json]; 
      const worksheet = XLSX.utils.json_to_sheet(array);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveExcel(excelBuffer, fileName);
      return true;
    } catch (err) {
      return false;
    }
  }

  private saveExcel(buffer: any, fileName: string) {
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(blob, `${fileName}.xlsx`);
  }
}
