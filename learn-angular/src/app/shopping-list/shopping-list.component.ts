import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
      new Ingredient('Mango', 10),
      new Ingredient('Jackfruit', 5),
      new Ingredient('Banana', 20),

  ];
  constructor() { }

  ngOnInit() {
  }

}
