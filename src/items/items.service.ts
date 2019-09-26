import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: 1,
            name: "Item One",
            description: "First item's description",
            quantity: 2
        },
        {
            id: 2,
            name: "Item Two",
            description: "Second item's description",
            quantity: 5
        }
    ]

    create(item: Item) {
        this.items.push(item);
    }

    findAll(): Item[] {
        return this.items;
    }
    findOne(id: number): Item {
        return this.items.find(item => item.id === 1);
    }
}

