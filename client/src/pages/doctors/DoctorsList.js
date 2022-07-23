import React, { useEffect, useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import ContentWithAddFunction from "../../components/ContentwithAddFunction";
import AddButton from "../../components/AddButton";
import DoctorsListElement from "../../components/DoctorsListElement";
import Searchbar from "../../components/Searchbar";
import { Link } from "react-router-dom";
import { fetchDoctors } from "../../api/doctors";
import Loading from "../../pages/LoadingPage";

function Doctors() {
  const [doctors, setDoctors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const userID = sessionStorage.getItem("userID");

  useEffect(() => {
    async function showDoctors() {
      try {
        const newDoctors = await fetchDoctors(userID);
        setDoctors(newDoctors);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    showDoctors();
  }, [userID]);

  const filteredDoctors = doctors?.filter((doctor) => {
    return doctor.lastName.startsWith(query);
  });

  if (loading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenHeadSection={
        <Searchbar
          placeholder={"Seek doctor"}
          value={query}
          onChange={(value) => setQuery(value)}
        />
      }
      childrenMainSection={
        <ContentWithAddFunction
          addcomponent={
            <Link to="/main/doctors/add">
              <AddButton description={"Add doctor"} />
            </Link>
          }
          content={
            <>
              {filteredDoctors?.map((doctor) => (
                <DoctorsListElement
                  key={doctor._id}
                  firstName={doctor.firstName}
                  lastName={doctor.lastName}
                  street={doctor.street}
                  zipAndLocation={doctor.zipAndLocation}
                  phone={doctor.phone}
                  mail={doctor.mail}
                  officeHours={doctor.officeHours}
                  id={doctor._id}
                />
              ))}
            </>
          }
        />
      }
    />
  );
}

export default Doctors;
