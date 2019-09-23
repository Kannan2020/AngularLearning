import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service';
@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) { }
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple Description',
      'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg',
      [
        new Ingredient('Test Recipe - 1', 10),
        new Ingredient('Test Recipe - 2', 30),
        new Ingredient('Test Recipe - 3', 210)
      ]
    ),
    new Recipe(
      'A Test Recipe',
      'This is a simple Description',
      'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
      [
        new Ingredient('Recipe - 1', 10),
        new Ingredient('Recipe - 2', 20),
        new Ingredient('Recipe - 3', 30)
      ]
    )
  ];
  getRecipe() {
    // slice is using to send a copy of array, any changes is happend in out side it will not modify any data in base
    return this.recipes.slice();
  }
  addIngredientTOShopinglist(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
