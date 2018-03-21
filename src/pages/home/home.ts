import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string;

  constructor(private tts: TextToSpeech, public navCtrl: NavController) {

  }

  async sayText():Promise<any>{
    try{
      await this.tts.speak(this.text);
      console.log("Supeeer");
    }
    catch(e){
      console.log(e);
    }
  }

}
