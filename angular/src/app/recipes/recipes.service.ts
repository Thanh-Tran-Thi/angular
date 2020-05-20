import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Recipe A', 'Recipe A', 
        'https://www.justataste.com/wp-content/uploads/2018/01/easy-beef-and-broccoli-recipe.jpg', 
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Recipe B', 'Recipe B', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg', 
        [ 
            new Ingredient('Buns', 2),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Recipe c', 'Recipe C', 
        'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg', 
        [
            new Ingredient('Vegetables', 5),
            new Ingredient('French Fries', 10)
        ])
    ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}