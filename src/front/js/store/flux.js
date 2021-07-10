import { contains } from "jquery";
import { Link, useHistory } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	const history = useHistory();
	return {
		store: {
			token: "",
			error: ""
		},
		actions: {
			login: (mail, pass) => {
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					body: JSON.stringify({ email: mail, password: pass }),
					headers: { "Content-Type": "application/json" }
				})
					// .then(response => {
					// 	if (!response.ok) throw Error(response.status);

					// 	return response;
					// })

					.then(response => response.json())

					.then(responseJson => {
						if (responseJson.token) {
							setStore({ token: responseJson.token });
							localStorage.setItem("token", responseJson.token);
							const store = getStore();
							console.log(store);
						} else if (responseJson.error) {
							setStore({ error: responseJson.error });
							console.log(responseJson.error);
						}
					})
					.catch(error => {
						// console.error("Error:", error), setStore({ error: error.error });
						console.error("Error:", error);
					});
			},

			setError: error => {
				setStore({ error: error });
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
