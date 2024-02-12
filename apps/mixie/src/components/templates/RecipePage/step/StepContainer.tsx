"use client";
import React from "react";
import Step from "./Step";
import { Step as StepType, Ingredient } from "@/types";
import type { ClassValue } from "clsx";
import CreateRecipeDialog from "@/components/elements/CreateRecipeDialog";
import { CreateRecipeTrigger } from "@/components/modules/OpenDialogs";

interface StepContainerProps {
  steps: StepType[];
  ingredients: Ingredient[];
  className?: string;
}

const StepContainer = ({
  steps,
  ingredients,
  className,
}: StepContainerProps) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-8">
      <ul className="flex w-full flex-col gap-2">
        {steps.map((step, index) => (
          <Step
            key={index}
            index={index}
            step={step}
            ingredients={ingredients}
          />
        ))}
      </ul>
      <CreateRecipeTrigger
        className="mx-auto w-1/2"
        text="Create your own recipe"
      />
    </div>
  );
};

export default StepContainer;
