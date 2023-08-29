import { DiscreteColorLegend, RadialChart } from "react-vis";

const data = [
  { angle: 12, label: "Stocks", padAngle: 5 },
  { angle: 4, label: "Bonds", padAngle: 5 },
  { angle: 3, label: "Whiskey", padAngle: 5 },
  { angle: 1, label: "Crypto", padAngle: 5 }
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
  { title: "First", strokeWidth: 10 },
  { title: "Second", strokeWidth: 10 }
];

const PortfolioChart3 = () => {
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

export default PortfolioChart3;