import { render } from "@testing-library/react";
import {GifCard} from '../../src/components/GifCard';


describe('Pruebas en <GifCard />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot', () => {

        const {container} = render ( <GifCard  title={title} url={url} />)
        expect(container).toMatchSnapshot();

    });

});
