Пиццерия 
=
Это мой учебный проект, сделанный на [React](https://github.com/facebook/react).

В качестве менеджера данных используем [Redux](https://github.com/reduxjs/redux).

### Полный стек

- [React](https://ru.reactjs.org/)
- [SCSS](https://sass-scss.ru/)
- [Redux](https://redux.js.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [react-redux](https://react-redux.js.org/)
- [Redux-thunk](https://github.com/reduxjs/redux-thunk)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [react-router-dom](https://reactrouter.com/)
- [ClassNames](https://www.npmjs.com/package/classnames)

Что уже работает?
-

- Система приема списка пицц из сервера и последующий рендер этого списка.
- Роутинг
    - Домашняя страница
    - Корзина
- Визуально работающее окно PopUp
    - Закрытие окна при клике вне окна.
    - Нажатие кнопок.
    - Движение стрелки списка.
- Визуально работающие кнопки сортировки по категориям.
- Визуально работающий функционал выбора пицц.
    - Визуально работающая кнопка добавления пиццы.

Список задач
-

- [X] Перенести все запросы в файл api с помощью redux-thunk.
- [ ] Реализовать сортировку.
    - [ ] Через PopUp окно (популярность, цена, алфавит).
    - [ ] Сортировка по категориям.
- [ ] Сделать страницу "корзина" рабочей.
- [ ] Мигрировать на TypeScript.

Сам сайт на github pages
-

[Тык](https://dekhas.github.io/pizza-shop/)