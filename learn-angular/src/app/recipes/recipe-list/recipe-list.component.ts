import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple Description',
      'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg'
      ),
      new Recipe(
        'A Test Recipe',
        'This is a simple Description',
        'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'
        )
  ];
  constructor() { }

  ngOnInit() {
  }

}
