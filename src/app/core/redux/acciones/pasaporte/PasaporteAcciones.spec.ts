import {
    listarPasaportes, 
    mostrarPasaporte,
    eliminarPasaporte,
    eliminarPasaportesAsync
  } from './PasaporteAcciones';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { PasaporteRepositorio } from 'app/core/api/pasaportes.repositorio';

  describe('PasaporteTiposAcciones',()=>{

    it('listarPasaportes funcion', () => {
        const data: Pasaporte[] = [{
            id: 1,
            fullname: "string",
            address: "string",
            birthdate: "string",
            document_id:1,
            application_date: "string",
            appointment_date: "string",
            amount: 1,
        }];
        expect(listarPasaportes(data,2)).toStrictEqual({"cantidadTotalPasaporte": 2, "payload": data, "type": "LISTAR_PASAPORTES"});
      })
  
      it('mostrarPasaporte funcion', () => {
        const data: Pasaporte = {
            id: 1,
            fullname: "string",
            address: "string",
            birthdate: "string",
            document_id:1,
            application_date: "string",
            appointment_date: "string",
            amount: 1,
        };
        expect(mostrarPasaporte(data)).toStrictEqual({"payload": data, "type": "MOSTRAR_PASAPORTE"});
      })

      it('eliminarPasaporte funcion', () => {
        const data: Pasaporte = {
            id: 1,
            fullname: "string",
            address: "string",
            birthdate: "string",
            document_id:1,
            application_date: "string",
            appointment_date: "string",
            amount: 1,
        };
        expect(eliminarPasaporte(data)).toStrictEqual({"payload": data, "type": "ELIMINAR_PASAPORTE"});
      })

      
      xit('eliminarPasaporte funcion', done => {
        const eliminarPasaporte = (dispacth: any)=>{};
        const data: Pasaporte = {
            id: 1,
            fullname: "string",
            address: "string",
            birthdate: "string",
            document_id:1,
            application_date: "string",
            appointment_date: "string",
            amount: 1,
        };
        const spy = spyOn(PasaporteRepositorio, 'eliminarPasaporte');
        eliminarPasaportesAsync(data)('ELIMINAR_PASAPORTE')
        expect(eliminarPasaportesAsync(data)('ELIMINAR_PASAPORTE')).toStrictEqual(eliminarPasaporte);
        done()
      })

  });