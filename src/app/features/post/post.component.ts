import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Genese, GeneseService, RequestMethod } from 'genese-angular';
import { Endpoint } from '../models/endpoint';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    // --------------------------------------------------
    //                     PROPERTIES
    // --------------------------------------------------

    public book: Book = {};
    public booksGenese: Genese<Book>;
    public model = {
        genese: {
            path: '/books'
        }
    };


    constructor(
        private geneseService: GeneseService,
    ) {
        this.booksGenese = geneseService.getGeneseInstance(Book);
    }

    ngOnInit(): void {
        this.post();
    }


    post() {
        console.log('%c post this.book ', 'font-weight: bold; color: fuchsia;', this.book);
        const endpoint: Endpoint = {path: '/books', restAction: RequestMethod.POST, dataType: Book};
        const instance = this.geneseService.instance();
        console.log('%c post instance ', 'font-weight: bold; color: fuchsia;', instance);
        this.geneseService.instance().post(endpoint.path, instance).subscribe((newBook: Book) => {
            console.log('%c GeneseAbstract post response ', 'font-weight: bold; color: fuchsia;', newBook);
        });
    }

}
