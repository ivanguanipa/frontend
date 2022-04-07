import {
    listarPasaportes, 
    mostrarPasaporte,
    eliminarPasaporte,
    eliminarPasaportesAsync,
    agregarPasaportesAsync,
    listarPasaportesAsync,
    mostrarPasaporteAsync
  } from './PasaporteAcciones';
  import {
    AGREGAR_PASAPORTE,
    ELIMINAR_PASAPORTE,
    LISTAR_PASAPORTES,
    MOSTRAR_PASAPORTE,
  } from './PasaporteTiposAcciones';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { PasaporteRepositorio } from 'app/core/api/pasaportes.repositorio';
import { axiosIntance } from 'app/core/config/AxiosConfig';

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

      it('eliminar Pasaporte funcion', () => {
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

      
      it('eliminar Pasaporte async funcion', async (done) => {

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


        
        spyOn(axiosIntance, 'delete')
        var promise = Promise.resolve('result');
        spyOn(PasaporteRepositorio, 'eliminarPasaporte').and.returnValue(promise)
        
        eliminarPasaportesAsync(data)(ELIMINAR_PASAPORTE)
        expect(PasaporteRepositorio.eliminarPasaporte).toHaveBeenCalled()
        done()
      })
      
      it('agregar Pasaporte funcion', async (done) => {

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
        
        spyOn(axiosIntance, 'post')
        var promise = Promise.resolve('result');
        spyOn(PasaporteRepositorio, 'agregarPasaporte').and.returnValue(promise)
        
        agregarPasaportesAsync(data)(AGREGAR_PASAPORTE)
        expect(PasaporteRepositorio.agregarPasaporte).toHaveBeenCalled()
        done()
      })
      
      it('listar Pasaporte async funcion', async (done) => {
        
        spyOn(axiosIntance, 'get')
        var promise = Promise.resolve('result');
        spyOn(PasaporteRepositorio, 'consultarPorPagina').and.returnValue(promise)
        
        listarPasaportesAsync(1)(LISTAR_PASAPORTES)
        expect(PasaporteRepositorio.consultarPorPagina).toHaveBeenCalled()
        done()
      })
      
      it('mostrar Pasaporte async funcion', async (done) => {
        
        spyOn(axiosIntance, 'get')
        var promise = Promise.resolve('result');
        spyOn(PasaporteRepositorio, 'mostrarPasaporte').and.returnValue(promise)
        
        mostrarPasaporteAsync("1",jest.fn())(MOSTRAR_PASAPORTE)
        expect(PasaporteRepositorio.mostrarPasaporte).toHaveBeenCalled()
        done()
      })

  });