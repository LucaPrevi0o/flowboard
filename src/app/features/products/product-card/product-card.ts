import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../../core/models/product'; // Assicurati di avere il percorso corretto

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    MatCardModule,
    MatButtonModule
  ],
  standalone: true,
  template: `
    <mat-card class="example-card" appearance="outlined">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{ product.title }}</mat-card-title>
        <mat-card-subtitle>{{ product.price | currency }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="product.thumbnail" [alt]="product.title">
      <mat-card-content>
        <p>{{ product.description }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="addToCart(product)">AGGIUNGI AL CARRELLO</button>
        <button mat-button>DETTAGLI</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: `
    .example-card {
      max-width: 400px;
    }
    .example-header-image {
      background-image: url('https://material.angular.dev/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `,
})

export class ProductCard {
  @Input({ required: true }) product!: Product;
  @Output() add = new EventEmitter<Product>();
  
  addToCart(p: Product) {
    this.add.emit(p);
  }
}
