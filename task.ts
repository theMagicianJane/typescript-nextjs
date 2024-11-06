import { UserWithAddress, Person, Settings } from './interfaces/index';
import { Orders } from './types/index';

const user: UserWithAddress = {
  name: 'Test name',
  age: 45,
  email: 'test',
  zipCode: '50000',
  street: 'Sesame',
  city: 'Kyiv',
}

const orders: Orders = [{
  orderId: 5,
  userId: 10,
  products: [{
    name: 'Product1',
    price: 10,
    category: {
      categoryName: 'Kitchen',
      categoryId: 20
    }
  }]
}]

const getFullName = ({ firstName, lastName, middleName }: Person): string =>
  middleName ? `${firstName} ${lastName} ${middleName}` : '';

const settings = {
  theme: "light",
  notifications: true,
  autoSave: {
    enabled: true,
    interval: 3000
  }
};

const applySettings = (values: Settings): string =>
  `Notifications are ${values?.notifications ? 'enabled' : 'disabled'}`;