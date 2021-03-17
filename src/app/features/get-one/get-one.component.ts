import { Component, OnInit } from '@angular/core';
import { Genese, GeneseService } from 'genese-angular';
import { ArrayOfArraysOfStrings } from '../models/arrayOfArraysOfStrings.model';
import { HttpClient } from '@angular/common/http';
import { geneseEnv } from '../../../genese.config';
import { Person } from '../models/person';
import { Mapper } from '@genese/creator';


@Component({
    selector: 'app-get-one',
    templateUrl: './get-one.component.html',
    styleUrls: ['./get-one.component.scss']
})
export class GetOneComponent implements OnInit {

    public arrayOfArraysOfStringsGenese: Genese<ArrayOfArraysOfStrings>;
    public model = {
        genese: {
            path: '/books'
        }
    };


    constructor(
        private geneseService: GeneseService,
        private http: HttpClient
    ) {
        this.arrayOfArraysOfStringsGenese = geneseService.getGeneseInstance(ArrayOfArraysOfStrings);
    }

    ngOnInit(): void {
        this.getBook('1');
        this.getBook('/books/1');
        this.tests().then(r => {
            return;
        });
    }



    /**
     * Get one book for a given id or a given path
     * @param idOrPath
     */
    getBook(idOrPath: string): void {
        const path = `${geneseEnv.api}${idOrPath}`;
        console.log('%c Will get one book ', 'font-weight: bold; color: green;', path);
        this.http.get(path).subscribe(async (book: any) => {
            console.log('%c Get one book ', 'font-weight: bold; color: cyan;', book);
            // const mapped: Book = await Mapper.create(Book, book);
            // console.log('%c Get one book ', 'font-weight: bold; color: magenta;', mapped);
        });
    }


    async tests(): Promise<void> {
        const data = {name: 'Léa', friend: {name: 'Léo'}};
        const person: Person = await Mapper.create(Person, data) as any;
        console.log('%c First tests ', 'font-weight: bold; color: magenta;', person);
        person.hello();
        person.friend.hello();
        return;
    }
}
