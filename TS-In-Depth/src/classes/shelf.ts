import { ShelfItem } from '../interfaces';

export default class Shelf<T> {
    private items: ShelfItem[] = [];

    add(item: ShelfItem): void {
        this.items.push(item);
    }

    getFirst(): ShelfItem {
        return this.items[0];
    }

    find(title: string): ShelfItem {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}