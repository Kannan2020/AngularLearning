import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { LoggingService } from '../services/logging.service';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [LoggingService, RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private loggingService: LoggingService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.loggingService.logInformation('RecipesComponent InIt');
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.selectedRecipe = recipe);
  }

}
