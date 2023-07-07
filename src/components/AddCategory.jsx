import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleOnInputChange = (ev) => {
        setInputValue(ev.target.value);
    }

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }


    return (

        <form   onSubmit={ handleOnSubmit }
                className='form-gif'
                aria-label='form'>
            <input
                className='input-gif'
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ handleOnInputChange }
            />
        </form>

    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}