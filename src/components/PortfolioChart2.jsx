import { DiscreteColorLegend, RadialChart } from "react-vis";

const data = [
  { angle: 6, label: "Stocks", padAngle: 10 },
  { angle: 3, label: "Bonds", padAngle: 10 },
  { angle: 1, label: "Whiskey", padAngle: 10 }
];

// const data = [
//   { angle: 1, radius: 10 },
//   {
//     angle: 2,
//     label: "Super Custom label",
//     subLabel: "With annotation",
//     radius: 20
//   },
//   { angle: 5, radius: 5, label: "Alt Label" },
//   { angle: 3, radius: 14 },
//   {
//     angle: 5,
//     radius: 12,
//     subLabel: "Sub Label only",
//     className: "custom-class"
//   }
// ];

const legends = [
  { title: "Stocks", strokeWidth: 10 },
  { title: "Bonds", strokeWidth: 10 },
  { title: "Whiskey", strokeWidth: 10 }
];

const PortfolioChart2= () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "", fontWeight: "900" }}>
      <RadialChart
        data={data}
        animation="wobbly"
        width={250}
        height={250}
        radius={100}
        innerRadius={50}
        showLabels={true}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <DiscreteColorLegend items={legends} height={200} /> */}
      </div>
    </div>
  );
};

export default PortfolioChart2;