import { QueryClient } from "@tanstack/react-query";
import { client } from "../generated/api/requests";

client.setConfig({
    baseUrl: "https://localhost:44313",
    credentials: "include",
    throwOnError: true,
});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 1000 * 60 * 5
        },
    },
});