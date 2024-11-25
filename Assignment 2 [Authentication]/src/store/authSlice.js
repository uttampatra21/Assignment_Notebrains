import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cookiesService } from "../shared/_session/cookies";
import { toast } from "react-toastify";

const initialState = {
  loadingStatus: false,
  error: "",
  token: cookiesService.getItem("accessToken") || "",
  isAuthenticated: !!cookiesService.getItem("accessToken"),
  profileData: JSON.parse(cookiesService.getItem("profileData") || "[]"),
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const users = JSON.parse(cookiesService.getItem("users") || "[]");

      if (users) {
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }

      const userExists = users.some((user) => user.email === credentials.email);

      if (userExists) {
        return rejectWithValue("Email already registered");
      }

      users.push(credentials);
      cookiesService.setItem("users", JSON.stringify(users));

      return credentials;
    } catch (error) {
      return rejectWithValue("Registration failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const users = JSON.parse(cookiesService.getItem("users") || "[]");

      const user = users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (user) {
        setTimeout(() => {
          window.location.href = "/profile";
        }, 1000);
      }

      if (!user) {
        return rejectWithValue("Invalid email or password");
      }

      const token = "fakeToken";
      cookiesService.setItem("accessToken", token);
      cookiesService.setItem("profileData", JSON.stringify(user));

      return { token, profileData: user };
    } catch (error) {
      return rejectWithValue("Login failed");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.token = "";
      state.isAuthenticated = false;
      state.profileData = [];
      cookiesService.clearAll();
      window.location.href = "/";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(registerUser.fulfilled, (state, action) => {
        toast.success("Registration successful");
      })
      .addCase(registerUser.rejected, (state, action) => {
        toast.error(action.payload || "Registration failed");
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.profileData = action.payload.profileData;
        state.isAuthenticated = true;
        toast.success("Login successful");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.token = "";
        state.profileData = [];
        state.isAuthenticated = false;
        toast.error(action.payload || "Login failed");
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
