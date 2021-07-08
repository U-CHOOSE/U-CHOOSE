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
					.then(responseJson => {
						setStore({ token: responseJson.token });
						localStorage.setItem("token", responseJson.token);
					});
				const actions = getActions();
				actions.correct_login();
			},

			correct_login: () => {
				const store = getStore();
				if (store.token != "") {
					return history.push("/");
				}
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
