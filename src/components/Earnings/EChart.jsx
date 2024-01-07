import React, { useRef, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    name: "Junuary",
    earning: 4000,
  },
  {
    name: "february",
    earning: 3000,
  },
  {
    name: "March",
    earning: 2000,
  },
  {
    name: "April",
    earning: 2780,
  },
  {
    name: "May",
    earning: 1890,
  },
  {
    name: "June",
    earning: 2390,
  },
  {
    name: "July",
    earning: 3490,
  },
];

export default function EChart({ className }) {
  const containerRef = useRef();
  const [width, setWidth] = useState(0);

  return (
    <Card className={"col-span-2 p-9 bg-white"}>
      <ResponsiveContainer>
        <BarChart
          className={`${className} `}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="earning" fill="#1e274c" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
