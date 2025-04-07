import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-vms-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vms-list.component.html',
  styleUrls: ['./vms-list.component.scss']
})
export class VmsListComponent {
  vms: any[] = [];

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

  startVM(vm: any): void {
    if (vm.status === 'STOP' || vm.status === 'PAUSED') {
      vm.status = 'RUNNING';
      this.saveVMs();
      alert(`${vm.displayName} iniciada com sucesso.`);
    }
  }

  pauseVM(vm: any): void {
    if (vm.status === 'RUNNING') {
      vm.status = 'PAUSED';
      this.saveVMs();
      alert(`${vm.displayName} pausada com sucesso.`);
    }
  }

  stopVM(vm: any): void {
    if (vm.status === 'RUNNING' || vm.status === 'PAUSED') {
      vm.status = 'STOP';
      this.saveVMs();
      alert(`${vm.displayName} parada com sucesso.`);
    }
  }

  deleteVM(index: number): void {
    const vmName = this.vms[index].displayName;
    if (confirm(`Tem certeza que deseja excluir a VM ${vmName}?`)) {
      this.vms.splice(index, 1);
      this.saveVMs();
      alert(`${vmName} foi removida.`);
    }
  }

  goToCreate(): void {
    this.router.navigate(['/vms/create']);
  }
}
