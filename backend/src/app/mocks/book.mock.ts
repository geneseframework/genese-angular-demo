import { Book } from '../models/book.model';

export const BOOKS: Book[] = [
    {
        id: 1,
        author: 'Isaac Asimov',
        bookTitle: 'The caves of steel',
        booleans: [true, false, false, true],
        categories: ['novels', 'science-fiction'],
        codeArrayOfArraysOfStrings: [['A', 'B', 'C'], ['D', 'E'], [], ['G']],
        codeArrayOfArraysOfObjects: [
            [
                {codeNumber: 2, codeString: 'A'},
                {codeNumber: 3, codeString: 'B'},
                {codeNumber: 4, codeString: 'C'}
            ],
            [],
            [
                {codeNumber: 5, codeString: 'D'}
            ],
        ],
        codeNumbers: [2, 34, 53],
        description: 'In this novel, Isaac Asimov introduces Elijah Baley and R. Daneel Olivaw, later his favorite protagonists',
        editions: [
            {
                name: 'La découverte',
                year: '1972',
                gnTranslate: {
                    fr: {
                        country: 'Angleterre'
                    },
                    en: {
                        country: 'England',
                        incorrect: 'Incorrect property'
                    }
                }
            },
            {
                name: 'Gallimard',
                year: '1978',
                gnTranslate: {
                    fr: {
                        country: 'Allemagne'
                    },
                    en: {
                        country: 'Germany'
                    }
                }
            },
        ],
        editor: {
            name: 'La pléiade',
            place: {
                city: 'Paris',
                country: 'France',
                street: 'Champs-Elysées'
            },
        },
        irrelevantProperty: 'Irrelevant',
        isAvailable: true,
        gnTranslate: {
            en: {
                type: 'novels'
            },
            es: {
                type: 'novelas',
                incorrect: 'incorrect property'
            },
            fr: {
                type: 'nouvelles'
            },
            de: {
                incorrect: 'incorrect'
            }
        },
        librariesClassification: {
            sauramps: 'E223',
            fnac: 'Z217'
        },
        librariesRate: {
            sauramps: 18,
            fnac: 15
        }
    },
    {
        id: 2,
        bookTitle: 'The naked sun',
        description: 'The story arises from the murder of Rikaine Delmarre',
        author: 'Isaac Asimov'
    },
    {
        id: 3,
        bookTitle: 'The robots of dawn',
        description: 'Detective Elijah Baley of Earth is training with his son and others to overcome their socially ingrained agoraphobia',
        author: 'Isaac Asimov'
    },
    {
        id: 4,
        bookTitle: 'Robots and Empire',
        description: 'The Earthman Elijah Baley (the detective hero of the previous Robot app) has died nearly two centuries earlier',
        author: 'Isaac Asimov'
    },
    {
        id: 5,
        bookTitle: 'The Currents of Space',
        description: 'The story takes place in the context of Trantor\'s rise from a large regional power to a galaxy-wide empire',
        author: 'Isaac Asimov'
    },
    {
        id: 6,
        bookTitle: 'The Stars',
        description: 'The story was first published with the title Tyrann in Galaxy magazine',
        author: 'Isaac Asimov'
    },
    {
        id: 7,
        bookTitle: 'The Mysterious Affair at Styles',
        description: 'A detective novel by British writer Agatha Christie. It was written in the middle of the First World War, in 1916',
        author: 'Agatha Christie'
    },
    {
        id: 8,
        bookTitle: 'Richard III',
        description: 'A historical play by William Shakespeare believed to have been written around 1593',
        author: 'William Shakespeare'
    },
    {
        id: 9,
        bookTitle: 'Hamlet',
        description: 'A tragedy written by William Shakespeare sometime between 1599 and 1602',
        author: 'William Shakespeare'
    },
    {
        id: 10,
        bookTitle: 'The Secret Adversary',
        description: 'The second published detective fiction novel by British writer Agatha Christie, first published in January 1922',
        author: 'Agatha Christie'
    },
    {
        id: 11,
        bookTitle: 'The Murder on the Links',
        description: 'A work of detective fiction by Agatha Christie',
        author: 'Agatha Christie'
    },
    {
        id: 12,
        bookTitle: 'Othello',
        description: 'A tragedy by William Shakespeare, believed to have been written in 1603',
        author: 'William Shakespeare'
    },
];
