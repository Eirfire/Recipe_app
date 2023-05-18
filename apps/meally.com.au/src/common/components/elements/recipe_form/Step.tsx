import { TrashIcon } from '@heroicons/react/24/outline';
import { TextArea } from 'shared';
import {  useFormContext } from 'react-hook-form';
import { Recipe } from 'libs/types';

interface StepProps {
  index: number;
  handleDelete: (index: number) => void;
}

const Step = ({ index, handleDelete }: StepProps) => {
  const { control, getValues } = useFormContext<Recipe>();

  return (
    <section
      key={index}
      className="relative flex flex-col items-start p-3 rounded-2xl h-fit w-full flex-grow bg-white text-black dark:bg-dark_grey dark:text-white"
    >
      <h1 className="font-medium font-Roboto text-step0">Step {index + 1}</h1>
      <TextArea
        defaultValue={getValues(`steps.${index}.step_body`)}
        id={`steps.${index}.step_body`}
        label=""
        name={`steps.${index}.step_body`}
        control={control}
        className="shadow-none outline outline-1 "
      />
      <button
        onClick={() => handleDelete(index)}
        type="button"
        className="absolute right-2 top-2"
      >
        <TrashIcon className="h-6 w-6" />
      </button>
    </section>
  );
};

export { Step };
