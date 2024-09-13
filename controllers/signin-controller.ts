module App {
    export class SignInController {
        public user: UserData = { id: 0, 
                                    email: '', 
                                    password: '', 
                                    firstName:'', 
                                    lastName:'', 
                                    address:'' };
                                    
        static $inject = ['UserService', '$timeout', '$state', 'CookiesService'];
        constructor(private userService: UserService, 
            private $timeout: angular.ITimeoutService,
            private $state: angular.ui.IStateService,
            private $cookies: CookiesService
        ){}

        // Signing up a User in the database
        signInUser(): void {
            this.userService.getUserByEmailAndPassword(this.user).then(authenticatedUser => {
                if (authenticatedUser &&
                    authenticatedUser.email === this.user.email && 
                    authenticatedUser.password === this.user.password) {

                    this.$cookies.setUserId(authenticatedUser.id);
                    alert('User login');                    
                    
                    this.$timeout(()=> {
                        this.$state.go('home');
                    },2000);

                    console.log(this.$cookies.getUserId())                  
                } else 
                {
                    alert('Wrong Credentials!');

                }
            });
        }
        }
    }

