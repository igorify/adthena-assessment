import React from 'react';
import {
  render, act, screen, fireEvent
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetch from 'node-fetch';
import fetchMock from 'fetch-mock';
import UserList from '../UserList';
import usersMock from '../../../mocks/usersMock';
import { DEFAULT_DEBOUNCE_TIMEOUT } from '../../../utils/debounce';

import 'jest-styled-components';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('UserList Component', () => {
  beforeAll(() => {
    jest.setTimeout(10000);
    global.fetch = fetch;
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('should render component correctly', async () => {
    const [user] = usersMock;
    fetchMock.once('https://jsonplaceholder.typicode.com/users', [user]);

    let result;
    await act(async () => {
      result = render(<UserList />);
    });
    expect(result).toMatchSnapshot();
  });

  it('should render component correctly without users data', async () => {
    fetchMock.once('https://jsonplaceholder.typicode.com/users', []);

    let result;
    await act(async () => {
      result = render(<UserList />);
    });
    expect(result).toMatchSnapshot();
  });

  it('should render corrent output of compoment after search update', async () => {
    const [bretUser] = usersMock;
    fetchMock.once('https://jsonplaceholder.typicode.com/users', usersMock);
    fetchMock.once('https://jsonplaceholder.typicode.com/users?username=Bret', [bretUser]);

    await act(async () => {
      render(<UserList />);
    });

    const input = screen.getByPlaceholderText('Enter username');

    const elements = screen.getAllByTestId('userWrapper');
    expect(elements.length).toBe(usersMock.length);
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'Bret' } });
    await wait(DEFAULT_DEBOUNCE_TIMEOUT);

    const elementAfterUpdate = screen.getAllByTestId('userWrapper');
    expect(elementAfterUpdate.length).toBe(1);
    expect(input.value).toBe('Bret');
  });

  it('should correctly work debounce on input search', async () => {
    const [bretUser] = usersMock;
    fetchMock.once('https://jsonplaceholder.typicode.com/users', usersMock);
    fetchMock.once('https://jsonplaceholder.typicode.com/users?username=Bret', [bretUser]);

    const useEffectSpy = jest.spyOn(React, 'useEffect');

    await act(async () => {
      render(<UserList />);
    });

    const input = screen.getByPlaceholderText('Enter username');
    userEvent.type(input, 'Bret');

    expect(fetchMock.calls().length).toBe(1);
    expect(useEffectSpy).toHaveBeenCalledTimes(6);
  });
});
