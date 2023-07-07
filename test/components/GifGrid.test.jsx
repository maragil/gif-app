import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Dragon Ball';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid eachCategory={ category }/> )

        expect( screen.getByText( 'Cargando...') );
        expect( screen.getByText( category ) );

        // screen.debug();
    });

    test('Debe mostrar ítems cuando se cargan las imágenes mediante el useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ] //estos datos son inventados para poder hacer las evaluaciones

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid eachCategory={ category }/> )

        expect( screen.getAllByRole('img').length).toBe(2);

    });

})
