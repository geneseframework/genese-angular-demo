import { Component, OnInit } from '@angular/core';
import { Genese, GeneseService } from 'genese-angular';
import { BookSchema } from '../models/book.model';


@Component({
    selector: 'app-get-one-custom',
    templateUrl: './get-one-custom.component.html',
    styleUrls: ['./get-one-custom.component.scss']
})
export class GetOneCustomComponent implements OnInit {

    // --------------------------------------------------
    //                     PROPERTIES
    // --------------------------------------------------

    public booksGenese: Genese<BookSchema>;

    // --------------------------------------------------
    //                     CONSTRUCTOR
    // --------------------------------------------------

    constructor(
        private geneseService: GeneseService,
    ) {
        this.booksGenese = geneseService.getGeneseInstance(BookSchema);
    }

    ngOnInit(): void {
        this.getOneCustom('1');
    }

    /**
     * Get one book for a given id
     * @param id
     */
    getOneCustom(id: string): void {
        this.booksGenese.getOneCustom(`/custom-path/${id}`).subscribe((book: BookSchema) => {
            console.log('%c GeneseAbstract getOneCustom book ', 'font-weight: bold; color: green;', book);
        });
    }
}
