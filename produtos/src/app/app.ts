import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Produto{
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  produtos: Produto[] = [
    {
      nome: 'Produto 1',
      valor: 100,
      imagem: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Produto 2',
      valor: 200,
      imagem: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Produto 3',
      valor: 300,
      imagem: 'https://via.placeholder.com/150'
    }
  ];
}
