import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarData() {
  return (
    <Box sx={{ width: "100%" }}>
      <BarChart
        colors={["#AC4FBB", "#3AA960", "#FFA800"]}
        xAxis={[
          {
            id: "barCategories",
            data: ["Membres"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            label: "Tolal",
            data: [1205],
          },
          {
            label: "Vip",

            data: [(1205 * 12) / 100],
          },
          {
            label: "Nouveau",
            data: [(1205 * 88) / 100],
          },
        ]}
        height={300}
      />
    </Box>
  );
}
const months = [];
for (let month = 0; month <= 11; month++) {
  months.push(new Date(2023, month, 1));
}
const labels = [
  "Jan",
  "Fév",
  "Mar",
  "Avr",
  "Mai",
  "Juin",
  "Juil",
  "Aoû",
  "Sep",
  "Oct",
  "Nov",
  "Déc",
];

export const LineData = () => {
  return (
    <LineChart
      xAxis={[
        {
          id: "month",
          data: months,
          scaleType: "time",
          valueFormatter: (date) => labels[date.getMonth().toString()],
        },
      ]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5, 3, 4, 7, 6, 9, 4.5],
          color: "#EA0000",
        },
        {
          data: [3, 7, 2, 8, 5, 6, 4, 9, 1, 2, 5, 3],
          color: "#4F65BB",
        },
      ]}
      height={300}
    />
  );
};
