import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesDataService } from '.././groceries-data.service';
import { InputDialogueService } from '.././input-dialogue.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery List App";

  constructor(public navCtrl: NavController, public toastController: ToastController, public alertController: AlertController, public dataSvc: GroceriesDataService, public inputSvc: InputDialogueService) {}

  loadItems() {
    return this.dataSvc.getItems();
  }

  async removeItem(item, index) {
      console.log("Remove Item - ", item, index);
      const toast = await this.toastController.create({
        message: 'Removing Item - ' + index + " " + item.name,
        duration: 3000,
        // position: 'bottom',
      });
      toast.present();

      this.dataSvc.removeItem(index);
    }

  async editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = await this.toastController.create({
      message: 'Editing Item - ' + index + " " + item.name,
      duration: 3000,
      // position: 'bottom',
    });
    toast.present();
    this.inputSvc.showPrompt(item, index);
    }

  addItem() {
    console.log("Adding Item");
    this.inputSvc.showPrompt();
  }

}
