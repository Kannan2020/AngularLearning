import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [LoggingService]
})
export class RecipesComponent implements OnInit {
selectedRecipe: Recipe;
  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.loggingService.logInformation('RecipesComponent InIt');
  }

}
