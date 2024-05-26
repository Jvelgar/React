import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas FirstAPP', () => { 
    // test('debe de hacer match con el snapshot', () => { 
    //     const title = "Hola, soy Jorge";
    //     const {container} = render(<FirstApp title={title}/>)
    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el título en un H1', () => { 

        const title = 'Hola, Soy Jorge';
        const {container, getByText} = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTextId('test-title').innerHTML).toContain(title);

    });


    test('debe de mostrar un subtitulo enviado por props', () => { 

        const title = 'Hola, Soy Jorge';
        const subTitle = 'Hola, Soy un Subtitulo';
        const {getAllByText} = render(
            <FirstApp 
                title={title}
                subTitle={subTitle}
            />
        );
        expect(getAllByText(subTitle).length).toBe(2);

    });

})