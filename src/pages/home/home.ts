import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http';
import { CarrosServiceProvider } from '../../providers/carros-service/carros-service';
import { NavLifecyle } from '../../utils/ionic/nav/nav-lifecycle';
import { EscolhaPage } from '../escolha/escolha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecyle {

  carros : Carro[];

  constructor(
    public navCtrl: NavController,
    private _carroService : CarrosServiceProvider,
    private _loadingCtrl : LoadingController,
    private _alertCtrl : AlertController) {

  }

  ionViewDidLoad () {
    let loading = this._loadingCtrl.create({content : 'Carregando carros...'});
    loading.present();

      this._carroService.lista().subscribe(
        (carros)=>{
          this.carros=carros;
          loading.dismiss();
        },
        (err : HttpErrorResponse)=>{
          loading.dismiss();
          this._alertCtrl.create({
              title : 'Falha na conexão',
              subTitle : 'Não foi possível carregar a lista. Tente novamente mais tarde.',
              buttons : [{text : 'OK'}]
            }
          ).present();
        }  
      );
  
  }

  selecionaCarro(carro : Carro) {
    this.navCtrl.push(EscolhaPage, {carroSelecionado : carro});
  }

}

export interface Carro {
  nome : string;
  preco : number;
  fotos : string[];
}