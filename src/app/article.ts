export class Article {
    id: number;
    title: string;
    key: string; // permalink
    date: Date = new Date();
    content: string;
    description: string;
    imageUrl: string;
}
