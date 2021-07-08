import { Link, useHistory } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	const history = useHistory();
	return {
		store: {
			token: ""
		},
		actions: {
			login: (mail, pass) => {
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					body: JSON.stringify({ email: mail, password: pass }),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.catch(error => console.error("Error:", error))
					.then(response => console.log("Success:", response))
					.then(data => setStore({ token: data }))
					.then(data => localStorage.setItem("token", data));
			},
			setToken: token => {
				localStorage.setItem("token", token);
				setStore({ token: token });
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
