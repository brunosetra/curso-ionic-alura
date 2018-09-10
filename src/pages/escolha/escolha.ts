import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../models/carro.model';
import { Acessorio } from '../../models/acessorio.model';

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

  public carro: Carro;

  private _precoTotal : number ;

  get precoTotal() : number {
    return this._precoTotal;
  }

  public acessorios : Acessorio[] = [
    {nome : 'Freio ABS', preco : 800},
    {nome : 'Ar condicionado', preco : 1000},
    {nome : 'Central Multimidia', preco : 950},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = navParams.get('carroSelecionado');

    this.carro.fotos = this.carro.fotos.map((foto)=>foto.replace('localhost','192.168.56.101'));
    console.log(this.carro);

    this._precoTotal = this.carro.preco;
  }

  ionViewDidLoad() {
  }

  atualizarPrecoTotal(checked : boolean, acessorio : Acessorio) {
    checked ?
      this._precoTotal += acessorio.preco:
      this._precoTotal -= acessorio.preco;
  }

}
