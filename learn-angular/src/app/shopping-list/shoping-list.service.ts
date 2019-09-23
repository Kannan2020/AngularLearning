import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Mango', 10),
        new Ingredient('Jackfruit', 5),
        new Ingredient('Banana', 20),

    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addIngredients(ingredient: Ingredient[]) {
        this.ingredients.push(...this.ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
