

import React from 'react';

const MintIcon = ({
    setMintOpen,  setNotifyMint
}) => {
 
    const handlerOnClick = () => {
        //проверка начались ли продажи
        if (false) {
            setMintOpen(prev => !prev)
        } else {
            setNotifyMint()
        }
    }

    return (
        <button 
            onClick={handlerOnClick}
            className="hero__btn btn btn--green modal-btn" 
            data-modal="mint-form"
        >
            <span>mint</span>
        </button>
    );
};

export default MintIcon;