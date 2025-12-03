import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  ngOnInit(): void {
    const dados = [
      { categorias: 'Eletrônicos', valor: 10 },
      { categorias: 'Roupas', valor: 15 },
      { categorias: 'Decoracao', valor: 5 },
      { categorias: 'Ferramentas', valor: 20 },
      { categorias: 'Acessorios', valor: 8 }, 
    ];

    const labels = dados.map(v => v.categorias);
    const valores = dados.map(v => v.valor);

    new Chart("barChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Categorias Mais Vendidas',
            data: valores,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          }
        ]
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
