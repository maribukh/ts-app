import React from "react";
import { SortType } from "../../static/data";
import styles from "./UsersListTableHead.module.css";

type UsersListTableHeadProps = {
  sortByFirstName: () => void;
  nameSort: SortType | undefined;
  sortByAge: () => void;
  ageSort: SortType | undefined;
};

const UsersListTableHead = (props: UsersListTableHeadProps) => {
  const { sortByFirstName, nameSort, sortByAge, ageSort } = props;

  return (
    <thead>
      <tr>
        <th>Id</th>
        <th onClick={sortByFirstName}>
          <span className={styles.name}>
            First Name
            {nameSort && (
              <img
                className={`${styles.sort_image} ${styles[nameSort]}`}
                src={""}
                alt="sort arrow"
              />
            )}
          </span>
        </th>
        <th>Last Name</th>
        <th>Email</th>
        <th onClick={sortByAge}>
          <span className={styles.name}>
            Age
            {ageSort && (
              <img
                className={`${styles.sort_image} ${styles[ageSort]}`}
                src={
                  ageSort === "asc"
                    ? "https://cdn-icons-png.flaticon.com/512/2989/2989995.png"
                    : "https://cdn-icons-png.flaticon.com/512/2989/2989995.png"
                }
                alt="sort arrow"
              />
            )}
          </span>
        </th>
        <th>Gender</th>
        <th>Job</th>
        <th>Country</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default UsersListTableHead;
