/******************************************************************************/
/*                                  TimeCTRL                                  */
/*                             Raphael R. Gusmao                              */
/*                                                                            */
/*                                    Home                                    */
/******************************************************************************/

import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ToastController } from "ionic-angular";

/******************************************************************************/
/* HomePage                                                                   */
/******************************************************************************/
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  static clocktime: string;
  static time: number;
  static speed: number;
  static delay: any;

  /****************************************************************************/
  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    this.speed = 10;
    this.reset();
    this.loop(false);
  }

  /****************************************************************************/
  reset() {
    let now = new Date();
    this.time = now.getTime();
    this.clocktime = now.toLocaleTimeString();
  }

  /****************************************************************************/
  async loop(wait: boolean) {
    let delay_time = wait? 1000/Math.abs(this.speed/10) : 0;

    await this.sleep(delay_time);

    if      (this.speed > 0) this.time += 1000;
    else if (this.speed < 0) this.time -= 1000;

    this.clocktime = new Date(this.time).toLocaleTimeString();
    this.loop(true);
  }

  /****************************************************************************/
  sleep(milliseconds: number) {
    return new Promise(resolve => this.delay = setTimeout(resolve, milliseconds));
  }

  /****************************************************************************/
  change() {
    clearTimeout(this.delay);
    this.loop(false);
  }

  /****************************************************************************/
  show_toast() {
    let toast = this.toastCtrl.create({
      message: "Created by Raphael R. Gusmão",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }
}

/******************************************************************************/
