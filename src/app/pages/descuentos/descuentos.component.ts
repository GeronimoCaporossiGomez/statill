import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';

interface ProductoDescuento {
  id: number;
  nombre: string;
  precioOriginal: number;
  descuento: number;
}

@Component({
  selector: 'app-descuentos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.scss']
})
export class DescuentosComponent {
  productos: ProductoDescuento[] = [
    { id: 1, nombre: 'Yerba Mate', precioOriginal: 5000, descuento: 20 },
    { id: 2, nombre: 'Fideos', precioOriginal: 1200, descuento: 15 }
  ];

  precioFinal(p: ProductoDescuento): number {
    return p.precioOriginal * (1 - p.descuento / 100);
  }
}
