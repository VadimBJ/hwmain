import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserData from '../types/userData';
import './Users.css';

export default function UserPage():JSX.Element {
  const { userId } = useParams();
  const [user, setUser] = useState<UserData>();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, [userId]);
  return (
    <div className="userInfoContainer">
      <div className="userName">
      <p>
        {user?.name.firstname.charAt(0).toUpperCase()}{user?.name.firstname.slice(1)}{'  '}
        {user?.name.lastname.charAt(0).toUpperCase()}{user?.name.lastname.slice(1)}
      </p>
      </div>
      <div className="userAddress">
      <span>address: {user?.address.city.charAt(0).toUpperCase()}
        {user?.address.city.slice(1)}
      </span>
      <span> ({user?.address.zipcode}), </span>
      <span> {user?.address.street.charAt(0).toUpperCase()}
        {user?.address.street.slice(1)} №{user?.address.number}
      </span>
      </div>
      <p>📧 {user?.email}</p>
      <p>☎ {user?.phone}</p>
    </div>
  );
}
