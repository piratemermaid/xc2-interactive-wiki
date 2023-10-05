import { Grid } from "@mui/material";

import Page from "../components/Page";
import useBlades from "../hooks/react-query/queries/useBlades";
import useUserBlades from "../hooks/react-query/queries/useUserBlades";

export default function MyBlades() {
    const { data: blades, bladesIsLoading } = useBlades();
    const { data: userBlades, userBladesIsLoading } = useUserBlades();

    return (
        <Page
            title="My Blades"
            isLoading={bladesIsLoading || userBladesIsLoading}
        >
            <Grid container spacing={2}>
                {blades?.map(({ name }) => {
                    const userHasBlade = userBlades?.find(
                        ({ name: userBladeName }) => userBladeName === name
                    );

                    return (
                        <Grid
                            item
                            key={name}
                            xs={2}
                            sx={{
                                "&:hover": { cursor: "pointer" },
                                opacity: userHasBlade ? 1 : 0.5
                            }}
                            onClick={() =>
                                console.log(
                                    "//TODO: toggle character obtained for user"
                                )
                            }
                        >
                            {name}
                        </Grid>
                    );
                })}
            </Grid>
        </Page>
    );
}
