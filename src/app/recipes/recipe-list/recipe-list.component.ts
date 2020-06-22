import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is the description',
      'https://i.pinimg.com/originals/79/2c/8c/792c8c2f72c6fb8f542a0829d3ff6466.png'
    ),
    new Recipe(
      'Test Recipe',
      'This is the description',
      'https://i.pinimg.com/originals/79/2c/8c/792c8c2f72c6fb8f542a0829d3ff6466.png'
    ),
    new Recipe(
      'Test Recipe',
      'This is the description',
      'https://i.pinimg.com/originals/79/2c/8c/792c8c2f72c6fb8f542a0829d3ff6466.png'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
