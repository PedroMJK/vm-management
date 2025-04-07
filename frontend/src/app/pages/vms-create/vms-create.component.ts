import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vms-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vms-create.component.html',
  styleUrls: ['./vms-create.component.scss']
})
export class VmsCreateComponent {

  displayName: string = '';
  memory: number | null = null;
  cpu: number | null = null;

  constructor(private router: Router) {}

  voltar(): void {
    this.router.navigate(['/vms']);
  }

  cadastrar(): void {
    if (!this.displayName || this.displayName.length < 5) {
      alert('O nome da VM deve ter pelo menos 5 caracteres.');
      return;
    }

    if (this.memory === null || this.memory <= 0) {
      alert('Informe a memória em MB (número positivo).');
      return;
    }

    if (this.cpu === null || !Number.isInteger(this.cpu) || this.cpu <= 0) {
      alert('Informe um número inteiro positivo para o tamanho da CPU.');
      return;
    }

    const stored = localStorage.getItem('vms');
    const vms = stored ? JSON.parse(stored) : [];

    if (vms.length >= 5) {
      alert('Limite máximo de 5 máquinas virtuais atingido.');
      return;
    }

    const novaVM = {
      displayName: this.displayName,
      cpu: this.cpu,
      memory: this.memory,
      status: 'RUNNING',
    };

    vms.push(novaVM);
    localStorage.setItem('vms', JSON.stringify(vms));

    alert('Máquina virtual cadastrada com sucesso!');
    this.router.navigate(['/vms']);
  }
}
