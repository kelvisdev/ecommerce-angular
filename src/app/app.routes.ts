import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@ecommerce-angular/home').then((m) => m.homeRoutes),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('@ecommerce-angular/product-detail').then(
        (m) => m.productDetailRoutes
      ),
  },
];
