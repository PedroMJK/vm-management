import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  // Gráfico de barras
  barChartType: ChartType = 'bar';
  barChartLabels: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];
  barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [10, 20, 30, 15, 25], label: 'Vendas' }
    ]
  };
  barChartOptions: ChartOptions = {
    responsive: true
  };

  // Gráfico de pizza
  pieChartType: ChartType = 'pie';
  pieChartLabels: string[] = ['Produto A', 'Produto B', 'Produto C'];
  pieChartData: ChartData<'pie'> = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };
}
