import { Component } from '@angular/core';

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateInventoryComponent {
  
  product: Product = {
    id: '',
    name: '',
    quantity: 0,
    price: 0
  };

  constructor() { }

  submitForm() {
    // Get existing products from local storage
    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');

    // Add new product to the array
    existingProducts.push(this.product);

    // Save updated products array to local storage
    localStorage.setItem('products', JSON.stringify(existingProducts));

    console.log('Product data saved successfully!');
    alert("Button Clicked");

    // Reset the form
    this.product = {
      id: '',
      name: '',
      quantity: 0,
      price: 0
    };
  }
}