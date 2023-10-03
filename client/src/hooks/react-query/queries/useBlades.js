import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getBlades = () => axios.get("/api/app").then((res) => res.data);

export default function useBlades() {
    return useQuery({ queryKey: ["blades"], queryFn: getBlades });
}
