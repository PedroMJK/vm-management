import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

    login(email: string, password: string): boolean {
      // Para simular credenciais válidas
      if (email === 'admin@vm.com' && password === '123456') {
        localStorage.setItem('authToken', 'fake-token');
        return true;
      }
      return false;
    }

    logout(): void {
      localStorage.removeItem('authToken');
      this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
      return !!localStorage.getItem('authToken');
    }
   }

