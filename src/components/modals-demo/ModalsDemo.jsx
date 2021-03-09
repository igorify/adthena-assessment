import React from 'react';
import {
  Content,
  Heading,
  StyledList,
  Task
} from '@components/styled-components/Task';
import {
  Button
} from '@components/styled-components/Modal';
import useModal from '@hooks/useModal';
import LoadingModal from './LoadingModal';
import DeleteFilesModal from './DeleteFilesModal';
import DeleteReportModal from './DeleteReportModal';

const ModalsDemo = () => {
  const {
    isVisible: isVisibleLoadingModal, openModal: openLoadingModal, closeModal: closeLoadingModal,
  } = useModal();
  const {
    isVisible: isVisibleFilesModal, openModal: openFilesModal, closeModal: closeFilesModal
  } = useModal();
  const {
    isVisible: isVisibleReportModal, openModal: openReportModal, closeModal: closeReportModal
  } = useModal();

  return (
    <Task>
      <Heading>Modals Demo Page</Heading>
      <Content>
        <h4>Click to the selected buttom to see modal:</h4>
        <StyledList type="1">
          <li>Data loading modal</li>
          <Button onClick={openLoadingModal}>Open modal</Button>
          <LoadingModal isVisible={isVisibleLoadingModal} closeModal={closeLoadingModal} />
          <li>Delete files modal</li>
          <Button onClick={openFilesModal}>Open modal</Button>
          <DeleteFilesModal isVisible={isVisibleFilesModal} closeModal={closeFilesModal} />
          <li>Delete report and history modal</li>
          <Button onClick={openReportModal}>Open modal</Button>
          <DeleteReportModal isVisible={isVisibleReportModal} closeModal={closeReportModal} />
        </StyledList>
      </Content>
    </Task>
  );
};

export default ModalsDemo;
