const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://3001-tomato-dragon-9ck26zri.ws-eu11.gitpod.io/api",
			currentUser: {}
		},

		actions: {
			login: (mail, pass) => {
				fetch(getStore().baseURL.concat("/login"), {
					method: "POST",
					mode: "no-cors",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: mail, password: pass })
				}).then(response => {
					if (response.ok) {
						response = response.json();
						console.log(response);
					}
				});
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
