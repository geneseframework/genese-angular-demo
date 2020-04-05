import { Endpoint, RestAction } from './endpoint';
import { BookSchema } from './book.model';
import { GeneseService } from 'genese-angular';


export const GET_BOOK: Endpoint<BookSchema> = {
    path: '/books/{id}',
    restAction: RestAction.GET,
    dataType: BookSchema,
    instance: (geneseService: GeneseService) => geneseService.instance(BookSchema)
};
