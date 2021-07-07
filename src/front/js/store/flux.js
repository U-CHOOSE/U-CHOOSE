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
				}).then(response => {
					if (response.ok) {
						const data = response.json();
						const store = getStore();
						console.log(store.token, "store vacio??");
						console.log(data, "data");
						setStore({ token: data.token });
						localStorage.setItem("token", data.token);

						console.log(store.token, "token:data.token");
					}
				});
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
