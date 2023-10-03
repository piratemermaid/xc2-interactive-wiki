import React from "react";

export default function BladesPage() {
    React.useEffect(() => {
        async function testAPI() {
            await fetch("/api/app");
        }

        testAPI();
    }, []);

    return <h1>BLADE PAGE</h1>;
}
