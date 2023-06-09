import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import './Users.css';
import UserData from '../types/userData';

export default function Users(): JSX.Element {
  const [users, setUsers] = useState<UserData[]>();
  const { userId } = useParams();
  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(json));
  });
  return (
    <>
      <div className="usersContainer">
        <p> Users: </p>
        {users?.map((user) => (
          <NavLink
            to={user.id.toString()}
            className="userContainer"
            key={user.id}
          >
            {user.username}
            <br />
            {user.email}
          </NavLink>
        ))}
      </div>
      {userId && <Outlet />}
    </>
  );
}
