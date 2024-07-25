import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/constants/landing-page";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <section className="p-3">
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4">
          <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
            An AI powered sales assistant chatbot
          </span>
          <h1 className="inline-block text-transparent bg-clip-text text-[90px] lg:text-[100px] bg-gradient-to-r from-[#f58a1f] via-[#FDDCB6] to-orange font-bold">
            Arianna AI
          </h1>
          <p className="text-center max-w-[440px]">
            Your AI powered sales assistant! Embed Arianna AI into any website
            with just a snippet of code.
          </p>
          <Button className="bg-orange font-bold text-white px-4">
            Get Started
          </Button>
          <Image
            src="/images/iphonearianna.png"
            width={400}
            height={100}
            alt="logo"
            className="max-w-lg object-contain"
          />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-8">
        <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our straightforward pricing plans are tailored to fit your needs. If{" "}
          {" you're"} not ready to commit you can get started for free.
        </p>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => {
          return (
            <Card
              key={card.title}
              className={clsx("w-[300px] flex flex-col justify-between", {
                "border-2 border-primary": card.title === "Ultimate",
              })}
            >
              <CardHeader>
                <CardTitle className="text-orange">{card.title}</CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.title)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">
                  <span>/ month</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => {
                    return (
                      <div key={feature} className="flex gap-2">
                        <Check />
                        <p>{feature}</p>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href={`/dashboard?plan=${card.title}`}
                  className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
