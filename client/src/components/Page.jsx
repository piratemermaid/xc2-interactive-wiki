import { Box } from "@mui/material";

export default function Page({ title, isLoading, children }) {
    return (
        <Box>
            <h2>{title}</h2>
            {isLoading ? "Loading..." : children}
        </Box>
    );
}
