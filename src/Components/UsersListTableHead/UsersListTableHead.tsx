import styles from './usersListTableHead.module.css'

export type SortType = 'asc' | 'desc';

type UsersListTableHeadProps = {
  sortByFirstName: () => void;
  nameSort: SortType | undefined
}

const UsersListTableHead = (props: UsersListTableHeadProps) => {
  const {sortByFirstName, nameSort} = props;
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th onClick={sortByFirstName}>
          <span className={styles.name}>First Name
            {nameSort && <img className={`${styles.sort_image} ${styles[nameSort]}`} src="https://cdn-icons-png.flaticon.com/512/2989/2989995.png" />}
          </span>
        </th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Job</th>
        <th>Country</th>
        <th></th>
      </tr>
    </thead>
  )
}

export default UsersListTableHead