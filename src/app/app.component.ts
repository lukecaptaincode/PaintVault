import {Component} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {ProductsService} from './products/products.service';
import {SQLite} from '@ionic-native/sqlite/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/splash',
            icon: 'home'
        },
        {
            title: 'Add Item',
            url: '/scanner',
            icon: 'add'
        },
        {
            title: 'Inventory',
            url: '/inventory',
            icon: 'brush'
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: 'cog'
        },
        {
            title: 'Add Product',
            url: '/add-product',
            icon: 'cart'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController,
        private sqlite: SQLite
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.menu.enable(true, 'menu');

        });
        const service = new ProductsService(this.sqlite);
        console.log(service.getData());
    }

    openMenu() {
        this.menu.open('menu');
    }
}
