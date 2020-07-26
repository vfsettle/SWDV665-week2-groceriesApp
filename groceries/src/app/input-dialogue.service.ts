import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesDataService } from './groceries-data.service';


@Injectable({
  providedIn: 'root'
})
export class InputDialogueService {

  constructor(public alertController: AlertController, public dataSvc: GroceriesDataService) {
    console.log('Utilizing InputDialogue Service');
  }

  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: item? 'Edit Item' : 'Add Item',
      // subHeader: 'Subtitle',
      message: item? 'Please edit item' : 'Please add item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item',
          value: item? item.name : null
        },
        {
          name: 'qty',
          placeholder: 'Quantity',
          value: item? item.qty : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          // role: 'cancel',
          // cssClass: 'secondary',
          handler: (item) => {
            console.log('Cancel item entry');
          }
        }, 
        {
          text: 'Save',
          handler: (item) => {
            console.log('Save', item);
            if (index!== undefined) {
            this.dataSvc.editItem(item, index);
          }
          else {
            this.dataSvc.addItem(item);
          }

          }
        }
      ]
    });

    await alert.present();
  }

}
