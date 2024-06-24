import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import {
  CartService,
  Product,
  ProductSearchService,
} from '@ecommerce-angular/product-data-access';
import { ProductCardComponent } from '@ecommerce-angular/product-ui';
import { Observable, switchMap } from 'rxjs';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';
import { getParams } from './get-params';

@Component({
  selector: 'ecommerce-angular-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    QuantityDescriptionPipe,
    MatButtonModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productSearchService = inject(ProductSearchService);
  carService = inject(CartService);

  product$: Observable<Product> = getParams().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );

  productSignal = toSignal(this.product$);

  cart = signal<Product[]>([]);
  quantity = computed(() => this.cart().length);
  quantityObservable$ = toObservable(this.quantity);

  addToCart(product: Product) {
    this.cart.update((value) => [...value, product]);
  }
}
