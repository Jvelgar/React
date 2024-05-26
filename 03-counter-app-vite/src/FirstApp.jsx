import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) =>{
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <h2>{subTitle}</h2>
            <h2>{subTitle}</h2>
            <h3>{name}</h3>
        </>
    );
} 


FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Jorge Vela',
    title: 'No hay Titulos',
    subTitle: 'No hay subtitulo'
}