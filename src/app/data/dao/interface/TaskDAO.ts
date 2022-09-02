import {CommonDAO} from "./CommonDAO"
import {Category} from "../../../model/Category"
import {Priority} from "../../../model/Priority"
import {Task} from "../../../model/Task"
import {Observable} from "rxjs";

//специфичные методы для работы с задачами
export interface TaskDAO extends CommonDAO<Task> {

  //Поиск задач по всем параметрам
  //если какой либо параметр равен null - он не будет учитываться при поиске
  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>;

  //количество завершенных задач в заданной категории
  getCompletedCountInCategory(category: Category): Observable<number>;

  //количество не завершенных задач в заданной категории
  getUpCompletedCountInCategory(category: Category): Observable<number>;

  //количество всех задач в заданной категории
  getTotalCount(): Observable<number>;
}
