import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const affinityProperties = [
    { label: "Key Affinity", property: "keyAffinity" },
    { label: "Blade Special 1", property: "bladeSpecial1" },
    { label: "Blade Special 2", property: "bladeSpecial2" },
    { label: "Blade Special 3", property: "bladeSpecial3" },
    { label: "Battle Skill 1", property: "battleSkill1" },
    { label: "Battle Skill 2", property: "battleSkill2" },
    { label: "Battle Skill 3", property: "battleSkill3" },
    { label: "Field Skill 1", property: "fieldSkill1" },
    { label: "Field Skill 2", property: "fieldSkill2" },
    { label: "Field Skill 3", property: "fieldSkill3" }
];

export default function AffinityChart({ data }) {
    const formatTaskString = (taskData) => {
        if (!taskData) return "";

        const { task, count } = taskData;

        let string = task;

        if (!count) return string;

        return `${task} (${count})`;
    };

    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell />
                    <TableCell>Level 1</TableCell>
                    <TableCell>Level 2</TableCell>
                    <TableCell>Level 3</TableCell>
                    <TableCell>Level 4</TableCell>
                    <TableCell>Level 5</TableCell>
                </TableRow>
                {affinityProperties.map(({ label, property }) => (
                    <TableRow key={label}>
                        <TableCell>{label}</TableCell>
                        <TableCell>
                            {formatTaskString(data[property][1])}
                        </TableCell>
                        <TableCell>
                            {formatTaskString(data[property][2])}
                        </TableCell>
                        <TableCell>
                            {formatTaskString(data[property][3])}
                        </TableCell>
                        <TableCell>
                            {formatTaskString(data[property][4])}
                        </TableCell>
                        <TableCell>
                            {formatTaskString(data[property][5])}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
