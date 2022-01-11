import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsActions } from "redux/contacts";
import { contactsSelectors } from "redux/contacts";
import styles from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Find contacts by name</h2>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
