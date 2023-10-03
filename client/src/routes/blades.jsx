import useBlades from "../hooks/react-query/queries/useBlades";

export default function BladesPage() {
    const { data, isLoading } = useBlades();

    return (
        <div>
            <h1>BLADE PAGE</h1>
            <p>{isLoading ? "Loading..." : data[0].name}</p>
        </div>
    );
}
