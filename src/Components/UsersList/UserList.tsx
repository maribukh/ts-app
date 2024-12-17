import React, { useState } from "react";
import { data, Person } from "../../static/data";
import UsersListTableHead, {
  SortType,
} from "../UsersListTableHead/UsersListTableHead";
import styles from "./UsersList.module.css";
import UserListItem from "../UserItem/UserListItem";
import UserAddForm from "./UserAddForm/UserAddForm";

const UserList = () => {
  const [users, setUsers] = useState<Person[]>(data);
  const [ageSort, setAgeSort] = useState<SortType>();

  const removeUser = (id: number) => {
    setUsers((previousUsers) => previousUsers.filter((user) => user.id !== id));
  };

  const sortByAge = () => {
    if (ageSort === "asc") {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => userA.age - userB.age);
        return newUsers;
      });
      setAgeSort("desc");
    } else {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => userB.age - userA.age);
        return newUsers;
      });
      setAgeSort("asc");
    }
  };

  return (
    <div className={styles.table_container}>
      <table>
        <UsersListTableHead sortByAge={sortByAge} ageSort={ageSort} />
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <UserListItem user={user} removeUser={removeUser} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
