import { render, screen } from "@testing-library/react";
import {GifCard} from '../../src/components/GifCard';


describe('Pruebas en <GifCard />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot', () => {

        const {container} = render ( <GifCard  title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render ( <GifCard  title={title} url={url} />);
        // screen.debug();

        //tratar de tomar la imagen y preguntar si el src de la imagen es el mismo que el de la const url
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

//asegurar que en el componente renderizado exista el título mostrado como un texto
test('Debe de mostrar el título en el componente ', () => {

    render ( <GifCard  title={title} url={url} />);
    expect( screen.getByText( title )).toBeTruthy();

});


});
