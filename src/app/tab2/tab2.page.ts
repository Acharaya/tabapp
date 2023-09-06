import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public actionSheetCtrl: ActionSheetController) {} 
  async showActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
    buttons: [
    {
    text: 'Whatsapp',
    icon:'logo-whatsapp',
    
    handler: () => {
    console.log('whataspp clicked');
    }
    },
    {
    text: 'Twitter',
    icon:'logo-twitter',
    
    handler: () => {
    console.log('share bluetooth');
    }
    },
    {
    text: 'facebook',
    icon:'logo-facebook',
    handler: () => {
    window.open("https://www.facebook.com/");
    }
    }
    ]
    });
    await actionSheet.present();
    }

}
