import { UsuarioServiceProvider } from './../providers/usuario-service/usuario-service';
import { PerfilPage } from './../pages/perfil/perfil';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { ListaAgendamentosPage } from '../pages/lista-agendamentos/lista-agendamentos';
@Component({
  templateUrl: 'app.html',
  selector : 'myapp'
})
export class MyApp {

  rootPage:any = LoginPage;

  @ViewChild(Nav) public nav : Nav;

  public paginas = [
    {titulo : 'Agendamentos', component : ListaAgendamentosPage, icone : 'calendar' },
    {titulo : 'Perfil', component : PerfilPage, icone : 'person' },
  ]

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private _usuarioService : UsuarioServiceProvider) 
  {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(pagina) {
    this.nav.push(pagina);
  }  

  get usuarioLogado () {
    return this._usuarioService.usuarioLogado();
  }
}

