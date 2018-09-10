import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

import { HomePage } from './../home/home';
import { AgendamentoService } from './../../providers/agendamento-service/agendamento-service';
import { Carro } from '../../models/carro.model';
import { Agendamento } from '../../models/agendamento.model';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;

  public nome = '';
  public endereco = '';
  public email = '';
  public data = new Date().toISOString();

  constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private _alertCtrl : AlertController,
        private _storage : Storage,
        private _agendamentoService : AgendamentoService) {

    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  agenda() {
    console.log(this.nome, this.endereco, this.email, this.data);
    let agendamento : Agendamento = {
      nomeCliente : this.nome,
      enderecoCliente : this.endereco,
      emailCliente : this.email,
      modeloCarro : this.carro.nome,
      precoTotal : this.precoTotal,
      data : this.data,
      enviado : false,
      confirmado : false
    };

    let alerta = this._alertCtrl.create({
      title : 'Aviso', 
      buttons : [
        {
          text : 'ok', 
          handler : ()=> {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]

    });

    this._agendamentoService.agenda(agendamento)
      .mergeMap((valor)=> {

        let obser$ = this.salva(agendamento)

        if(valor instanceof Error) {
          throw valor
        }

        return obser$
      })
      .subscribe(
        ()=> {
          alerta.setSubTitle('Agendamento criado com sucesso!');
          alerta.present();
        },
        (error: Error)=> {
          alerta.setSubTitle(error.message);
          alerta.present();
        }
      )
    }
    
    salva(agendamento : Agendamento) : Observable<any> {
      let chave = this.email + this.data.substr(0,10);
      let promise = this._storage.set(chave, agendamento);

      return Observable.fromPromise(promise);
    }


}
