import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VmService, VirtualMachine } from '../../core/services/vm.service';

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

  constructor(private router: Router, private vmService: VmService) {}

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

    const novaVM: VirtualMachine = {
      displayName: this.displayName,
      cpu: this.cpu,
      memory: this.memory,
      status: 'RUNNING'
    };

    this.vmService.createVM(novaVM).subscribe({
      next: () => {
        alert('Máquina virtual cadastrada com sucesso!');
        this.router.navigate(['/vms']);
      },
      error: err => {
        alert('Erro ao cadastrar VM: ' + err.error?.message || 'erro desconhecido');
      }
    });
  }
}
