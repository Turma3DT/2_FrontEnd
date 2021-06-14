import React from 'react';
import estilos from './index.module.css';
import IconeVelocidade from '../../../Assets/IconeVelocidade';
import useMedia from '../../../Hooks/useMedia';
import { useSelector } from 'react-redux';

const VelocidadeHeader = () => {
    const { dados } = useSelector((state) => state.status);
    const isMobile = useMedia("(max-width: 660px)");

    return (
        <p className={estilos.VelocidadeHeader}>
            <IconeVelocidade />

            { !isMobile && <span>Velocidade</span> }

            { dados.velocidade }
        </p>
    );
};

export default VelocidadeHeader;
