import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Barbaque Chicken Wings', 
      'Do this in only 15 min', 
      'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg',
      [
          new Ingredient('Meat', 1),
          new Ingredient('Souce', 1)
      ]),
    new Recipe(
      'Pumpkin Pad Thai', 
      'You wanna a green salat?!', 
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200,879&ssl=1',
      [
          new Ingredient('Pasta', 1),
          new Ingredient('blueberries', 20),
          new Ingredient('beans', 10),
          new Ingredient('lemon', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
