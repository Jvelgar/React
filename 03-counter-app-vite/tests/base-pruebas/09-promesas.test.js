import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHoroeByIdAsync debe de retornar un Héroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id:1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });
    });

    test('getHoroeByIdAsync debe obtener un error si no existe', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    })
});