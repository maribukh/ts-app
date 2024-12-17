import React, { useState } from "react"
import { data, Person } from "../../static/data"
import UsersListTableHead, {SortType} from "../UsersListTableHead/UsersListTableHead"
import styles from './UsersList.module.css'
import UserListItem from "../UserItem/UserListItem"

const UserList = () => {
  const [users, setUsers] = useState<Person[]>(data);
  const [nameSort, setNameSort] = useState<SortType>();

  const removeUser = (id: number) => {
    setUsers((previousUsers) => {
      return previousUsers.filter((user) => user.id !== id )
    })
  }


  const sortByFirstName = () => {
    if (nameSort === 'asc') {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          if (userA.first_name > userB.first_name) return 1
          if (userA.first_name < userB.first_name) return -1
          return 0
        })
        return newUsers
      })
      setNameSort('desc')
    } else {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          if (userA.first_name > userB.first_name) return -1
          if (userA.first_name < userB.first_name) return 1
          return 0
        })
        return newUsers
      })
      setNameSort('asc')
    }

  }

  return (
    <div className={styles.table_container}>
      <table>
        <UsersListTableHead 
          sortByFirstName={sortByFirstName} 
          nameSort={nameSort} />
        <tbody>
          {users.map((user) => {
            return <React.Fragment key={user.id}>
              <UserListItem 
                user={user} 
                removeUser={removeUser}
              />
            </React.Fragment>
            }
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserList