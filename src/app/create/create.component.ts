import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    id: '', // Leave the ID empty initially
    name: '',
    quantity: 0,
    price: 0
  };
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

  }
  submitForm() {
    // Generate a unique ID for the product
    const uniqueId = this.generateUniqueId();

    // Set the generated ID for the product
    this.product.id = uniqueId;

    // Get existing products from local storage
    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');

    // Add new product to the array
    existingProducts.push(this.product);

    // Save updated products array to local storage
    localStorage.setItem('products', JSON.stringify(existingProducts));

    console.log('Product data saved successfully!');
    alert("Item added successfully");

    // Reset the form
    this.product = {
      id: '', // Reset the ID to empty
      name: '',
      quantity: 0,
      price: 0
    };

    
  }
 

  generateUniqueId(): string {
    // Generate a unique ID using a combination of current timestamp and a random number
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 1000).toString();
    return timestamp + randomNum;
  }
  // isFieldInvalid(fieldName: string) {
  //   const field = this.myForm.get(fieldName);
  //   return field.invalid && (field.touched || field.dirty);
  // }

  // isFieldTouched(fieldName: string) {
  //   const field = this.myForm.get(fieldName);
  //   return field.touched;
  // }
}
