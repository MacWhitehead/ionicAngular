import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
const { LocalNotifications } = Plugins;


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  location: any;

  async getLocation() {
    this.location = await Geolocation.getCurrentPosition();
    console.log(location)
  }

  async notification() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Hello!', 
          body: 'This is a notification',
          id: 1,
          // schedule: { at: new Date(Date.now() + 1000) }, 
          // sound: null, 
          // attachments: null, 
          // actionTypeId: '', 
          // extra: null
        }
      ]
    })
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter')
  }

  constructor(public alertController: AlertController, public router: Router) {}

  navigate() {
    this.router.navigate([`/tabs/tab2`])
  }

  ngOnInit() {
    document.querySelector('#myButton').addEventListener('click', this.presentAlert);
    LocalNotifications.requestPermission()
  }

  ngOnDestroy() {
    document.querySelector('#myButton').removeEventListener('click', this.presentAlert)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
