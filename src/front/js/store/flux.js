import { contains } from "jquery";
import { Link, useHistory } from "react-router-dom";
import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	const history = useHistory();
	return {
		store: {
			token: "",
			error: "",
			step: 0
		},
		actions: {
			login: (mail, pass) => {
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					body: JSON.stringify({ email: mail, password: pass }),
					headers: { "Content-Type": "application/json" }
				})
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
						console.error("Error:", error);
					});
			},

			setError: error => {
				setStore({ error: error });
			},

			setUpStep: () => {
				const store = getStore();
				setStore({ step: store.step + 1 });
				console.log("store", store);
			},
			setDownStep: () => {
				const store = getStore();
				setStore({ step: store.step - 1 });
			},
			// Use getActions to call a function within a fuction

			exampleFunction: () => {
				// getActions().changeColor(0, "green");
				console.log("Esta");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store erge
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
