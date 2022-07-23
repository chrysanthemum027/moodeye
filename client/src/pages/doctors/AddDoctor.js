import React, { useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputField from "../../components/InputField";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import SaveButton from "../../components/SaveButton";
import { postNewDoctor } from "../../api/doctors";
import { useHistory } from "react-router-dom";

function AddDoctor() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userID = sessionStorage.getItem("userID");
  const [newDoctor, setNewDoctor] = useState({
    firstName: "",
    lastName: "",
    street: "",
    zipAndLocation: "",
    phone: "",
    mail: "",
    officeHours: "",
    userID,
  });

  function handleChange(event) {
    const value = event.target.value;
    setNewDoctor({ ...newDoctor, [event.target.name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postNewDoctor(newDoctor);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      history.push("/main/doctors");
    }
  }

  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <h2>Add doctor</h2>
          <InputField
            label="First name:"
            name="firstName"
            value={newDoctor.firstName}
            placeholder="Ishita"
            onChange={handleChange}
          />
          <InputField
            label="Last name:"
            name="lastName"
            value={newDoctor.lastName}
            placeholder="Choudhary"
            onChange={handleChange}
          />
          <InputField
            label="Street:"
            name="street"
            value={newDoctor.street}
            placeholder="South C Lines"
            onChange={handleChange}
          />
          <InputField
            label="ZIP and Location:"
            name="zipAndLocation"
            value={newDoctor.zipAndLocation}
            placeholder="251001 UP"
            onChange={handleChange}
          />
          <InputField
            label="Contact:"
            name="phone"
            value={newDoctor.phone}
            placeholder="0123456789"
            onChange={handleChange}
          />
          <InputField
            label="Mail:"
            name="mail"
            value={newDoctor.mail}
            placeholder="test@test.com"
            onChange={handleChange}
          />
          <InputFieldTextArea
            label="Office hours:"
            name="officeHours"
            value={newDoctor.officeHours}
            placeholder="Mon-Fri 9-17"
            onChange={handleChange}
          />
          <SaveButton
            disabled={!newDoctor || loading}
            type="submit"
            onClick={handleSubmit}
          />
          {error && (
            <p>
            Unfortunately this did not work. Please try again.
            </p>
          )}
        </>
      }
    />
  );
}

export default AddDoctor;
