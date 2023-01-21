import axios from "../../utlis/axios";
export const getTags = async () => {
    const respons = await axios.get("/tags");
    return respons.data;
}