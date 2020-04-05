import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Method } from './models/method.model';


@Component({
    selector: 'app-home',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    // --------------------------------------------------
    //                     PROPERTIES
    // --------------------------------------------------

    public method: Method = undefined;



    // --------------------------------------------------
    //                     CONSTRUCTOR
    // --------------------------------------------------

    constructor(
        private router: Router
    ) {
    }


    // --------------------------------------------------
    //                     METHODS
    // --------------------------------------------------

    ngOnInit(): void {
    }

    displayMethod(method: Method): void {
        this.router.navigate([method]);
    }

    // --------------------------------------------------
    //                 CALLS TO GENESE
    // --------------------------------------------------

    //
    // delete(id: string): void {
    //     this.booksGenese.delete(this.rootPath, id).subscribe((response: ResponseStatus) => {
    //         console.log('%c GeneseAbstract delete response ', 'font-weight: bold; color: brown;', response);
    //         this.getAll();
    //     });
    // }

    /**
     * Get all with primitive arrays
     */
    // getAllPrimitives(id: string): void {
    //     this.categoriesGenese
    //         .getAll(`/app/${id}/categories`)
    //         .subscribe((data: string[]) => {
    //             console.log('%c getAllPrimitives categories ', 'font-weight: bold; color: brown;', data);
    //         });
    //     this.codesGenese
    //         .getAll(`/app/${id}/codes`)
    //         .subscribe((data: number[]) => {
    //             console.log('%c getAllPrimitives codes ', 'font-weight: bold; color: brown;', data);
    //         });
    //     this.booleansGenese
    //         .getAll(`/app/${id}/booleans`)
    //         .pipe()
    //         .subscribe((data: boolean[]) => {
    //             console.log('%c getAllPrimitives codes ', 'font-weight: bold; color: brown;', data);
    //         });
    // }

    /**
     * Get all the app with pagination
     */
    // getAllWithPagination(): void {
    //     this.displayedColumns = ['id', 'author', 'title', 'description', 'actions'];
    //     this.booksGenese
    //         .getAllWithPagination(
    //             this.rootPath,
    //             {
    //                 pageIndex: this.paginator.pageIndex,
    //                 pageSize: this.paginator.pageSize
    //             })
    //         .subscribe((response: {results: BookSchema[], totalResults: number}) => {
    //             console.log('%c getAllWithPagination response ', 'font-weight: bold; color: orange;', response);
    //             this.displayMatTableDataSource(response);
    //         });
    // }e() {
}
