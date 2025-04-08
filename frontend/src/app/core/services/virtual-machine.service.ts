import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VirtualMachine {
  id?: number;
  name: string;
  status: string;
  cpuCores: number;
  ramGB: number;
  diskGB: number;
}

@Injectable({
  providedIn: 'root',
})
export class VirtualMachineService {
  private apiUrl = 'http://localhost:8080/api/vms';

  constructor(private http: HttpClient) {}

  getAll(): Observable<VirtualMachine[]> {
    return this.http.get<VirtualMachine[]>(this.apiUrl);
  }

  getById(id: number): Observable<VirtualMachine> {
    return this.http.get<VirtualMachine>(`${this.apiUrl}/${id}`);
  }

  create(vm: VirtualMachine): Observable<VirtualMachine> {
    return this.http.post<VirtualMachine>(this.apiUrl, vm);
  }

  update(id: number, vm: VirtualMachine): Observable<VirtualMachine> {
    return this.http.put<VirtualMachine>(`${this.apiUrl}/${id}`, vm);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  startVM(id: number): Observable<VirtualMachine> {
    return this.http.post<VirtualMachine>(`${this.apiUrl}/${id}/start`, {});
  }

  pauseVM(id: number): Observable<VirtualMachine> {
    return this.http.post<VirtualMachine>(`${this.apiUrl}/${id}/pause`, {});
  }

  stopVM(id: number): Observable<VirtualMachine> {
    return this.http.post<VirtualMachine>(`${this.apiUrl}/${id}/stop`, {});
  }
}
