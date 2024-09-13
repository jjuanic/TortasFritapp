module App {
    export class SignupController {
        public newUser: UserData = { id: 0, 
                                    email: '', 
                                    password: '', 
                                    firstName:'', 
                                    lastName:'', 
                                    address:'' };
                                    
        static $inject = ['UserService', '$timeout', '$state'];
        constructor(private userService: UserService, 
            private $timeout: angular.ITimeoutService,
            private $state: angular.ui.IStateService){
        }
        eraseNewUser(): void {
            this.newUser =  { id: 0, 
                            email: '', 
                            password: '', 
                            firstName:'', 
                            lastName:'', 
                            address:'' };
        }

        // Signing up a User in the database
        signUpUser(): void {
            this.userService.addUser(this.newUser).then(item => {
                this.eraseNewUser();
                alert('User sign up.');

                // Redirigir a la página deseada después de 2 segundos (2000 ms)
                this.$timeout(() => {
                    this.$state.go('home'); // Reemplaza 'desiredState' con el nombre del estado al que quieres redirigir
                }, 2000);
            });
        }
    }

}
