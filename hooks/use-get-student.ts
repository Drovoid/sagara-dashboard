// import axios from "axios";
import { Student } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetStudent = (id: number) => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["student", id],
    queryFn: async () => {
      const res: Student = await fetch(`/api/student/${id}`, { method: "GET" })
        .then((res) => res.json())
        .then((res) => res.data);

      return res;
    },
  });

  return { data, isLoading, refetch, isRefetching };
};
