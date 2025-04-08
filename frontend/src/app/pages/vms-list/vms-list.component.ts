import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

interface VirtualMachine {
  displayName: string;
  cpu: number;
  memory: number;
  status: 'RUNNING' | 'PAUSED' | 'STOP';
}

@Component({
  selector: 'app-vms-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vms-list.component.html',
  styleUrls: ['./vms-list.component.scss']
})
export class VmsListComponent {
  vms: VirtualMachine[] = [];

  constructor(private router: Router) {
    this.loadVMs();
  }

  loadVMs(): void {
    const savedVMs = localStorage.getItem('vms');
    if (savedVMs) {
      this.vms = JSON.parse(savedVMs);
    } else {
      this.vms = [
        { displayName: 'vm1', cpu: 2, memory: 1024, status: 'RUNNING' },
        { displayName: 'vm2', cpu: 1, memory: 512, status: 'PAUSED' },
        { displayName: 'vm3', cpu: 4, memory: 2048, status: 'STOP' }
      ];
      this.saveVMs();
    }
  }

  saveVMs(): void {
    localStorage.setItem('vms', JSON.stringify(this.vms));
  }

  startVM(vm: VirtualMachine): void {
    if (vm.status === 'STOP' || vm.status === 'PAUSED') {
      vm.status = 'RUNNING';
      this.saveVMs();
      alert(`${vm.displayName} iniciada com sucesso.`);
    }
  }

  pauseVM(vm: VirtualMachine): void {
    if (vm.status === 'RUNNING') {
      vm.status = 'PAUSED';
      this.saveVMs();
      alert(`${vm.displayName} pausada com sucesso.`);
    }
  }

  stopVM(vm: VirtualMachine): void {
    if (vm.status === 'RUNNING' || vm.status === 'PAUSED') {
      vm.status = 'STOP';
      this.saveVMs();
      alert(`${vm.displayName} parada com sucesso.`);
    }
  }

  deleteVM(vm: VirtualMachine): void {
    const vmName = vm.displayName;
    if (confirm(`Tem certeza que deseja excluir a VM ${vmName}?`)) {
      this.vms = this.vms.filter(v => v.displayName !== vm.displayName);
      this.saveVMs();
      alert(`${vmName} foi removida.`);
    }
  }

  goToCreate(): void {
    this.router.navigate(['/vms/create']);
  }
}
