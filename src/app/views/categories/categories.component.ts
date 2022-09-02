import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  //Выбор категории
  @Output()
  selectCategory = new EventEmitter<Category>();

  selectedCategory: Category | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  //Метод автоматически вызывается после инициализации компонента
  ngOnInit() {
    // this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {

    //если не изменилось значение, то ничего не делать(что бы лишний раз не делать запрос)
    if (this.selectedCategory == category) {
      return;
    }

    this.selectedCategory = category;

    //Вызываем внешний обработчик и передаем туда выбранную категорию
    this.selectCategory.emit(this.selectedCategory);
  }
}
