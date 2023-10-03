import AffinityChart from "../components/AffinityChart";
import useBlades from "../hooks/react-query/queries/useBlades";

export default function BladesPage() {
    const { data: blades, isLoading } = useBlades();

    if (isLoading) {
        return (
            <div>
                <h1>BLADE PAGE</h1>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <h1>BLADE PAGE</h1>
            <ul>
                {blades.map((blade) => (
                    <li key={blade.name}>
                        <h2>{blade.name}</h2>
                        <p>Element: {blade.element}</p>
                        <p>Weapon Class: {blade.weaponClass}</p>
                        <p>Role: {blade.role}</p>
                        <h3>Affinity Chart</h3>
                        <AffinityChart data={blade.affinityChart} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
