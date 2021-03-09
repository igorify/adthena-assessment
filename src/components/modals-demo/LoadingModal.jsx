import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalContent,
  Description,
  Img,
  Spacer
} from '@components/styled-components/Modal';
import RenderModal from '../../Modal';

// eslint-disable-next-line no-unused-vars
const LoadingModal = ({ isVisible, closeModal }) => (
  <RenderModal isVisible={isVisible}>
    <Modal>
      <ModalContent>
        <Spacer size="10" />
        <Img src="images/spinner.png" alt="spinner" />
        <Description>
          Data is loading
        </Description>
        <Spacer size="10" />
      </ModalContent>
    </Modal>
  </RenderModal>
);

LoadingModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default LoadingModal;
