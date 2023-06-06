import { Component } from '@angular/core';

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayInventoryComponent {
  products: Product[] = [];

  constructor() {
    // Retrieve products from local storage
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');

    // Assign retrieved products to the component's property
    this.products = storedProducts;
  }

  deleteProduct(product: Product) {
    // Find the index of the product in the array
    const index = this.products.indexOf(product);

    if (index !== -1) {
      // Remove the product from the array
      this.products.splice(index, 1);

      // Update the local storage with the updated products array
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }
  editProduct(product: Product) {
    // Find the index of the product in the array
    const index = this.products.indexOf(product);
  
    if (index !== -1) {
      // Create a form element dynamically
      const form = document.createElement('form');
  
      // Create input elements for name and price
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.value = product.name;
  
      const priceInput = document.createElement('input');
      priceInput.type = 'number';
      priceInput.value = product.price.toString();

      
      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.value = product.quantity.toString();
  
      // Create a submit button
      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.textContent = 'Update';
  
      // Add input elements and submit button to the form
      form.appendChild(nameInput);
      form.appendChild(quantityInput);
      form.appendChild(priceInput);
      form.appendChild(submitButton);
  
      // Add a submit event listener to the form
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
  
        // Get the updated values from the input elements
        const updatedName = nameInput.value;
        const updatedQuantity = parseFloat(quantityInput.value);
        const updatedPrice = parseFloat(priceInput.value);
       
  
        if (updatedName && !isNaN(updatedPrice)) {
          this.products[index].name = updatedName;
          this.products[index].quantity = updatedQuantity;
          this.products[index].price = updatedPrice;
        
  
          // Update the local storage with the updated products array
          localStorage.setItem('products', JSON.stringify(this.products));
        } else {
          console.error('Invalid inputs provided for updating the product.');
        }
  
        // Remove the form from the DOM
        form.remove();
      });
  
      // Append the form to the document body
      document.body.appendChild(form);
    }
  }
}  