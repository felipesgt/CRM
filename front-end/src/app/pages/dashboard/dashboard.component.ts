import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

interface infoCard {
  bgClass: string;
  icon: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  constructor(private breakpointObserver: BreakpointObserver) {

  }

  infoCards: infoCard[] = [
    {
      bgClass: 'user-registration',
      icon: 'account_circle',
      title: 'leads',
      subtitle: '68',
    },

    {
      bgClass: 'new-order',
      icon: 'add_shopping_cart',
      title: 'Encomendas',
      subtitle: '49',
    },
    {
      bgClass: 'bounce-rate',
      icon: 'assessment',
      title: 'Gastos',
      subtitle: '26%  ',
    },
    {
      bgClass: 'membership',
      icon: 'card_membership',
      title: 'Arrecadação',
      subtitle: '32%',
    }
  ];
  lineChartData: Array<number[]> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  lineChartLabels: Array<string> = ['Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  lineChartType = 'line';
  lineChartOptions: any = {};

  doughnutChartLabels: Label[] = ['Receita', 'Lucro', 'Caixa'];

  doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];

  doughnutChartType: ChartType = 'doughnut';
  public lineChartColors: Color[] = [
    {
      borderColor: '#BACAFE',
      backgroundColor: '#097BFC',
    },
  ];
}
