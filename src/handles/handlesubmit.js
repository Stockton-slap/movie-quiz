import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = async (testdata) => {
  const ref = collection(firestore, "test_data");

  let data = {
    testData: testdata,
  };

  try {
    const docRef = await addDoc(ref, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};

export default handleSubmit;
