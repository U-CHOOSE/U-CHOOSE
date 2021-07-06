import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			step: 0
		},
		actions: {
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
