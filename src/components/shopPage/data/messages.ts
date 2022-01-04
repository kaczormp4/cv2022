interface messages {
    id: number,
    recipient: string,
    date: string,
    topic: string,
    content: string
}

const messages: messages[] = [
    {
        id: 1,
        recipient: 'John',
        date: '2012',
        topic: 'Car',
        content: 'Ut officia laboris officia labore occaecat Lorem proident aute Lorem adipisicing sint consectetur laboris non.'
    },
    {
        id: 2,
        recipient: 'Anna',
        date: '2022',
        topic: 'Flowers',
        content: 'Ut officia laboris officia labore occaecat Lorem proident aute Lorem adipisicing sint consectetur laboris non.'
    },
    {
        id: 3,
        recipient: 'Pat',
        date: '2113',
        topic: 'Bike',
        content: 'Ut officia laboris officia labore occaecat Lorem proident aute Lorem adipisicing sint consectetur laboris non.'
    },
]

export default messages;