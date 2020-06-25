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
      'Test Recipe',
      'This is the description',
      'https://i.pinimg.com/originals/79/2c/8c/792c8c2f72c6fb8f542a0829d3ff6466.png'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is the description 2',
      'https://i.pinimg.com/originals/79/2c/8c/792c8c2f72c6fb8f542a0829d3ff6466.png'
    ),
    new Recipe(
      'Test Recipe 3',
      'This is the description 3',
      'https://i.pinimg.com/originals/79/2c/8c/792c8c2f72c6fb8f542a0829d3ff6466.png'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
