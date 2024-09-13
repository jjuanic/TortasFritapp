module App {
    export class UserService {
        private apiUrl: string = 'https://localhost:7183/users'; // URL base de la API

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        getUsers(): ng.IPromise<UserData[]> {
            return this.$http.get<UserData[]>(this.apiUrl).then(response => response.data);
        }

        getUserByID(id: number): ng.IPromise<UserData> {
            return this.$http.get<UserData>(`${this.apiUrl}/${id}`).then(response => response.data);
        }

        addUser(item: UserData): ng.IPromise<UserData> {
            return this.$http.post<UserData>(this.apiUrl, item).then(response => response.data);
        }

        updateUser(item: UserData): ng.IPromise<UserData> {
            return this.$http.put<UserData>(`${this.apiUrl}/${item.id}`, item).then(response => response.data);
        }

        deleteUser(id: number): ng.IPromise<void> {
            return this.$http.delete<void>(`${this.apiUrl}/${id}`).then(response => response.data);
        }
    }


}