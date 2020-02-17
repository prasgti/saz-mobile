import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment as env } from './../../../environments/environment';
import { AlertTemplateProvider } from './../../providers';
import { TermsPage } from './../modals/terms/terms.page';
import { ChangePasswordPage } from './../modals/change-password/change-password.page';
import { AuthProvider } from './../../providers/auth.provider';
import { LoginRegistratoPage } from '../login-registrato/login-registrato.page';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  /**
   * Versão atual do app
   */
  appVersion = env.app_version;

  constructor(
    public alertController: AlertController,
    public alertTemplateProvider: AlertTemplateProvider,
    private router: Router,
    public modalController: ModalController,
    public authProvider: AuthProvider
  ) { }

  ngOnInit() {
  }

  async loginRegistrato() {
    this.router.navigate(['/login-registrato']);
  }

  async changePassword() {
    const modal = await this.modalController.create({
      component: ChangePasswordPage
    });
    modal.present();
  }

  async openTerms() {
    const modal = await this.modalController.create({
      component: TermsPage,
      componentProps: {
        internal: true
      }
    });
    modal.present();
  }

  async logout() {
    const alert = await this.alertController.create({
      header: '',
      message: this.alertTemplateProvider.getTemplate('logout', 'Você tem certeza que deseja sair do app?'),
      cssClass: 'alert-custom',
      mode: 'md',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'default half'
        }, {
          text: 'Sim',
          cssClass: 'primary half',
          handler: async() => {
            await this.authProvider.clearAuth();
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }
}
