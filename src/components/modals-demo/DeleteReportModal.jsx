import React, { useState } from 'react';
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
  BoldText,
  InputBlock,
  Input,
  Select,
  Option
} from '@components/styled-components/Modal';
import WarningIcon from '@icons/WarningIcon';
import RenderModal from '../../Modal';

const reports = [
  {
    id: 'jan2020',
    name: 'January 2020'
  },
  {
    id: 'feb2020',
    name: 'February 2020'
  },
  {
    id: 'mar2020',
    name: 'March 2020'
  },
  {
    id: 'apr2020',
    name: 'April 2020'
  },
  {
    id: 'may2020',
    name: 'May 2020'
  },
  {
    id: 'jun2020',
    name: 'June 2020'
  },
  {
    id: 'jul2020',
    name: 'July 2020',
  }
];

const DeleteReportModal = ({ isVisible, closeModal }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    const inputValue = e.target && e.target.value;
    setValue(inputValue);
  };
  const handleDeleteAll = () => {
    if (value && value.toLowerCase() === 'delete') {
      closeModal();
    }
  };

  return (
    <RenderModal isVisible={isVisible}>
      <Modal>
        <ModalContent>
          <HeaderWrapper>
            <WarningIcon />
            <Header>
              Are you sure you want to delete this report and its history?
            </Header>
          </HeaderWrapper>
          <Spacer size="10" />
          <Text>
            If you delete the
            <BoldText>
              {' Executive metrics '}
            </BoldText>
            report, you will also delete the associated history:
          </Text>
          <Spacer size="15" />
          {reports.length > 0
            && (
            <Select size="5">
              {reports.map(({ id, name }) => <Option value={id} key={id}>{name}</Option>)}
            </Select>
            )}
          <Spacer size="5" />
          <InputBlock>
            <Text>
              Please type the word
              {' \'Delete\' '}
              to remove the
              <BoldText>
                {' Executive metrics '}
              </BoldText>
              report and its associated history:
            </Text>
            <Input type="text" value={value} onChange={handleChange} />
          </InputBlock>
          <ButtonsWrapper>
            <Button onClick={handleDeleteAll}>Delete all</Button>
            {' '}
            <CancelButton onClick={closeModal}>Cancel</CancelButton>
          </ButtonsWrapper>
        </ModalContent>
      </Modal>
    </RenderModal>
  );
};

DeleteReportModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default DeleteReportModal;
