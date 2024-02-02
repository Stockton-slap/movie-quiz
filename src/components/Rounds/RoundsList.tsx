import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase_setup/firebase.js";

export default function RoundsList() {
  const [roundTitles, setRoundTitles] = useState<string[]>([]);

  console.log(roundTitles);
  useEffect(() => {
    const fetchRounds = async () => {
      const roundsRef = collection(firestore, "rounds");
      const roundsSnap = await getDocs(roundsRef);

      roundsSnap.forEach(async (roundDoc) => {
        setRoundTitles([roundDoc.data().title]);

        const questionsRef = collection(roundDoc.ref, "questions");
        const questionsSnap = await getDocs(questionsRef);

        questionsSnap.forEach((questionDoc) => {
          // console.log("Question data:", questionDoc.data());
        });
      });
    };

    fetchRounds();
  }, []);

  return <ul>li</ul>;
}
