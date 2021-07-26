import { Link, useHistory } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	const history = useHistory();
	return {
		store: {
			token: "",
			error: "",
			schools: [],
			teachers: [],
			step: 0,
			reviews: {},
			idTeacher: 0,
			userId: 0
		},
		actions: {
			login: (mail, pass) => {
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					body: JSON.stringify({ email: mail, _password: pass }),
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

			setReview: (skill, value) => {
				let reviews = getStore().reviews;
				let updateReviews = { ...reviews, [skill]: value };
				setStore({ reviews: updateReviews });
			},
			//id teacher + id user +
			setId: (idTeacher, userID) => {
				setStore({
					idTeacher: idTeacher,
					userId: userID
				});
			},

			setError: error => {
				setStore({ error: error });
			},
			get_all: type => {
				fetch(process.env.BACKEND_URL + type + "/")
					.then(res => res.json())
					.then(data => setStore({ [type]: data }))
					.catch(error => console.log(error));
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

			// get_all_schools: () => {
			// 	fetch(process.env.BACKEND_URL + "/schools")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ schools: data }));
			// },
			// get_all_teachers: () => {
			// 	fetch(process.env.BACKEND_URL + "/user_teachers")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ teachers: data }));
			// },

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
