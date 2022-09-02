import {Component, OnInit} from '@angular/core';
import { DataHandlerService } from './service/data-handler.service';
import {Task} from './model/Task';
import { Category } from './model/Category';
import {CategoriesComponent} from './views/categories/categories.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Todoo';
  tasks: Task[] | any;
  categories: Category[] | any;
  selectedCategory: Category[] | any;

  constructor(private dataHandler: DataHandlerService,
               ) {
  }

  ngOnInit() {
    //this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);


    this.onSelectCategory(null!);
  }

  //изменение категории
  onSelectCategory(category: Category){

    this.selectedCategory = category;

    this.dataHandler.searchTasks(
      this.selectedCategory,
      null!,
      null!,
      null!
    ).subscribe(tasks => {
      this.tasks=tasks;
    });

  }
}
