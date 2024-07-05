import { Routes } from '@angular/router';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';
import { JogosComponent } from './Pages/jogos/jogos.component';

export const routes: Routes = [
    { path: '', component: UsuariosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'jogos', component: JogosComponent },
];
