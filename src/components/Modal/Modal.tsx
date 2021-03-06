import * as React from 'react';
import { FC, ReactNode, useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import './Modal.scss';
import { IoMdCloseCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectmodalReducer } from '../../redux/modalReducer';

const ModalElement = document.getElementById('modal') as HTMLElement;
interface ModalProps {
    children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
    const isOpen = useSelector(selectmodalReducer);

    const dispatch = useDispatch();
    const handleOnClose = () => {
        dispatch(closeModal(false));
    };
    const modalRef = useRef<any>(null); // HTMLDialogElement is deprecated
    // const previousActiveElement = useRef<any>(null);

    useEffect(() => {
        if (!modalRef.current) {
            return;
        }
        const { current: modal } = modalRef;

        if (isOpen.bool) {
            // previousActiveElement.current = document.activeElement;
            modal.showModal();
        } else {
            modal.close();
            // previousActiveElement.current.focus();
        }
    }, [isOpen.bool])

    useEffect(() => {
        const { current: modal } = modalRef;
        const handleCancel = (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            handleOnClose();
        }

        modal.addEventListener('cancel', handleCancel);

        return () => {
            modal.removeEventListener('cancel', handleCancel);
        }
    }, [handleOnClose])

    const handleOutsideClick = (e: { target: any; }) => {
        const { current } = modalRef;

        if (e.target === current) {
            handleOnClose();
        }
    }
    return ReactDOM.createPortal(
        <dialog className="ModalOverlay" ref={modalRef} onClick={handleOutsideClick}>
            <div className="OverlayContent">
                <div className="CloseModal">
                    <IoMdCloseCircle onClick={() => handleOnClose()} />
                </div>
                <div className="MainModalContent">
                    {children}
                </div>
            </div>
        </dialog>,
        ModalElement
    )
}

export default Modal;
