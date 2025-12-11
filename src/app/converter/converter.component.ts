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
    const success = this.converter.jsonToExcel(this.inputText, 'json_output');
    this.statusMessage = success ? 'JSON converted successfully!' : 'Invalid JSON format.';
  }

  convertXml() {
    const success = this.converter.xmlToExcel(this.inputText, 'xml_output');
    this.statusMessage = success ? 'XML converted successfully!' : 'Invalid XML format.';
  }
}
