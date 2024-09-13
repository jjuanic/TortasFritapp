module App{
    export class OrderController{
        public orders: OrderData[] = [];
        public newOrder: OrderData = {
            id: 0,
            name: '',
            orderDate: new Date(),  
            orderAdress: '',
            totalAmount: 0,
            orderlines: [],  
            user: {        
                id: 0,
                email : '',
                password: '',
                firstName: '',
                lastName: '',
                address:''
            }
        };

        static $inject = ['OrderService', 'UserService'];

        constructor(
            private orderService : OrderService,
            private userService: UserService
        ){ }

        addOrder(): void{

        }

    }
}