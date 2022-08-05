
import React, { memo, useRef } from 'react';
import { gender } from '../utils/gendertForm';
import Modal from './UI/Modal';

const ModalGender = ({
    open,
    setOpen 
}) => {
    
    const formRef = useRef(null);
    
    //Отправка данных, аргументом получает массив [{
        //token: string, male: boolean, famale: boolean 
    // }]
    const fetchData = async (res) => {
        console.log(res)
        try {
            //код

            
        } catch (error) {
            //код с обработкаой ошибок 
        }
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const res = [];
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            if(input.checked){
                res.push({
                    token: input.name,
                    male: input.dataset.gender === 'male' ? true : false,
                    famale: input.dataset.gender === 'famale' ? true : false,
                })
                 
            } 
        })
        console.dir(form)

        fetchData(res);
    }   



    return (
        <Modal open={open} setOpen={setOpen} className='gender'>
            <form onSubmit={handlerSubmit} ref={formRef} className="gender__body">
               <p className="gender__title">Choose you NTF's gender. This is how it will display on other platforms</p>
                <div className="gender__content">
                    {
                        gender.map(item => (
                            <div key={item.token} className="gender__item">
                                <h3>{item.token}</h3>
                                <div className="gender-radio">
                                    <p className="gender-radio__text">male</p>
                                        <div className="gender-radio__check" >
                                            <input type="radio" data-gender='male' id={`${item.token}-male`} name={`${item.token}`} defaultChecked={item.male} />
                                            <label htmlFor={`${item.token}-male`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
                                                </svg>
                                            </label>
                                    </div>
                                </div>
                                <div className="gender-radio">
                                    <p className="gender-radio__text">female</p>
                                    <div className="gender-radio__check" >
                                        <input type="radio" data-gender='famale' id={`${item.token}-female`} name={`${item.token}`} defaultChecked={item.famale}/>
                                        <label htmlFor={`${item.token}-female`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>


                        ))
                    }
                </div>
                <button className="btn gender__btn btn--green">OK</button>
            </form>
        </Modal>
    );
};

export default memo(ModalGender);