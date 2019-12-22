import { Component, OnInit } from '@angular/core';
import {RecipeModule} from '../recipe/Recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModule[] = [
    new RecipeModule('A Test Recip',
      'This is the test Recipe discription',
      'https://image.shutterstock.com/image-photo/asian-short-ribs-cauliflower-rice-600w-1444704785.jpg'),
    new RecipeModule('A Test Recip',
      'This is the test Recipe discription',
      'https://image.shutterstock.com/image-photo/asian-short-ribs-cauliflower-rice-600w-1444704785.jpg'),
    new RecipeModule('A Test Recip',
      'This is the test Recipe discription',
      'https://image.shutterstock.com/image-photo/asian-short-ribs-cauliflower-rice-600w-1444704785.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
