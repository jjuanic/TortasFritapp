module App {
    export class UserService {
        private apiUrl: string = 'https://localhost:7183/users'; // URL base de la API

        static $inject = ['$http', '$q'];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {}

        getUsers(): ng.IPromise<UserData[]> {
            return this.$http.get<UserData[]>(this.apiUrl).then(response => response.data);
        }

        getUserByID(id: number): ng.IPromise<UserData> {
            return this.$http.get<UserData>(`${this.apiUrl}/${id}`).then(response => response.data);
        }

        getUserByEmailAndPassword(user: UserData): ng.IPromise<UserData> {
            const fakeUser: UserData = {
                id: 123, // Puedes ajustar el ID y otros datos como prefieras
                firstName: 'Beto',
                lastName: 'Salazar',
                email: 'hola@gmail.com',
                address: 'Pronunciamiento 2073',
                password: '123'
                // Agrega otros campos que necesites según la estructura de UserData
            };
        
            // Simula una respuesta exitosa usando $q
            return this.$q((resolve) => {
                setTimeout(() => {
                    resolve(fakeUser); // 
                }, 1000); // 1000 ms de retraso, ajusta según lo necesites
            });
        }

        // addUser(item: UserData): ng.IPromise<UserData> {
        //     return this.$http.post<UserData>(this.apiUrl, item).then(response => response.data);
        // }

        addUser(item: UserData): ng.IPromise<UserData> {
            const fakeUser: UserData = {
                id: 123, // Puedes ajustar el ID y otros datos como prefieras
                firstName: item.firstName,
                lastName: item.lastName,
                email: item.email,
                address: item.address,
                password: item.password,
                // Agrega otros campos que necesites según la estructura de UserData
            };
        
            // Simula una respuesta exitosa usando $q
            return this.$q((resolve) => {
                setTimeout(() => {
                    resolve(fakeUser); // Devuelve el usuario fake después de un tiempo para simular el retraso del servidor
                }, 1000); // 1000 ms de retraso, ajusta según lo necesites
            });
        }
        

        updateUser(item: UserData): ng.IPromise<UserData> {
            return this.$http.put<UserData>(`${this.apiUrl}/${item.id}`, item).then(response => response.data);
        }

        deleteUser(id: number): ng.IPromise<void> {
            return this.$http.delete<void>(`${this.apiUrl}/${id}`).then(response => response.data);
        }
    }


}