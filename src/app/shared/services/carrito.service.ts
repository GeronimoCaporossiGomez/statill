import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private _carrito: Producto[] = [];
  private _carritoSubject = new BehaviorSubject<Producto[]>([]);
  carrito$ = this._carritoSubject.asObservable();

  get total(): number {
    return this._carrito.reduce((acc, item) => acc + item.precio, 0);
  }

  add(producto: Producto): void {
    this._carrito.push(producto);
    this._carritoSubject.next(this._carrito);
  }

  remove(index: number): void {
    this._carrito.splice(index, 1);
    this._carritoSubject.next(this._carrito);
  }

  clear(): void {
    this._carrito = [];
    this._carritoSubject.next(this._carrito);
  }
}
