import { Component } from '@angular/core';
import { ConversionService } from '../services/conversion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  standalone:true,
 imports:[FormsModule]
})
export class ConverterComponent {

  inputText = '';
  statusMessage = '';

   
  constructor(private converter: ConversionService) {}

  convertJson() {
    window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'convert_json_excel',
    tool: 'json to excel',
    action: 'convert'
  });
    const success = this.converter.jsonToExcel(this.inputText, 'json_output');
    this.statusMessage = success ? 'JSON converted successfully!' : 'Invalid JSON format.';
  }

  convertXml() {
    window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'convert_xml_excel',
    tool: 'xml to excel',
    action: 'convert'
  });
    const success = this.converter.xmlToExcel(this.inputText, 'xml_output');
    this.statusMessage = success ? 'XML converted successfully!' : 'Invalid XML format.';
  }
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}
