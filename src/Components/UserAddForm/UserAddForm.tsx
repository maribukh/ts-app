import React, { useState } from "react";
import { Person } from "../../static/data";
import styles from "./UserAddForm.module.css";

type UserAddFormProps = {
  addUser: (newUser: Person) => void;
};

const UserAddForm = ({ addUser }: UserAddFormProps) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    gender: "",
    job: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: Person = {
      id: Date.now(),
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      age: parseInt(formData.age, 10),
      gender: formData.gender,
      job: formData.job,
      country: formData.country,
    };
    addUser(newUser);
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      age: "",
      gender: "",
      job: "",
      country: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <input
        type="text"
        name="job"
        placeholder="Job"
        value={formData.job}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserAddForm;
