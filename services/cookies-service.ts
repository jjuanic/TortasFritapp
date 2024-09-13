/// <reference path="../node_modules/@types/angular/index.d.ts" />
/// <reference path="../node_modules/@types/angular-cookies/index.d.ts" />

module App {
    export class CookiesService {
        static $inject = ['$cookies'];
        constructor(private $cookies: angular.cookies.ICookiesService) {}

        setUserId(userId: number): void {
            const expiresAt = new Date(new Date().getTime() + 30 * 60 * 1000); 
            this.$cookies.put('userId', userId.toString(), { expires: expiresAt });

        }

        getUserId(): number{
            const userId = this.$cookies.get('userId');
            return userId ? parseInt(userId,10) : undefined;
        }

    }
}