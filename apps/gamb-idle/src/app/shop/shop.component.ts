import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'openforge-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
})
export class ShopPageComponent implements OnInit {
    public isModal: boolean = false; // * Property to catch if component is on the modal or not

    constructor(private router: Router, private modalController: ModalController) {}

    ngOnInit(): void {
        console.log('ShopPageComponent ngOnInit');
    }

    /**
     * * Function to close modal
     */
    public closeModal() {
        void this.modalController.dismiss();
    }
}
