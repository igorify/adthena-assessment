import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalContent,
  ButtonsWrapper,
  Button,
  CancelButton,
  Text,
  HeaderWrapper,
  Header,
  Spacer,
} from '@components/styled-components/Modal';
import WarningIcon from '@icons/WarningIcon';
import RenderModal from '../../Modal';

const DeleteFilesModal = ({ isVisible, closeModal }) => {
  const handleSuccess = () => {}; // button 'Yes' customuse handler
  return (
    <RenderModal isVisible={isVisible}>
      <Modal>
        <ModalContent>
          <HeaderWrapper>
            <WarningIcon />
            <Header>
              Are you sure you want to delete all of your files?
            </Header>
          </HeaderWrapper>
          <Spacer size="10" />
          <Text>
            This action cannot be undone.
          </Text>
          <Spacer size="20" />
          <ButtonsWrapper>
            <Button onClick={handleSuccess}>Yes</Button>
            {' '}
            <CancelButton onClick={closeModal}>No</CancelButton>
          </ButtonsWrapper>
        </ModalContent>
      </Modal>
    </RenderModal>
  );
};

DeleteFilesModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default DeleteFilesModal;
