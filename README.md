# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Архитектура проекта

Архитертура проекта основывается на паттерне графических интерфейсов (MVP), который разделяет приложение на три части:
- Model - классы Model и AppState, которые отвечают за доступ к данным: получение, обновление и удаление.
- View - классы Card, Component, Order, Form, Basket, Page, отвечают за отображение данных пользователю и взаимодействие с ним.
- Presenter - служит прослойкой между Model и View.

## Базовый код
КЛАСС EVENTEMITTER - брокер событий, позволяет подписываться на событие  иреагировать на него.
Методы:
- on - устанавливает обработчик событий;
- off - снимает обработчик событий;
- onAll - устанавливает обработчик на все события;
- offAll - снимает обработчик со всех событий;
- emit - инициирует события с данными;
- trigger - устанавливает callback-trigger, генерирующий данное событи епри вызове;

КЛАСС API - базовый класс для взаимодействия с сервером.
Методы:
- get - получает запросы с сервера;
- post - отправляет данные на сервер;
- handleResponse - обрабатывает ответы с сервера, выдавая ошибки;

КЛАСС MODEL - управляет данными и взаимодействует с системой событий.
Методы: 
- emitChanges - инициирует событие с переданным названием и данными, уведомляя подписчиков в изменении модели;

КЛАСС APPSTATE - представляет центральную модель для управления состоянием проекта, включая данные каталога продуктов, корзину, информацию о заказе и ошибки валидации форм.
Методы:
- setCatalog - устанавливает список товаров;
- setPreview - устанавливает предпросмотр товаров и инициализирует событие об изменении;
- addToBasket - добавление товаров в корзину;
- removeToBasket - удаление товара из корзины;
- clearBasket - очистить корзину;
- validateAddress - валидация полей доставки;
- validateContacts - валидация полей контактов;
- getTotal - рассчитываем итоговую стоимость товаров;

КЛАСС COMPONENT - базовый класс, реализующий методы отрисовки пользовательского интерфейса, предоставляющий инструментарий для работы с DOM-элементами.
Методы:
- toggleClass - переключает класс;
- setImage - устанавливает изображение с альтернативным тектом;
- setVisible - показывает элемент;
- setHidden - скрывет элемент;
- setDisabled - меняет статус блокировки элемеента;
- render - выводит контейнер на страницу;

КЛАСС CARD - представляет собой компонент карточки товара, наследуется от Component, содержит сеттеры и геттеры:
- set id - устанавливает id товара / get id - получить id товара;
- set category - устанавливает категорию товара;
- set title - устанавливает название товара / get title - получить название товара;
- set image - устанавливает изображение товара;
- set description - устанавливает описание товара;
- set price - устанавливает цену товара;
- set button - устанавливает текст кнопки товара;
- set index - установить индекс товара / get index - получить индекс товара;

КЛАСС FORM - предназначен для управления формами, наследует класс Component.
Методы:
- onInputChange - вызывается при изменении формы;
- set valid - устанавливает валидацию форм;
- set errors - устанавливает вывод информации об ошибке;
- render - выводит обновлённое состояние валидности;

КЛАСС ORDER - наследует класс Form, включает в себя выбор способа оплаты, указание контактных данных и адреса пользователя.
Методы:
- select paymentMethod - выбирает способ оплаты;
- set address - адрес доставки;
- set phone - контакты пользователя; 
- set email - email пользователя;

КЛАСС BASKET - управляет отображением корзины, наследует класс Component, содержит сеттеры:
- set item - устанавливает элементы в корзину;
- set selected - устанавлтвает наличие товаров в корзине;
- set total - устанавливает общую стоимость товара;

КЛАСС PAGE - класс предназначенный для управления элементами интерфейса главной страницы, включает в себя каталог карточек товаров, счетчик товаров в корзине и блокировку прокрутки страницы, наследует класс Component.
- set catalog - выводит карточки на страницу;
- set counter - обновляет счетчик тотваров в корзине;
- set locked - блоукирует прокрутку страницы;

КЛАСС MODAL - отображение модального окна, наследует класс Component, отвечает за открытие, закрытие, и управление его содержимым.
Методы: 
- open - открытие модального окна;
- close - закрытие модального окна;
- set content - задает содержимое модального окна;
- render - отрисовывает данные и выводит их в модальном окне;

## Типы данных
export type TProductCategory = 'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил' ;
export type TPayment = 'онлайн' | 'при получении' ;

//данные карточек товара
export interface IProduct {
    id: string;
    category: TProductCategory;
    title: string;
    description: string;
    price: number | null;
    image?: string;
}

//данные заказа
export interface IProductOrder {
    item: IProduct;
    total: number;
}

//данные формы оплаты и контактов 
export interface IOrderForm {
    payment: TPayment;
    address: string;
    email: string;
    phone: string;
}

//данные корзины
export interface IBasket {
    item: IProduct;
    price: number;
    total: number;
}

//данные успешного заказа
export interface IOrderSuccess {
    id: string;
    total: number;
}

//все данные компонентов приложения
export interface IAppState {
    catalog: IProduct[];
    basket: string [];
    preview: string | null;
    order: IOrderForm | null;
}