import { Article } from './article';
export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'My first article',
        // tslint:disable-next-line: max-line-length
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget massa interdum, ultricies lectus id, congue erat. Suspendisse mollis nisl a tellus aliquet, at tempor justo blandit. Aliquam metus orci, dignissim ornare efficitur vel, condimentum eget felis.</p><p> Aenean ac leo sed ante molestie rutrum quis non lorem. Vestibulum laoreet erat at elit tristique, eu euismod odio ultricies. Aliquam varius imperdiet nulla nec pulvinar. Ut nec aliquet est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tristique justo nec volutpat posuere. Praesent nec risus eget sem tempor sagittis eu in ex. Suspendisse potenti. Nulla et magna et nisl dignissim pulvinar a ut est. Duis et urna consectetur, facilisis leo sit amet, consectetur est</p>',
        description: 'This is my first article. Please read and share.',
        key: 'my-first-article',
        date: new Date(),
        imageUrl: '../assets/cs.jpg'
    },
    {
        id: 2,
        title: 'My second article',
        // tslint:disable-next-line: max-line-length
        content: '<p>Sed iaculis elit a convallis tincidunt. Integer rhoncus ex eget mi sollicitudin fringilla. Suspendisse vitae odio urna. Donec pellentesque tempus sagittis. Quisque pulvinar, eros id aliquet fringilla, orci justo viverra nibh, in dictum mauris augue quis nunc. Ut tincidunt, leo aliquet porta interdum, velit nibh vulputate turpis, et convallis felis ipsum in erat.</p><p> Suspendisse et felis at elit elementum eleifend ultricies nec elit. Maecenas erat lorem, iaculis non sapien vitae, finibus pellentesque erat.',
        description: 'This is my second article. Please read and share.',
        key: 'my-second-article',
        date: new Date(),
        imageUrl: '../assets/cs.jpg'
    }
];
