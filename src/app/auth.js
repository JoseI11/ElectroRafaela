import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Sign-in function
const signIn = async () => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth,"ignacio8686@gmail.com", "cuervo13121");
    console.log("Signed in as", userCredential.user.email);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};
export default signIn
