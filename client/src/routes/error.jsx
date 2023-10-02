import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>OOPSIE ERROR</h1>
            <p>{error.statusText ?? error.message}</p>
        </div>
    );
}
