import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import { Backdrop, ModalWindow, CloseModalBtn } from './Modal.styled';

import { AiOutlineClose } from 'react-icons/ai';

const modalContainer = document.getElementById('modal-root');

export default function PopupWindow({ closeModal, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClick}>
      <ModalWindow>
        <CloseModalBtn onClick={closeModal}>
          <AiOutlineClose size={18} style={{ color: '#3470FF' }} />
        </CloseModalBtn>
        {children}
      </ModalWindow>
    </Backdrop>,
    modalContainer
  );
}
