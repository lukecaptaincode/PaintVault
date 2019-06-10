import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    data: any;

    constructor(private sqlite: SQLite) {

        sqlite.create({
            name: 'products.sqlite3',
            location: './'
        }).then((db: SQLiteObject) => {


                db.executeSql('SELECT * FROM poducts', [])
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));


            })
            .catch(e => console.log(e));
    }

    getData() {
        return this.data;
    }

}

