import { Product } from "../models/product";

export const PRODUCTS_MOCK: Product[] = [
    { id: 'p1', title: 'T Shirt Angular',
        price: 19.99, thumbnail: 'assets/tshirt.jpeg', 
        description: 'A comfortable Angular t-shirt',
        tags: ['tag1', 'tag2'], createdAt: '2024-01-01T10:00:00Z' },
    { id: 'p2', title: 'Mug typescript',
        price: 29.99, thumbnail: 'assets/mug.jpg', 
        description: 'A stylish TypeScript mug',
        tags: ['tag2', 'tag3'], createdAt: '2024-02-15T12:30:00Z' },
    { id: 'p3', title: 'Sticker RxJS',
        price: 4.99, thumbnail: 'assets/sticker.png', 
        description: 'Cool RxJS sticker for your laptop',
        tags: ['tag1', 'tag3'], createdAt: '2024-03-10T09:15:00Z' }
]