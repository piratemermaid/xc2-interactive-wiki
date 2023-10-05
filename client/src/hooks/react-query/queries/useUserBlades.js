import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getUserBlades = () =>
    axios.get("/api/user_data/blades").then((res) => res.data);

export default function useBlades() {
    return useQuery({ queryKey: ["user_blades"], queryFn: getUserBlades });
}
