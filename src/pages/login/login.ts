import { UsuarioServiceProvider } from './../../providers/usuario-service/usuario-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email : string = 'joao@alura.com.br';
  senha : string = 'alura123';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl : AlertController,
    private _usuarioService : UsuarioServiceProvider)
  {
  }

  login() {
    console.log(this.email, this.senha);
    this._usuarioService.efetuaLogin(this.email, this.senha)
      .subscribe(
        (usuario)=> {
          console.log(usuario);
          this.navCtrl.setRoot(HomePage);
        },
        () => {
          this._alertCtrl.create({
            title : 'Falha no login',
            subTitle : 'Email e/ou senha incorretos.',
            buttons : ['ok']
          }).present();
        }
      ) 
  }

}
