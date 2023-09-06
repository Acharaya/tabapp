import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController:AlertController){}
  async presentAlert() {
    const alert = await this.alertController.create({
     
      header: 'Myclass',
      
      message: 'Enter',
      buttons:[
        {
        text: 'login to myclass',
        role: 'norole',
        handler: () => {
        //console.log("Working");
      
        window.open("https://myclass.lpu.in/"); //external link
        //window.open("/"); //root page (home page)
        //window.open("newpage1"); //internal link
        }}, {
          text: 'new alert',
          role: 'norole',
          handler: () => {
              this.Alert2();
          }}],
      inputs: [
        {
          name: 'enter your names',
          type: 'text',
          placeholder: 'Enter name',
        
        },{
          name: 'enter your names',
          type: 'text',
          placeholder: 'Enter name',
        
        }],
    });
    alert.present();
}


async Alert2() {
  const alert = await this.alertController.create({
   
    header: 'alert2',
    
    message: 'Enter',
    buttons:[
      {
      text: 'move back',
      role: 'norole',
      handler: () => {
      //console.log("Working");
    
      window.open("https://myclass.lpu.in/"); //external link
      //window.open("/"); //root page (home page)
      //window.open("newpage1"); //internal link
      }}, {
        text: 'new alert',
        role: 'norole',
        handler: () => {
            this.presentAlert();
        }}],
    inputs: [
      {
        name: 'enter your names',
        type: 'text',
        placeholder: 'Enter name',
      
      },{
        name: 'enter your names',
        type: 'text',
        placeholder: 'Enter name',
      
      }],
  });
  alert.present();
}
  
}
