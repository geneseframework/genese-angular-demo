import { Component, OnInit } from '@angular/core';
import { startTests } from '../engine/start-tests';


@Component({
    selector: 'tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {


    constructor(
    ) {
    }

    ngOnInit(): void {
        this.tests().then(r => {
            return;
        });
    }


    async tests(): Promise<void> {
        await startTests();
        // const data = {name: 'Léa', friend: {name: 'Léo'}};
        // const person: Person = await Mapper.create(Person, data) as any;
        // console.log('%c First tests ', 'font-weight: bold; color: magenta;', person);
        // person.hello();
        // person.friend.hello();
        return;
    }
}
