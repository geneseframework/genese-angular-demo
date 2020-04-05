import { Component, OnInit } from '@angular/core';
import { BookSchema } from '../models/book.model';
import { Genese, GeneseService } from 'genese-angular';
import { homeEnv } from '../homeEnv';


@Component({
    selector: 'app-get-all-custom',
    templateUrl: './get-all-custom.component.html',
    styleUrls: ['./get-all-custom.component.scss']
})
export class GetAllCustomComponent implements OnInit {

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


    getData(): void {
        this.booksGenese
            .getAllCustom('/custom-path')
            .subscribe((response: BookSchema[]) => {
                console.log('%c getAllCustom response ', 'font-weight: bold; color: black;', response);
                this.data = response;
            });
    }
}
