import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    templateUrl: './app/templates/hello.html'
})
export class Hello {
    name: string;

    constructor() {
        this.name = 'World!';
    }
}