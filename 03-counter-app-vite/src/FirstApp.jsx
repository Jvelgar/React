import PropTypes from 'prop-types';

const newMesaje = 'Soy Jorge';

const getResult = (a,b) =>  {
    return a + b;
};


export const FirstApp = ({title, subTitle}) =>{
    return (
        <>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <h3>{newMesaje}</h3>
            <span>Soy programador y tengo </span>
            <span>{getResult(20, 10)} años</span>
        </>
    );
} 


FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title: 'No hay Titulos',
    subTitle: 'No hay subtitulo'
}