import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input() ingredient_list;

  constructor() { }

  ngOnInit() {
    
  }

}
