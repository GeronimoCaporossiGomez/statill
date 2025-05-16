import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./pages/productos/productos.component').then(m => m.ProductosComponent),
  },
  {
    path: 'carrito',
    loadComponent: () =>
      import('./pages/carrito/carrito.component').then(m => m.CarritoComponent),
  },
  {
    path: 'estadisticas',
    loadComponent: () =>
      import('./pages/estadisticas/estadisticas.component').then(m => m.EstadisticasComponent),
  },
  {
    path: 'mapa',
    loadComponent: () =>
      import('./pages/mapa/mapa.component').then(m => m.MapaComponent),
  },
  {
    path: 'descuentos',
    loadComponent: () =>
      import('./pages/descuentos/descuentos.component').then(m => m.DescuentosComponent),
  },
  {
    path: 'puntos',
    loadComponent: () =>
      import('./pages/puntos/puntos.component').then(m => m.PuntosComponent),
  },
  {
    path: 'resenas',
    loadComponent: () =>
      import('./pages/resenas/resenas.component').then(m => m.ResenasComponent),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./pages/perfil/perfil.component').then(m => m.PerfilComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(m => m.LoginComponent),
  },
];
