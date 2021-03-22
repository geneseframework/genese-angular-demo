import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { BookService } from '../services/book.service';
import { CreateBookDTO } from '../dto/create-book.dto';
import { Book } from '../models/book.model';
import { GetAllResponse } from '../../generic/services/generic-data.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from '../enums/category';
import { sayHello } from 'wp';
import { create } from '@genese/mapper/dist/create/main';
import { Author } from '../models/author.model';

export class Person {
    name: string;
    hello() {
        console.log('Hello' + this.name)
    }
}

@ApiTags('Books')
@Controller('books')
export class BookController {
    constructor(private booksService: BookService) { }

    @Get(':bookId')
    @ApiOperation({ summary: 'Get one book' })
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Book,
    })
    async getBook(@Param('bookId') bookId, @Query() params) {
        sayHello();
        const author = create(Author, {firstName: 'Isaac', lastName: 'Asimov'});
        console.log('AUTHOR', author);
        const ppp = create(Person, {name: 'Isaac'});
        console.log('PERSON', ppp);
        return await this.booksService.getOne(bookId, params);
    }

    @Get()
    @ApiOperation({ summary: 'Get all app' })
    async getBooks(@Query() params): Promise<GetAllResponse<Book> | Book[]> {
        let books = [];
        if (params && params.pSize) {
            books = await this.booksService.getAllWithPagination(params);
        } else {
            books = await this.booksService.getAll(params);
        }
        return books;
    }

    @Post()
    @ApiOperation({ summary: 'Create a book' })
    @ApiQuery({name: 'category', enum: Category})
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }

    @Delete(':bookId')
    @ApiOperation({ summary: 'Delete a book' })
    async deleteBook(@Param('bookId') bookId) {
        const books = await this.booksService.deleteBook(bookId);
        return books;
    }
}
