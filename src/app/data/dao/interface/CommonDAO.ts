import { Observable } from "rxjs";

//Стандартные методы CRUD
export interface CommonDAO <T>{

  //Получитьо все значения
  getAll(): Observable<T[]>;

  //Получить одно значение по id
  get(id: number): Observable<T>;

//Обновить значение
  update(arg0: T): Observable<T>;

  //Удалить значение
  delete(id:number): Observable<T>;

  //Добавить значение
  add(arg0: T): Observable<T>;
}
