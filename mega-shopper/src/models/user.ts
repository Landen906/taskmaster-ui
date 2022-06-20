export class User {
    customerId: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    username: string;
    password: string;


    constructor(id: number, fn: string, ln: string, em: string, ad: string, un: string, pw: string) {
        this.customerId = id;
        this.firstName = fn;
        this.lastName = ln;
        this.email = em;
        this.address = ad;
        this.username = un;
        this.password = pw;
    }

}