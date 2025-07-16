import { Routes } from '@angular/router';
import { VerificarFestivo } from '../features/components/verificar-festivo/verificar-festivo';
import { ListarFestivos } from '../features/components/listar-festivos/listar-festivos';

export const routes: Routes = [
    { path: "", redirectTo: "verificar-festivo", pathMatch: "full"},
    { path: "verificar-festivo", component:VerificarFestivo},
    { path: "listar-festivos", component:ListarFestivos}
];
