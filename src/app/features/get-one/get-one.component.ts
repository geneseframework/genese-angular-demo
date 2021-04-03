import { Component, OnInit } from '@angular/core';
import { ArrayOfArraysOfStrings } from '../models/arrayOfArraysOfStrings.model';
import { HttpClient } from '@angular/common/http';
import { geneseEnv } from '../../../genese.config';
import { Book } from '../models/book.model';
import { create } from '@genese/mapper/dist/create/main';
import { Genese, GeneseService } from '@genese/angular';


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
        this.getBookWithGeneseAngularV0('1')
        this.getBookWithGeneseAngularV1('/books/1')
        this.getBook('1');
        this.getBook('/books/1');
    }


    getBookWithGeneseAngularV0(path: string): void {
        this.geneseService.getGeneseInstance(Book)
            .getOne(path)
            .subscribe((response: Book) => {
                console.log('%c Get book with @genese/angular v0', 'font-weight: bold; color: cyan;', response);
            });
    }


    getBookWithGeneseAngularV1(path: string): void {
        this.geneseService.instance(Book)
            .get(path)
            .subscribe((response: Book) => {
                console.log('%c Get book with @genese/angular v1', 'font-weight: bold; color: magenta;', response);
            });
    }


    /**
     * Get one book for a given id or a given path
     * @param idOrPath
     */
    getBook(idOrPath: string): void {
        const path = `${geneseEnv.api}${idOrPath}`;
        // console.log('%c Will get one book ', 'font-weight: bold; color: green;', path);
        this.http.get(path).subscribe(async (book: any) => {
            console.log('%c Get one book ', 'font-weight: bold; color: cyan;', book);
            const mapped: Book = create(Book, book);
            console.log('%c Get one book with @genese/mapper ', 'font-weight: bold; color: magenta;', mapped);
        });
    }
}
