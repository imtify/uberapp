import {useDispatch, useSelector} from 'react-redux';
import {setCurrentUser, clearCurrentUser} from '../slices/authSlice';
import {useEffect} from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';

export function AuthProvider({children}) {
  const dispatch = useDispatch();
  const {currentUser, loading} = useSelector(state => state.auth);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = (onAuthStateChanged = (auth, user) => {
      if (user) {
        dispatch(setCurrentUser(user));
      } else {
        dispatch(clearCurrentUser());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  //SignUp
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //Update Profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
  }

  // login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  return (
    <AuthProvider value={{currentUser, signup, login, logout}}>
      {!loading && children}
    </AuthProvider>
  );
}
