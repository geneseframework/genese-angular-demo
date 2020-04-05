import { Component, OnInit } from '@angular/core';
import { BOOK } from '../mocks/book.mock';
import { BookSchema } from '../models/book.model';
import { Genese, GeneseService } from 'genese-angular';
import { homeEnv } from '../homeEnv';
import { ResponseStatus } from '../../enums/response-status';


@Component({
    selector: 'app-create-custom',
    templateUrl: './delete-custom.component.html',
    styleUrls: ['./delete-custom.component.scss']
})
export class DeleteCustomComponent implements OnInit {

    // --------------------------------------------------
    //                     PROPERTIES
    // --------------------------------------------------

    public booksGenese: Genese<BookSchema>;
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
        this.booksGenese = geneseService.getGeneseInstance(BookSchema);
    }

    ngOnInit(): void {
        this.getData();
    }


    deleteCustom(id: string): void {
        this.booksGenese.deleteCustom(`/custom-path/${id}`).subscribe((response: ResponseStatus) => {
            console.log('%c Genese deleteCustom response ', 'font-weight: bold; color: red;', response);
            this.getData();
        });
    }


    getData(): void {
        this.booksGenese
            .getAll()
            .subscribe((response: BookSchema[]) => {
                console.log('%c getAll response ', 'font-weight: bold; color: black;', response);
                this.data = response;
            });
    }


}
