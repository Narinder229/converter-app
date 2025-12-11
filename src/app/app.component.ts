import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    currentYear = new Date().getFullYear(); // ✅ define it here
  title = 'converter-app';
}
