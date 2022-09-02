import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { CategoryDAOArray } from '../data/dao/Impl/CategoryDAOArray';
import {TaskDAOArray} from '../data/dao/Impl/TaskDAOArray';
import {TestData} from '../data/TestData';
import {Category} from '../model/Category';
import { Priority } from '../model/Priority';
import {Task} from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
//реализация работы с данными с помощью массива
//(можно подставить любые реализации включая работу с бд. Главное соблюдать интерфейс)

  private taskDaoArray = new TaskDAOArray();
  private categoryDaoArray = new CategoryDAOArray();

  constructor() {

  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDaoArray.getAll();
  }

  //поиск задач по параметрам
  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>{
    return this.taskDaoArray.search(category,searchText,status,priority);
  }
}
