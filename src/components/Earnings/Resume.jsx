import { Button } from "@/components/ui/button";
import { getData } from "../EarningTable/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Resume({ className }) {
  var totalEarnings = 0;
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  //sumar todos los price del array de data
  data.map((item) => {
    totalEarnings += item.price;
  });

  return (
    <Card className={` p-5 bg-white ${className} `}>
      <CardHeader>
        <CardTitle>Total Earnings</CardTitle>
        <CardDescription>This month</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Label className="font-normal leading-snug text-base ">
              Earnings
            </Label>
            {totalEarnings === 0 ? (
              <Skeleton className="h-6 w-12 rounded-full" />
            ) : (
              <p className="text-2xl font-semibold leading-none tracking-tight">
                {totalEarnings} €
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <Label className="font-normal leading-snug text-base ">Works</Label>
            <p className="text-2xl font-semibold leading-none tracking-tight">
              12
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Label className="font-normal leading-snug text-base ">
              New Clients
            </Label>
            <p className="text-2xl font-semibold leading-none tracking-tight">
              1
            </p>
          </div>
          <div className="flex flex-col">
            <Label className="font-normal leading-snug text-base ">
              probes
            </Label>
            <p className="text-2xl font-semibold leading-none tracking-tight">
              3
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
