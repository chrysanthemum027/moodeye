import React, { useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputField from "../../components/InputField";
import SaveButton from "../../components/SaveButton";
import { postNewMedic } from "../../api/medics";
import { useHistory } from "react-router-dom";

function AddMedics() {
  const history = useHistory();
  const userID = sessionStorage.getItem("userID");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newMedic, setNewMedic] = useState({
    name: "",
    intakeMorning: "",
    intakeMidday: "",
    intakeEvening: "",
    intakeNight: "",
    userID,
  });

  function handleChange(event) {
    const value = event.target.value;
    setNewMedic({ ...newMedic, [event.target.name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postNewMedic(newMedic);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      history.push("/main/medics");
    }
  }

  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <h2>Add drug</h2>
          <InputField
            label="Medication name:"
            name="name"
            value={newMedic.name}
            placeholder="Medication name"
            onChange={handleChange}
          />
          <InputField
            label="Morning intake:"
            name="intakeMorning"
            value={newMedic.intakeMorning}
            placeholder="10mg 0800"
            onChange={handleChange}
          />
          <InputField
            label="Midday intake:"
            name="intakeMidday"
            value={newMedic.intakeMidday}
            placeholder="5mg 1200"
            onChange={handleChange}
          />
          <InputField
            label="Evening intake:"
            name="intakeEvening"
            value={newMedic.intakeEvening}
            placeholder="10mg 1800"
            onChange={handleChange}
          />
          <InputField
            label="Night intake:"
            name="intakeNight"
            value={newMedic.intakeNight}
            placeholder="5mg 2200"
            onChange={handleChange}
          />

          <SaveButton
            type="submit"
            disabled={!newMedic || loading}
            onClick={handleSubmit}
          />
          {error && (
            <p>
            Unfortunately this did not work. Please try again
            </p>
          )}
        </>
      }
    />
  );
}

export default AddMedics;
