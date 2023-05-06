import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent {
  alumnos: any = [
    'Carlos',
    'Ximena',
    'Alberto',
    'Eduardo',
    'Baraba',
    'Georgina',
    'Kevin',
  ];

  constructor(private actionSheetController: ActionSheetController) {}

  async eliminarAlumno(alumno: string) {
    const actionSheet = await this.actionSheetController.create({
      header: '¿Estás seguro de que quieres eliminar a este alumno?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            const index = this.alumnos.indexOf(alumno);
            if (index > -1) {
              this.alumnos.splice(index, 1);
            }
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
}

