import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-financial-pay',
  templateUrl: './financial-pay.page.html',
  styleUrls: ['./financial-pay.page.scss'],
})
export class FinancialPayPage implements OnInit {
  lista: { nome: string; mes: string; valor: number; }[];

  constructor(public navCtrl: NavController) {
   }

  ngOnInit() 
  
  { this.lista=[
    {nome:'PF',mes:'Janeiro',valor:8.987},
    {nome:'CGU',mes:'Fevereiro',valor:22.554},
    {nome:'CGU',mes:'Março',valor:23.351}
  ];

  }

}

