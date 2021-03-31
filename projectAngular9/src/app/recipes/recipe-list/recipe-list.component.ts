import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipieWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A simple recipe', 'Do this in only 15 min', 'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg'),
    new Recipe('A green recipe', 'You wanna a green salat?!', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200,879&ssl=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
  onRecipeSelected(recipeElement: Recipe){
    this.recipieWasSelected.emit(recipeElement)
  }
}
