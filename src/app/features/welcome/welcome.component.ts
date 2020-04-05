import { Component, OnInit } from '@angular/core';
import { Genese, GeneseService } from 'genese-angular';
import { BookSchema } from '../models/book.model';


@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

    public booksGenese: Genese<BookSchema>;
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
        this.getOne('1');
    }

    /**
     * Get one book for a given id
     * @param id
     */
    getOne(id: string): void {
        this.booksGenese.getOne(id).subscribe((book: BookSchema) => {
            console.log('%c GeneseAbstract getArrayOfStrings book ', 'font-weight: bold; color: green;', book);
        });
    }
}
