import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carro } from '../home/home';

/**
 * Generated class for the EscolhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {

  carro: Carro;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = navParams.get('carroSelecionado');

    this.carro.fotos = this.carro.fotos.map((foto)=>foto.replace('localhost','192.168.56.101'));
    console.log(this.carro);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscolhaPage');
  }

}
