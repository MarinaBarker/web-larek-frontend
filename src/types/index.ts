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