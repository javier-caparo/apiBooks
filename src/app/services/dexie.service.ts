import { Injectable } from '@angular/core';
import { BookInterface } from '../models/book-interface.model';
import { UserInterface } from '../models/user-interface.model';
// dexie
import Dexie from 'dexie';

@Injectable({
    providedIn: 'root'
  })

export class MyBookDatabase extends Dexie {
    books: Dexie.Table<BookInterface, number>;
    users: Dexie.Table<UserInterface, number>;
    
    constructor() {  
        super("MyBookDatabase");
        
        //
        // Define tables and indexes
        // (Here's where the implicit table props are dynamically created)
        //
        this.version(1).stores({
            books: '++id, titulo, idioma, descripcion, portada, precio, autor, oferta, link_amazon, index',
            users: 'id++, name, email, password',
    
        });
        
        // The following lines are needed for it to work across typescipt using babel-preset-typescript:
        this.books= this.table("books");
        this.users= this.table("users");

    }

}

export const db = new MyBookDatabase();