import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

export const getInsights = async (dayLog: string, mascotId: number) => {
  const response = await axiosInstance.post("/insights/generate/landing-page", {
    dayLog,
    mascotId,
  });
  return response.data.payload.id;
};

export const fetchMascots = async () => {
  const response = await axiosInstance.get("/mascots");
  return response.data.payload.mascots;
};

export const fetchInsights = async (id: string) => {
  const response = await axiosInstance.get(`/insights/${id}`);
  return response.data.payload.insight;
};

export const signupForWaitlist = async (email: string) => {
  const response = await axiosInstance.post(
    "/waitlist",
    { email },
    {
      withCredentials: true,
    }
  );
  return response.data.payload;
};
