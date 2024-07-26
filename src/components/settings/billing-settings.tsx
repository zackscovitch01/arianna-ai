import { onGetSubscriptionPlan } from "@/actions/settings";
import Section from "../section-label";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Plus } from "lucide-react";

type Props = {};
const BillingSetting = async (props: Props) => {
  //WIP: Add stripe subscription form
  const plan = await onGetSubscriptionPlan();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <Section
          label="Billing Settings"
          message="Add payment information, upgrade and modify your plan."
        />
      </div>
      <div className="lg:col-span-2 flex justify-start lg:justify-center">
        <Card className="border-dashed bg-cream dark:bg-neutral-950 border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center">
          <CardContent className="flex gap-2 items-center">
            <div className="rounded-full border-2 p-1">
              <Plus className="text-gray-400 dark:text-white" />
            </div>
            <CardDescription className="font-semibold dark:text-white">
              Upgrade Plan
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-xl font-semibold mb-2">Current Plan</h3>
        <p className="text-sm font-semibold">{plan}</p>
        <p className="text-sm font-light">
          {plan === "PRO"
            ? "Start growing your business today"
            : plan === "ULTIMATE"
            ? "The ultimate growth plan that sets you up for success"
            : "Perfect if you are just getting started with Arianna AI"}
        </p>
      </div>
    </div>
  );
};
export default BillingSetting;
