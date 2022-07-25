import {Component, OnInit} from '@angular/core';
import {Category} from 'src/app/model/Category';
import {DataHandlerService} from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  //Метод автоматически вызывается после инициализации компонента
  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
    console.log(this.categories);
  }

  showTasksByCategory(category: Category) {
    this.dataHandler.getTasksByCategory(category);
  }
}
