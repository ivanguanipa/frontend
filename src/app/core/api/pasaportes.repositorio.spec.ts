import {PasaporteRepositorio, limit} from 'app/core/api/pasaportes.repositorio';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { axiosIntance } from '../config/AxiosConfig';


describe('Pasaporte Repositorio',()=>{

    it('debe construir el string para hacer el limit de los registros',()=>{    
        const count =1;
        const p =1;        
        expect(limit(count,p)).toStrictEqual(`limit=${count}&offset=${p ? p * count : 0}`);
    });
    it('debe consultar pasaportes Por Pagina',done =>{    
        const data = [{
            "id": 1,
            "fullname": "Ivan Guanipa",
            "address": "La Vega",
            "amount": 20,
            "birthdate": "1981-05-06T00:00:00.000Z",
            "created_at": "2022-04-01T13:36:48.000Z",
            "deleted_at": "2022-04-01T20:46:15.000Z",
            "document_id": 14906880,
            "application_date": "2022-01-05T00:00:00.000Z",
            "appointment_date": "2022-01-06T00:00:00.000Z"
          }];
          
        spyOn(axiosIntance, 'get').and.returnValue(data);
        const res = PasaporteRepositorio.consultarPorPagina(1)
        expect(res).toStrictEqual(data);
        done()
    });

    it('debe mostrar Pasaporte',done =>{    
        const data = [{
            "id": 1,
            "fullname": "Ivan Guanipa",
            "address": "La Vega",
            "amount": 20,
            "birthdate": "1981-05-06T00:00:00.000Z",
            "created_at": "2022-04-01T13:36:48.000Z",
            "deleted_at": "2022-04-01T20:46:15.000Z",
            "document_id": 14906880,
            "application_date": "2022-01-05T00:00:00.000Z",
            "appointment_date": "2022-01-06T00:00:00.000Z"
          }];
          
        spyOn(axiosIntance, 'get').and.returnValue(data);
        const res = PasaporteRepositorio.mostrarPasaporte('1')
        expect(res).toStrictEqual(data);
        done()
    });

    it('debe eliminar Pasaporte',done =>{    
        spyOn(axiosIntance, 'delete').and.returnValue(true);
        const res = PasaporteRepositorio.eliminarPasaporte('1')
        expect(res).toStrictEqual(true);
        done()
    });

    it('debe agregar Pasaporte',done =>{    
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

        spyOn(axiosIntance, 'post').and.returnValue(data);
        const res = PasaporteRepositorio.agregarPasaporte(data)
        expect(res).toStrictEqual(data);
        done()
    });

});