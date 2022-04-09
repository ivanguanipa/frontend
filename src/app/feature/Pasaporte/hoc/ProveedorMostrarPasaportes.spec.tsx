import {ProveedorMostrarPasaportes, mapStateToProps} from './ProveedorMostrarPasaportes';
import { EstadoGeneral } from 'app/core/redux/modelo/pasaporte/EstadoGeneral';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
describe('ProveedorMostrarPasaportes',()=>{

    it('deberia ser un objeto', () => {
        expect(typeof ProveedorMostrarPasaportes).toBe('object');
    });
    it('deberia ser una funcion', () => {
        const pasaporte: Pasaporte = {
            fullname: 'lorem',
            address: 'ipsun',
            birthdate: '2021-01-01',
            documentId: 12345,
            applicationDate: '2021-01-01',
          };
        const pasaportes: Pasaporte[] = [];

        const test: EstadoGeneral={
            pasaportes:{
                pasaportes:[],
                pasaporte:pasaporte,
                cantidadTotalPasaporte:0
            }
        }
        expect(typeof mapStateToProps(test)).toBe('object');
    });

});