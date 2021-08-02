import { data } from "jquery";
import { Link, useHistory } from "react-router-dom";

const getState = ({ getStore, setStore }) => {
	const history = useHistory();
	return {
		store: {
			token: "",
			error: "",
			schools: [],
			teachers: [],
			step: 0,
			reviews: {},
			userImg = "",
			userId: 0,
			users: []
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

			loadData: () => {
				const token = localStorage.getItem("token");
				const user_id = localStorage.getItem("id_user");
				setStore({ token: token, user_id: user_id });
			},
			removeToken: () => {
				const removeToken = localStorage.removeItem("token");
				return removeToken;
			},
			getToken: () => {
				const token = localStorage.getItem("token");
				return token;
			},
			isLogged: () => {
				const store = getStore();
				console.log(store);
				console.log(!!store.token && store.token !== "");
				return !!store.token && store.token !== "";
			},
			// Use getActions to call a function within a fuction

			exampleFunction: () => {
				// getActions().changeColor(0, "green");
				console.log("Esta");
			},
			setId: (idTeacher, userID) => {
				setStore({
					idTeacher: idTeacher,
					userId: userID
				});
			},

			setImg: img => {
				setStore({
					userImg: img
				});
			},
			get_img: img => {
				console.log(img, "image llegando al flux");
				let body;
				body = new FormData();
				body.append("profile_picture", img[0]);
				fetch(process.env.BACKEND_URL.concat("/profilepicture/", localStorage.getItem("id_user")), {
					body: body,
					method: "POST"
				})
					.then(function (response) {
						if (!response.ok) {
							throw Error("I can't upload picture!");
						}
						return response.json();
						console.log(response);
					})
					.then((data) =>
						setStore({ userImg: data }))
					.catch(function (error) {
						console.log("Looks like there was a problem: \n", error);
					});
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
