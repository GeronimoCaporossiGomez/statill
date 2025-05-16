import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements AfterViewInit {
  private map?: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('mapa').setView([-34.6037, -58.3816], 13); // Buenos Aires

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const locales = [
      { nombre: 'Supermercado Norte', lat: -34.6037, lng: -58.3816 },
      { nombre: 'Despensa Sur', lat: -34.608, lng: -58.377 }
    ];

    locales.forEach(local => {
      L.marker([local.lat, local.lng])
        .addTo(this.map!)
        .bindPopup(local.nombre);
    });
  }
}
