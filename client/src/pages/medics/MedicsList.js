import React, { useEffect, useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import ContentWithAddFunction from "../../components/ContentwithAddFunction";
import AddButton from "../../components/AddButton";
import MedicsListElement from "../../components/MedicsListElement";
import Searchbar from "../../components/Searchbar";
import { Link } from "react-router-dom";
import { fetchMedics } from "../../api/medics";
import Loading from "../../pages/LoadingPage";

function Medics() {
  const [medics, setMedics] = useState(null);
  const [loading, setLaoding] = useState(true);
  const [query, setQuery] = useState("");
  const userID = sessionStorage.getItem("userID");

  useEffect(() => {
    async function showMedics() {
      try {
        const newMedics = await fetchMedics(userID);
        setMedics(newMedics);
        setLaoding(false);
      } catch (error) {
        console.log(error);
      }
    }
    showMedics();
  }, [userID]);

  const filteredMedics = medics?.filter((medic) => {
    return medic.name.startsWith(query);
  });

  if (loading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenHeadSection={
        <Searchbar
          placeholder={"Search medicine"}
          value={query}
          onChange={(value) => setQuery(value)}
        />
      }
      childrenMainSection={
        <ContentWithAddFunction
          addcomponent={
            <Link to="/main/medics/add">
              <AddButton description={"Add drug"} />
            </Link>
          }
          content={
            <>
              {filteredMedics?.map((medic) => (
                <MedicsListElement
                  key={medic._id}
                  name={medic.name}
                  intakeMorning={medic.intakeMorning}
                  intakeMidday={medic.intakeMidday}
                  intakeEvening={medic.intakeEvening}
                  intakeNight={medic.intakeNight}
                  id={medic._id}
                />
              ))}
            </>
          }
        />
      }
    />
  );
}
export default Medics;
