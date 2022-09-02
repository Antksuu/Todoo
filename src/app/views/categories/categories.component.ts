import {Component, Input, OnInit} from '@angular/core';
import {Category} from 'src/app/model/Category';
import {DataHandlerService} from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input()
  categories!: Category[];

  selectedCategory: Category | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  //Метод автоматически вызывается после инициализации компонента
  ngOnInit() {
    // this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }

   showTasksByCategory(category: Category) {
    //this.selectedCategory = category;
     //this.dataHandler.fillTasksByCategory(category);
   }
}
