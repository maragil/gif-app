import PropTypes from 'prop-types';

export const GifCard = ({ title, url, id }) => {

    return (
        <div className="card">
            <img    src={ url }
                    alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifCard.PropTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
