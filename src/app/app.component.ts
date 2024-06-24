import { Component, inject } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce-angular/layout';
import { CartService } from '@ecommerce-angular/product-data-access';
import { ProductSearchComponent } from '@ecommerce-angular/product-search';
import { CartComponent } from '@ecommerce-angular/product-ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
    CartComponent,
  ],
  selector: 'ecommerce-angular-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  quantity = inject(CartService).quantity;
}
