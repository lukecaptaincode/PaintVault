import {Component, OnInit} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
    selector: 'app-scanner',
    templateUrl: './scanner.page.html',
    styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
    num: any;

    constructor(private barcodeScanner: BarcodeScanner) {
    }

    ngOnInit() {
    }

    scan() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            this.num = barcodeData.text;
        }).catch(err => {
            console.log('Error', err);
        });
    }
}
