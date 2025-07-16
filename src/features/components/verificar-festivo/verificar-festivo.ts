import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReferenciasMaterialModule } from '../../../shared/modules/referencias-material.module';
import { FestivoService } from '../../../core/services/festivo-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-verificar-festivo',
  imports: [
    FormsModule,
    ReferenciasMaterialModule,
    RouterModule
  ],
  templateUrl: './verificar-festivo.html',
  styleUrl: './verificar-festivo.css'
})
export class VerificarFestivo {

  fechaSeleccionada: string = '';

  constructor(private festivoServicio: FestivoService) { }

  verificarFestivo() {
    if (!this.fechaSeleccionada) {
      alert("Por favor seleccione una fecha");
      return;
    }

    const fecha = new Date(this.fechaSeleccionada);
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    this.festivoServicio.verificar(año, mes, dia).subscribe({
      next: (esFestivo) => {
        alert(esFestivo ? "La fecha escogida es FESTIVO" : "La fecha escogida NO ES FESTIVO");
      },
      error: (err) => {
        alert("Ocurrió un error al verificar la fecha. Revise nuevamente por favor");
      }
    });
  }
}
