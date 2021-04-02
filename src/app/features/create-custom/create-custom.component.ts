import { Component, OnInit } from '@angular/core';
import { BOOK } from '../mocks/book.mock';
import { Book } from '../models/book.model';
import { Genese, GeneseService } from '@genese/angular';
import { homeEnv } from '../homeEnv';


@Component({
    selector: 'app-create-custom',
    templateUrl: './create-custom.component.html',
    styleUrls: ['./create-custom.component.scss']
})
export class CreateCustomComponent implements OnInit {

    // --------------------------------------------------
    //                     PROPERTIES
    // --------------------------------------------------

    public booksGenese: Genese<Book>;
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
        this.create();
    }


    create() {
        this.booksGenese.createCustom(`${homeEnv.path}/custom-path`, BOOK).subscribe((newBook: Book) => {
            console.log('%c GeneseAbstract create newBook ', 'font-weight: bold; color: fuchsia;', newBook);
        });
    }


}
