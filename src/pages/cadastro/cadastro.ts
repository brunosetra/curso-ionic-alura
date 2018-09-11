import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

import { HomePage } from './../home/home';
import { AgendamentoService } from './../../providers/agendamento-service/agendamento-service';
import { Carro } from '../../models/carro.model';
import { Agendamento } from '../../models/agendamento.model';
import { AgendamentoDaoProvider } from '../../providers/agendamento-dao/agendamento-dao';

/**
 * Generated class for the Cadas    .forEach((agendamento: Agendamento)=> agendamentos.push(agendamento)) 
      .then(()=> agendamentos);
troPage page.
 *    .forEach((agendamento: Agendamento)=> agendamentos.push(agendamento)) 
      .then(()=> agendamentos);

 * See https://ionicframework.co    .forEach((agendamento: Agendamento)=> agendamentos.push(agendamento)) 
      .then(()=> agendamentos);
m/docs/components/#navigation for more info on
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
        private _agendamentoDao : AgendamentoDaoProvider,
        private _agendamentoService : AgendamentoService) {

    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');
  }

  ionViewDidLoad() {
  }

  agenda() {
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

        let obser$ = this._agendamentoDao.salva(agendamento)

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
    


}
