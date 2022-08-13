import { API_BASE_URL } from "../api-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type" : "application/json",
    });
    const aceesToken = localStorage.getItem(ACCESS_TOKEN);
    if(aceesToken && aceesToken !== null) {
        headers.append("Authorization", "Bearer " + aceesToken);
    }
    let options = {
        headers : headers,
        url : API_BASE_URL + api,
        method : method
    };
    if(request) {
        options.body = JSON.stringify(request);
    }
    return fetch(options.url, options)
            .then((response) => {
                    if(!response.ok) return Promise.reject(response);
                    return response.json();
                }
            )
            .catch((error) => {
                console.log(error.status);
                if(error.status === 403) {
                    window.location.href="/login";
                }
                return Promise.reject(error);
            });
}

export function signin(userDTO) {
    return call("/auth/login", "POST", userDTO)
        .then((response) => {
            if(response.token) {
                console.log(response.token);
                localStorage.setItem(ACCESS_TOKEN, response.token);
                window.location.href = "/";
            }
        });
}

export function signout() {
    localStorage.setItem(ACCESS_TOKEN, null);
    window.location.href = "/login";
}

export function signup(userDTO) {
    return call("/auth/signup", "POST", userDTO);
}