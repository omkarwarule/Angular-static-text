import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OmkarComponent } from './omkar/omkar.component';

@Component({//meta data
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,OmkarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'Omkar';
}
