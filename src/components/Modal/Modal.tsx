import * as React from 'react';
import { FC, useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import './Modal.scss';
import { IoMdCloseCircle } from 'react-icons/io';

const ModalElement = document.getElementById('modal') as HTMLElement;

const Modal: FC = ({ children, isOpen, handleOnClose }: any) => {
    const modalRef = useRef<any>(null);
    const previousActiveElement = useRef<any>(null);

    useEffect(() => {
        if (!modalRef.current) {
            return;
        }
        const { current: modal } = modalRef;

        if (isOpen) {
            // previousActiveElement.current = document.activeElement;
            modal.showModal();
        } else {
            modal.close()
            // previousActiveElement.current.focus();
        }
    }, [isOpen])

    useEffect(() => {
        const { current: modal } = modalRef;
        const handleCancel = (e: any) => {
            e.preventDefault();
            handleOnClose();
        }

        modal.addEventListener('cancel', handleCancel);

        return () => {
            modal.removeEventListener('cancel', handleCancel);
        }
    }, [handleOnClose])

    const handleOutsideClick = (e: any) => {
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
