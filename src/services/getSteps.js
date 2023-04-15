import Client from "./axiosConfig";

const getSteps = async () => {
  let response = await Client.get("steps.json");
  const { data } = response;
  return data;
};

export default getSteps;
