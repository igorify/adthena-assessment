import React, { useState } from 'react';
import {
  Row,
  UserInfo,
  Users
} from '@components/styled-components/UserList';
import useFetchUsers from '../../hooks/useFetchUsers';

const setFilter = (setValue) => (e) => {
  const value = e.target && e.target.value;
  setValue(value);
};

function UserList() {
  const [value, setValue] = useState('');
  const data = useFetchUsers(value);

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={setFilter(setValue)}
          value={value}
          placeholder="Enter username"
        />
      </div>
      <Users>
        {!!data.length && data.map((user) => (
          <Row key={user.id} data-testid="userWrapper">
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
}

export default UserList;
