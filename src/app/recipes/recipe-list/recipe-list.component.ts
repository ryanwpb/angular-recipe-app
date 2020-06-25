import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipies: Recipe[] = [
    new Recipe(
      'Bulgogi Beef Tacos',
      'This is the description',
      'https://i.pinimg.com/originals/79/2c/8c/792c8c2f72c6fb8f542a0829d3ff6466.png'
    ),
    new Recipe(
      'Beef Bolognese',
      'This is the description 2',
      'https://data.thefeedfeed.com/static/2019/02/25/15511122255c741821d4b2f.jpg'
    ),
    new Recipe(
      'Cheese Pizza',
      'This is the description 3',
      'https://d3tv8y14ogpztx.cloudfront.net/pulses/images/000/025/005/show_box/rubirosa.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
