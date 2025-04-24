import { apiClient } from "./config";


export const apiSignup = async (payload) => {
  return apiClient.post("/user/register", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiLogin = async (payload) =>
  apiClient.post("/user/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiGetAuthenticatedUser = async () => apiClient.get("/users/me");

// resetting password
export const apiForgotPassword = async (payload) =>
  apiClient.patch("/forgot-password", payload, {
    headers: {
      "content-type": "application/json",
    },
  });

export const apiResetPassword = async (payload) =>
  apiClient.patch("/reset-password", payload, {
    headers: {
      "content-type": "application/json",
    },
  });

export const apiVerifyEmail = async (payload) => {
  return apiClient.post("/activate-email", payload);
};

export const apiGetWeather = async (city) => {
  return apiClient.get(`/weather?city=${city}`);
}

export const apiChat = async (message) => {
  return apiClient.post("/chat", { message });
};


// export const apiForgotPassword = (payload) => apiClient.post("users/forgot-password", payload);
