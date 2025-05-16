import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 importante
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent], // 👈 incluir FormsModule
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.scss']
})
export class ResenasComponent {
  nombre = '';
  estrellas = 5;
  comentario = '';
  resenas: { nombre: string; estrellas: number; comentario: string }[] = [];

  enviar() {
    this.resenas.push({
      nombre: this.nombre,
      estrellas: this.estrellas,
      comentario: this.comentario
    });

    this.nombre = '';
    this.estrellas = 5;
    this.comentario = '';
  }
}
