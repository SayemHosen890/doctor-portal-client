import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confiq";

const initialization = () => {
    initializeApp(firebaseConfig);
}
export default initialization;

