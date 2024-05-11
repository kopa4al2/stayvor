import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reduxStore";
import { closeModal } from "../../store/features/modalSlice";
import './styles.css';

function Modal() {
    const dispatch = useDispatch();
    const { isOpen, children, title } = useSelector((state: RootState) => state.modalState);

    return (
        <div className={isOpen ? 'modal-wrapper' : 'modal-wrapper closed'}>
            <div className="modal-inner">
                <div className="top-row">
                    <div className='title'>{title}</div>
                    <div className="close" onClick={() => dispatch(closeModal())}>&times;</div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;