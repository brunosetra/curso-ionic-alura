import { ListaAgendamentosPageModule } from './../pages/lista-agendamentos/lista-agendamentos.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarrosServiceProvider } from '../providers/carros-service/carros-service';
import { EscolhaPageModule } from '../pages/escolha/escolha.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { AgendamentoService } from '../providers/agendamento-service/agendamento-service';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name : 'aluracar',
      storeName : 'agendamentos',
      driverOrder : ['indexeddb']

    }),
    HttpClientModule,
    EscolhaPageModule,
    CadastroPageModule,
    ListaAgendamentosPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarrosServiceProvider,
    AgendamentoService,
    AgendamentoDaoProvider
  ]
})
export class AppModule {}
