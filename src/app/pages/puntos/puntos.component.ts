import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-puntos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.scss']
})
export class PuntosComponent {
  puntos = 120;
  objetivo = 200;

  get progreso(): number {
    return Math.min((this.puntos / this.objetivo) * 100, 100);
  }

  get faltan(): number {
    return Math.max(this.objetivo - this.puntos, 0);
  }
}
