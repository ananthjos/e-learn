import Client from "./axiosConfig";

const getListOfCorses = async () => {
  let response = await Client.get("courses.json");
  const { data } = response;
  return data.courses;
};

export default getListOfCorses;
