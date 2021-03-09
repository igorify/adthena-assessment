import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalOverlay } from '@components/styled-components/Modal';

const Modal = ({ children, isVisible }) => {
  const el = document.getElementById('modal');
  if (!el) return null;

  return createPortal(isVisible ? (
    <ModalOverlay>
      {children}
    </ModalOverlay>
  ) : null, el);
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Modal;
