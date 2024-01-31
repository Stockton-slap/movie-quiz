import { getDoc, collection, doc } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = async () => {
  const roundsRef = collection(firestore, "rounds");

  try {
    const docRef = await getDoc(doc(roundsRef, "round"));

    if (docRef.exists()) {
      const data = docRef.data();
      console.log("Document data:", data);
    } else {
      console.log("Document does not exist");
    }
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};

export default handleSubmit;
