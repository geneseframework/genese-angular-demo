import { Component, OnInit } from '@angular/core';
import { startTests } from '../engine/start-tests';
import { OnePrimitiveClassSpec } from '../examples/classes.spec';
import { create } from '@genese/mapper/dist/create/main';


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
        const zzz: OnePrimitiveClassSpec = create(OnePrimitiveClassSpec, {prop: 'zzz'});
        console.log('%c First tests OnePrimitiveClassSpec correct ', 'font-weight: bold; color: magenta;', zzz);
        const aaa: OnePrimitiveClassSpec = create(OnePrimitiveClassSpec, {prop: 2});
        console.log('%c First tests OnePrimitiveClassSpec wrong ', 'font-weight: bold; color: magenta;', aaa);
        // await startTests();
        // const data = {name: 'Léa', friend: {name: 'Léo'}};
        // const person: Person = await Mapper.create(Person, data) as any;
        // console.log('%c First tests ', 'font-weight: bold; color: magenta;', person);
        // person.hello();
        // person.friend.hello();
        return;
    }
}
