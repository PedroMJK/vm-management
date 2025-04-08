import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VirtualMachine {
  displayName: string;
  cpu: number;
  memory: number;
  status: 'RUNNING' | 'PAUSED' | 'STOP';
}

@Injectable({
  providedIn: 'root'
})
export class VmService {
  private apiUrl = 'http://localhost:3000/vms'; 

  constructor(private http: HttpClient) {}

  createVM(vm: VirtualMachine): Observable<VirtualMachine> {
    return this.http.post<VirtualMachine>(this.apiUrl, vm);
  }

  getVMs(): Observable<VirtualMachine[]> {
    return this.http.get<VirtualMachine[]>(this.apiUrl);
  }

  deleteVM(displayName: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${displayName}`);
  }
}
