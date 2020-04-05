import { Component, OnInit } from '@angular/core';
import { Genese, GeneseAngular, GeneseService } from 'genese-angular';
import { BookSchema } from '../models/book.model';
import { ArrayOfArraysOfStrings } from '../models/arrayOfArraysOfStrings.model';
import { GET_BOOK } from '../models/get-book.endpoint';


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
    ) {
        this.arrayOfArraysOfStringsGenese = geneseService.getGeneseInstance(ArrayOfArraysOfStrings);
    }

    ngOnInit(): void {
        this.getBook('1');
        this.getBook('/books/1');
        this.getWithEndpoint('1');
    }



    getWithEndpoint(id: string) {
        GET_BOOK
    }



    /**
     * Get one book for a given id or a given path
     * @param idOrPath
     */
    getBook(idOrPath: string): void {
        this.geneseService.instance(BookSchema).get(idOrPath).subscribe((book: BookSchema) => {
            console.log('%c Get one book ', 'font-weight: bold; color: green;', book);
        });
    }
}
