import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nfControl: any = {
    error: false,
    empty: false,
    loading: true,
    data: []
  };

  constructor(
    public modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  featureFuture() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({
          title: 'Nada por aqui (ainda)!',
          message: 'Funcionalidade não liberada para o público.',
          image: 'feature-future2',
          router: '/tabs',
          action: 'Voltar'
        })
      }
    };
    this.router.navigate(['/financial-register-status'], navigationExtras);
  }

  featureInvestimento() {
    this.router.navigate(['/tabs/dashboard']);
  }

 // featureSaz() {
 //   this.router.navigate(['/saz']);
 // }

  featureFinancialPay() {
    this.router.navigate(['/financial-pay']);
  }

  featureLoan() {
    this.router.navigate(['/loan']);
  }

  featureReduzirDividas() {
    this.router.navigate(['/reduzir-dividas']);
  }

  featureOpenBanking() {
    this.router.navigate(['/open-banking-choose']);
  }
}
