
import React, { memo, useRef } from 'react';
import Modal from './UI/Modal';

const ModalMint = ({
    setOpen,
    open
}) => {
    const formRef = useRef(null);

    //Отправка данных, аргументом получает объект {ntf: количество}
    const ferchData = async(res) => {
        try {
            //код


            
        } catch (error) {
            //код с обработкаой ошибок 
        }
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        const form = formRef.current;
        const res = {};
        form.elements['quantity-ntf'].forEach(input => {
            if(input.checked) {
                res.ntf = input.value 
            }
        })
    }
    return (
        <Modal open={open} setOpen={setOpen} className='mint-form'>
            <form 
                id='form-mint'
                onSubmit={(e) => handlerSubmit(e)} 
                ref={formRef} 
                className="mint"
            >
                <p className="mint__title">
                    Choose how many NFT's you want to purchase
                </p>
                <div className="mint__btns">
                    <div>
                        <input defaultChecked id="ntf-1" value="1" type="radio" name="quantity-ntf" />
                        <label htmlFor="ntf-1">
                            <span>1 NFT</span>
                        </label>

                    </div>
                    <div>
                        <input id="ntf-2" value="2" type="radio" name="quantity-ntf" />
                        <label htmlFor="ntf-2">
                            <span>2 NFT</span>
                        </label>
                    </div>
                </div>
                <button className="mint__submit btn btn--green" type="submit">MINT</button>
            </form>
        </Modal>
    );
};

export default memo(ModalMint);