import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const UserProviderContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	const createAccount = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const provider = new GoogleAuthProvider();

	const loginWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			const userEmail = currentUser?.email || user?.email;
			const loggedUser = { email: userEmail };

			setUser(currentUser);
			setLoading(false);

			if (currentUser) {
				axios
					.post("http://localhost:3000/jwt", loggedUser, {
						withCredentials: true,
					})
					.then((res) => {
						console.log("token response", res.data);
					});
			} else {
				axios
					.post("http://localhost:3000/logout", loggedUser, {
						withCredentials: true,
					})
					.then((res) => {
						console.log(res.data);
					});
			}
		});
		return () => {
			unSubscribe();
		};
	}, [user]);

	const authValues = {
		user,
		createAccount,
		loginWithGoogle,
		loginUser,
		logOut,
		loading,
	};
	return (
		<UserProviderContext.Provider value={authValues}>
			{children}
		</UserProviderContext.Provider>
	);
};

export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
