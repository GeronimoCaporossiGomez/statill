import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const datos = [
      { nombre: 'Yerba Mate', cantidad: 20 },
      { nombre: 'Fideos', cantidad: 15 },
      { nombre: 'Salsa', cantidad: 10 }
    ];

    new Chart('graficoVentas', {
      type: 'bar',
      data: {
        labels: datos.map(d => d.nombre),
        datasets: [{
          label: 'Unidades vendidas',
          data: datos.map(d => d.cantidad),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
