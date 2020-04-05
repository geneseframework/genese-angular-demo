import { Component, OnInit } from '@angular/core';
import { BookSchema } from '../models/book.model';
import { Genese, GeneseService } from 'genese-angular';
import { ResponseStatus } from '../../enums/response-status';


@Component({
    selector: 'app-create',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

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


    update(id: string): void {
        console.log('%c delete book id ', 'font-weight: bold; color: fuchsia;', id);
        this.booksGenese.delete(id).subscribe((response: ResponseStatus) => {
            console.log('%c Genese delete response ', 'font-weight: bold; color: red;', response);
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
