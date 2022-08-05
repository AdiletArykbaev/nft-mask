import React, { memo, useRef } from 'react';

import Modal from "./UI/Modal";

import { formElems, formType, formColor } from "../utils/formElems";

const ModalForm = ({
    setOpen, open, notifyModal
}) => {

    const formRef = useRef(null);

    //Отправка данных, аргументом получает объект {input.name или textarea.name: input.value}
    const fetchData = async (res) => {
        try {
            //код

            
            notifyModal();
            setOpen(false)
            formRef.current.reset();
        } catch (error) {
            //код с обработкаой ошибок 
        }
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const res = Object.keys(form.elements)
            .reduce((obj, field) => {
                if (isNaN(field)) {
                    console.dir(formRef.current.elements[field])
                    obj[field] = formRef.current.elements[field].value;
                }
                return obj;
            }, {});

        fetchData(res);
    }   

    return (
        <Modal 
            callback={() => formRef.current.reset()}
            setOpen={setOpen} 
            open={open} 
            className='form'
        >
            <>
            <div className="form">
                <div className="form__head">
                    <h2 className="form__title">This is the Mandelbrot Masks whitelist application form.</h2>
                    <p className="form__subtitle">We look for those who really want to be in our community. Please fill in the form below so
                    we can learn more about you. We may additionally interview some of the candidates.</p>
                </div>
                <form
                    onSubmit={(e) => handlerSubmit(e)} 
                    ref={formRef} 
                    className="form__body"
                >
                    {
                        formElems.map((item) => (

                            <label
                                key={item.name} 
                                className={`form__label ${(item.color && item.color === formColor.GREEN) ? 'form__label--green' : ''}`}
                            >
                                <p className="form__label-info">{item.title}</p>
                                {
                                    (item.type == formType.INPUT) ? (
                                        <input 
                                            className={`form__input`} 
                                            type={item.type} 
                                            name={item.name} 
                                            required={item.require}    
                                        />
                                    ) : (
                                        <textarea 
                                            className="form__textarea" 
                                            name={item.name}
                                            required={item.require} 
                                        >
                                        </textarea>

                                    )
                                }
                            </label>

                                
                            
                        ))
                    }
                    <p className="form__sign">by submitting this form you agree and accept that we collect your information for future
                    reference without
                    sharing it with a third party</p>
                    <div className="form__btn-wrap">
                     <button className="form__btn btn btn btn--green">SUBMIT</button>
                    </div>
                </form>
                </div>

            </>
        </Modal>

    );
};

export default memo(ModalForm);