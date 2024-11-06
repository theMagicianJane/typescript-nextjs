import { Products, Theme } from '../types/index';
interface Address {
  street: string,
  city: string,
  zipCode: string
}

interface User {
  name: string,
  age: number
}

interface UserWithAddress extends User, Address {
  email: string
}

interface Product {
  name: string,
  price: number,
  category: {
    categoryName: string,
    categoryId: number,
  }
}

interface Order {
  orderId: number,
  userId: number,
  products: Products,
}

interface Person {
  firstName: string,
  lastName: string,
  middleName?: string,
}


interface Settings {
  theme: Theme,
  notifications: boolean,
  autoSave: {
    enabled: boolean,
    interval: number,
  }
}

export { UserWithAddress, Product, Order, Person, Settings }