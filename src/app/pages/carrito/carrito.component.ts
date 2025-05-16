import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CarritoService, Producto } from '../../shared/services/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, OnDestroy {
  carrito: Producto[] = [];
  total = 0;
  sub?: Subscription;

  constructor(private carritoSrv: CarritoService) {}

  ngOnInit(): void {
    this.sub = this.carritoSrv.carrito$.subscribe(c => {
      this.carrito = c;
      this.total = this.carritoSrv.total; // ❗ CORREGIDO: sin paréntesis
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  quitar(index: number): void {
    this.carritoSrv.remove(index);
  }

  comprar(): void {
    alert('✅ Compra realizada');
    this.carritoSrv.clear();
  }
}
