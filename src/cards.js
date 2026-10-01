import Status from "./status.js";

const cards = [
    {
        id: 1,
        title: 'Активный товар',
        content: 'Товар в наличии и доступен для заказа.',
        price: 100,
        status: Status.ACTIVE,
    },
    {
        id: 2,
        title: 'Недоступный товар',
        content: 'Товар временно снят с продажи.',
        price: 200,
        status: Status.INACTIVE,
    },
    {
        id: 3,
        title: 'Товар на проверке',
        content: 'Заказ обрабатывается, ожидайте подтверждения.',
        price: 300,
        status: Status.PENDING,
    },
    {
        id: 4,
        title: 'Товар без статуса',
        content: 'У этого товара статус ещё не задан.',
        price: 400,
        status: '',
    },
]

export default cards;