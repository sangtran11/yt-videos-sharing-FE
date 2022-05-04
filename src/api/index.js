import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

export const shareVideo = (formData) => API.post("/user/share-video", formData);
export const fetchVideos = () => API.get("/user/fetch-videos");
