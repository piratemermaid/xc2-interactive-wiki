import { Grid } from "@mui/material";

import useBlades from "../hooks/react-query/queries/useBlades";
import Page from "../components/Page";

export default function MyBlades() {
    const { data: blades, isLoading } = useBlades();

    return (
        <Page title="My Blades" isLoading={isLoading}>
            <Grid container spacing={2}>
                {blades?.map(({ name }) => (
                    <Grid item key={name} xs={2}>
                        {name}
                    </Grid>
                ))}
            </Grid>
        </Page>
    );
}
