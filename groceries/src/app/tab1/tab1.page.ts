import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery List App";

  items = [
    {
      name: "Bacon",
      qty: 2
    },
    {
      name: "Eggs",
      qty: 3
    },
    {
      name: "Milk",
      qty: 1
    },
    {
      name: "Potatoes",
      qty: 6
    },
    {
      name: "Nectarines",
      qty: 4
    },

  ];

  constructor(public navCtrl: NavController, public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item, index) {
      console.log("Removing Item - ", item, index);
      const toast = await this.toastController.create({
        message: 'Removing Item - ' + index + " " + item.name,
        duration: 3000,
        // position: 'bottom',
      });
      toast.present();

      this.items.splice(index,1);
    }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Add Item',
      // subHeader: 'Subtitle',
      message: 'Please enter item and quantity',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item'
        },
        {
          name: 'qty',
          placeholder: 'Quantity'
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
        }, {
          text: 'Save',
          handler: (item) => {
            console.log('Save', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }

}
