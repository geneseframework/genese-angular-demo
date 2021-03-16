import { Component, OnInit } from '@angular/core';
import { Genese, GeneseService } from 'genese-angular';
import { HttpClient } from '@angular/common/http';
import { geneseEnv } from '../../../genese.config';
import { Mapper } from '@genese/creator/dist/src/create/models/mapper';


@Component({
    selector: 'test-page',
    templateUrl: './test-page.component.html',
    styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {



    constructor(
        private geneseService: GeneseService,
        private http: HttpClient
    ) {
    }

    ngOnInit(): void {
        this.tests().then(r => {
            return;
        });
    }


    async tests(): Promise<void> {
        const data = {name: 'Léa', friend: {name: 'Léo'}};
        // const person: Person = await Mapper.create(Person, data) as any;
        // console.log('%c First tests ', 'font-weight: bold; color: magenta;', person);
        // person.hello();
        // person.friend.hello();
        return;
    }
}
