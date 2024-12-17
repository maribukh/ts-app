import React, { useState, useRef } from "react";
import { data, Person } from "../../static/data";
import UserAddForm from "../UserAddForm/UserAddForm";
import UserListItem from "../UserItem/UserListItem";
import styles from "./UsersList.module.css";

const UserList = () => {
  const [users, setUsers] = useState<Person[]>(data);
  const nextId = useRef(
    data.length > 0 ? Math.max(...data.map((u) => u.id)) + 1 : 1
  );

  const removeUser = (id: number) => {
    setUsers((previousUsers) => previousUsers.filter((user) => user.id !== id));
  };

  const addUser = (newUser: Person) => {
    const userWithId = { ...newUser, id: nextId.current };
    nextId.current += 1;
    setUsers((previousUsers) => [userWithId, ...previousUsers]);
  };

  return (
    <div className={styles.table_container}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Job</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserListItem key={user.id} user={user} removeUser={removeUser} />
          ))}
        </tbody>
      </table>
      {}
      <UserAddForm onAddUser={addUser} />
    </div>
  );
};

export default UserList;
