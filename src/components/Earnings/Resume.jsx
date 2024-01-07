import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Resume({ className }) {
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
            <p className="text-2xl font-semibold leading-none tracking-tight">
              2312€
            </p>
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
