import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Genese, GeneseService } from '@genese/angular';
import { homeEnv } from '../homeEnv';
import { ResponseStatus } from '../../enums/response-status';


@Component({
    selector: 'app-create-custom',
    templateUrl: './update-custom.component.html',
    styleUrls: ['./update-custom.component.scss']
})
export class UpdateCustomComponent implements OnInit {

    // --------------------------------------------------
    //                     PROPERTIES
    // --------------------------------------------------

    public booksGenese: Genese<Book>;
    public data: any[] = [];
    public model = {
        genese: {
            path: '/books'
        }
    };

    // --------------------------------------------------
    //                     CONSTRUCTOR
    // --------------------------------------------------

    constructor(
        private geneseService: GeneseService,
    ) {
        this.booksGenese = geneseService.getGeneseInstance(Book);
    }

    ngOnInit(): void {
        this.getData();
    }


    updateCustom(id: string, updatedBook: any): void {
        console.log('%c delete book id ', 'font-weight: bold; color: fuchsia;', id);
        this.booksGenese.updateCustom(`${homeEnv.path}/${id}`, updatedBook).subscribe((response: ResponseStatus) => {
            console.log('%c Genese delete response ', 'font-weight: bold; color: red;', response);
            this.getData();
        });
    }


    getData(): void {
        this.booksGenese
            .getAll()
            .subscribe((response: Book[]) => {
                console.log('%c getAll response ', 'font-weight: bold; color: black;', response);
                this.data = response;
            });
    }


}
