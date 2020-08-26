import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {


  constructor() { }

  /**
   * getListClients
   */
  public getListaClientes() {
    return [
      { nombre: 'leo messi junior',dni:'4343434', direccion: 'las lomas',telefono: '910937475',deuda: true,email:'jaime@gmail.com'},
      { nombre: 'paul pogba',dni:'4463636', direccion: 'italia calle morelia',telefono: '93643634',deuda: true,email:'jaime@gmail.com'},
      { nombre: 'kiliam mbape junior',dni:'4363634', direccion: 'españa plaza principal',telefono: '91466464',deuda: true,email:'jaime@gmail.com'},
      { nombre: 'pulo dybala',dni:'3636664', direccion: 'peru',telefono: '96858555',deuda: true,email:'jaime@gmail.com'},
      { nombre: 'kevin dbruyen',dni:'8577734', direccion: 'brasil-sau paulo',telefono: '9636363',deuda: true,email:'jaime@gmail.com'},
      { nombre: 'edden hazard',dni:'777884', direccion: 'chile',telefono: '923525326',deuda: true,email:'jaime@gmail.com'}
    ];
  }
  /**
   * getListMascotas
   */
  public getListaMascotas() {
    return [
      { id_historia:'123', duenio:'cristiano ronaldo', nombre: 'messi',especie:'canino', raza:'macho', sexo:'macho', fecha_nac:'12/04/2010'},
      { id_historia:'124', duenio:'alex el leon', nombre: 'pogba',especie:'canino', raza:'macho', sexo:'macho', fecha_nac:'12/04/2010'},
      { id_historia:'125', duenio:'marcus rashford', nombre: 'kilia',especie:'canino', raza:'macho', sexo:'macho', fecha_nac:'12/04/2010'},
      { id_historia:'126', duenio:'cris', nombre: 'dybal',especie:'canino', raza:'macho', sexo:'macho', fecha_nac:'12/04/2010'},
      { id_historia:'127', duenio:'aliana ', nombre: 'dbruy',especie:'canino', raza:'macho', sexo:'macho', fecha_nac:'12/04/2010'},
      { id_historia:'128', duenio:'caty ', nombre: 'hazar',especie:'canino', raza:'macho', sexo:'macho', fecha_nac:'12/04/2010'}
    ];
  }
}
