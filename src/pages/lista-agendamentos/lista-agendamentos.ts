import { AgendamentoService } from './../../providers/agendamento-service/agendamento-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AgendamentoDaoProvider } from './../../providers/agendamento-dao/agendamento-dao';
import { Agendamento } from '../../models/agendamento.model';

@IonicPage()
@Component({
  selector: 'page-lista-agendamentos',
  templateUrl: 'lista-agendamentos.html',
})
export class ListaAgendamentosPage {

  agendamentos : Agendamento[];

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private _alertCtrl : AlertController,
      private _agendamentoDao : AgendamentoDaoProvider,
      private _agendamentoService : AgendamentoService
      ) {
  }

  ionViewDidLoad() {
    this._agendamentoDao.listaTodos()
      .subscribe((agendamentos : Agendamento[])=>{
        this.agendamentos = agendamentos;
      });
  }

  reenvia(agendamento : Agendamento) {

    let alerta = this._alertCtrl.create({
      title : 'Aviso', 
      buttons : [
        {
          text : 'ok', 
          handler : ()=> {
            this.navCtrl.setRoot(ListaAgendamentosPage);
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
          alerta.setSubTitle('Agendamento reenviado!');
          alerta.present();
        },
        (error: Error)=> {
          alerta.setSubTitle(error.message);
          alerta.present();
        }
      )

  }

}