import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products/products.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.page.html',
    styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
    productsService: ProductsService;
    productData: any;

    constructor() {

    }

    ngOnInit() {


    }
}
