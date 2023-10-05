import React from "react";
import { Grid } from "@mui/material";

import useBlades from "../hooks/react-query/queries/useBlades";
import useUserBlades from "../hooks/react-query/queries/useUserBlades";
import Page from "../components/Page";

export default function TeamBuilder() {
    const [selectedBlades, setSelectedBlades] = React.useState([]);
    const [elementCount, setElementCount] = React.useState({
        Fire: 0,
        Water: 0,
        Ice: 0,
        Wind: 0,
        Earth: 0,
        Electric: 0,
        Light: 0,
        Dark: 0
    });

    const { data: blades, bladesIsLoading } = useBlades();
    const { data: userBlades, userBladeIsLoading } = useUserBlades();
    // TODO: get elements from API
    const elements = [
        "Fire",
        "Water",
        "Ice",
        "Wind",
        "Earth",
        "Electric",
        "Light",
        "Dark"
    ];

    const unselectedBlades = userBlades?.filter(
        ({ name }) => !selectedBlades.includes(name)
    );

    const handleSelectBlade = (name) => {
        const bladeInfo = blades.find((blade) => blade.name === name);
        const bladeElement = bladeInfo.element;
        const currentElementCount = elementCount[bladeElement];

        if (selectedBlades.includes(name)) {
            setSelectedBlades(
                selectedBlades.filter((bladeName) => bladeName !== name)
            );
            setElementCount({
                ...elementCount,
                [bladeElement]: currentElementCount - 1
            });
        } else {
            setSelectedBlades([...selectedBlades, name]);
            setElementCount({
                ...elementCount,
                [bladeElement]: currentElementCount + 1
            });
        }
    };

    const BladeClickable = ({ name }) => (
        <Grid item xs={2} onClick={() => handleSelectBlade(name)}>
            {name}
        </Grid>
    );

    return (
        <Page
            title="Team Builder"
            isLoading={bladesIsLoading || userBladeIsLoading}
        >
            <Grid container>
                <Grid item xs={6} sx={{ borderRight: "1px solid gray" }}>
                    <h3>Blade Pool</h3>
                    <Grid container>
                        {unselectedBlades?.map(({ name }) => (
                            <BladeClickable name={name} key={name} />
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <h3>Selected</h3>
                    {selectedBlades?.map((name) => (
                        <BladeClickable name={name} key={name} />
                    ))}
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <h3>Elements Selected</h3>
                {elements.map((element) => (
                    <Grid item key={element}>
                        {element}: {elementCount[element]}
                    </Grid>
                ))}
            </Grid>
        </Page>
    );
}
