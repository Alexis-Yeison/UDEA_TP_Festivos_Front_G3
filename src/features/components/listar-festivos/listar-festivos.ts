import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReferenciasMaterialModule } from '../../../shared/modules/referencias-material.module';
import { FestivoEntity } from '../../../shared/entities/festivoEntity';
import { FestivoService } from '../../../core/services/festivo-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-festivos',
  standalone: true,
  imports: [
    FormsModule,
    NgxDatatableModule,
    ReferenciasMaterialModule,
    RouterModule
  ],
  templateUrl: './listar-festivos.html',
  styleUrl: './listar-festivos.css'
})
export class ListarFestivos {

  year: number = new Date().getFullYear();
  festivos: FestivoEntity[] = [];
  columnas = [
    { prop: 'fecha', name: 'Fecha' },
    { prop: 'nombre', name: 'Nombre' }
  ];
  modoColumna = ColumnMode;

  constructor(private festivoServicio: FestivoService) { }

  listarFestivos() {
    if (!this.year || this.year < 1000 || this.year > 9999) {
      alert("Ingrese un año válido");
      return;
    }

    this

    this.festivoServicio.listar(this.year).subscribe({
      next: (datos) => {
        this.festivos = datos;
      },
      error: () => {
        alert("Error al obtener los festivos");
      }
    });
  }
}
