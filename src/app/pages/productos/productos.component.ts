import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CarritoService } from '../../shared/services/carrito.service';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Yerba Mate', precio: 5000 },
    { id: 2, nombre: 'Galletitas', precio: 1200 },
    { id: 3, nombre: 'Salsa de Tomate', precio: 950 }
  ];

  constructor(private carrito: CarritoService) {}

  agregar(producto: Producto): void {
    this.carrito.add(producto);
  }
}
