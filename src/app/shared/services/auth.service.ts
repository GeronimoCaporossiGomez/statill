import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private autenticado$ = new BehaviorSubject<boolean>(false);
  private nombreUsuario$ = new BehaviorSubject<string | null>(null);

  constructor(private router: Router) {}

  login(usuario: string, password: string): boolean {
    // Simulación de login correcto (reemplazar con integración real si hace falta)
    if (usuario === 'admin' && password === 'admin') {
      this.autenticado$.next(true);
      this.nombreUsuario$.next(usuario);
      return true;
    }
    return false;
  }

  logout(): void {
    this.autenticado$.next(false);
    this.nombreUsuario$.next(null);
    this.router.navigate(['/login']);
  }

  estaAutenticado(): Observable<boolean> {
    return this.autenticado$.asObservable();
  }

  obtenerUsuario(): Observable<string | null> {
    return this.nombreUsuario$.asObservable();
  }
}
