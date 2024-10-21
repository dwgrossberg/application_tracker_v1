import { Chart } from "react-google-charts";

export const data = [
  ["From", "To", "Weight"],
  ["A", "X", 5],
  ["A", "Y", 7],
  ["A", "Z", 6],
  ["B", "X", 2],
  ["B", "Y", 9],
  ["B", "Z", 4],
];

export const options = {};

const Sankey = () => {
  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
};

export default Sankey;
