import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn as classNames } from '@/lib/utils'
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Label } from "@/components/ui/label"
import { Save, FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

import { Property, Landlord } from '@/components/layout/dashboard/PropertyListTypes';
interface QuestionnaireProps {
  property: Property;
  landlord: Landlord;
}


const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
})
interface Project {
  name: string;
  selectionType: string;
  options?: Option[];
}

interface Option {
  value?: string;
  label?: string;
  amount?: number;
}

const RadioSelection: React.FC<{ options: Option[] }> = ({ options }) => (
  <RadioGroup defaultValue={options[0].value}>
    {options.map(option => (
      // <label key={option.value} className="flex flex-row items-center">
      //   <input type="radio" name={option.name} value={option.value} />
      //   <span className="ml-2">{option.label}</span>
      // </label>
      <div key={option.value} className="inline-flex items-center space-x-2">
        <RadioGroupItem value={option.value || ''} id="option-one" />
        <Label htmlFor="option-one">{option.label}</Label>
      </div>
    ))}
  </RadioGroup>
);





const MultipleChoiceSelection: React.FC<{ options: Option[] }> = ({ options }) => (
  <div>
    {options.map(option => (
      // <label key={option.value} className="inline-flex items-center">
      //   <input type="checkbox" name={option.name} value={option.value} />
      //   <span className="ml-2">{option.label}</span>
      // </label>
      <div className="inline-flex items-center space-x-2 mr-2" key={option.value}>
        <Checkbox />
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {option.label}
        </label>
      </div>
    ))}
  </div>
);

const ToggleSelection = () => (
  <div className="flex items-center space-x-2">
    <Switch />
    <Label htmlFor="airplane-mode">On-going lease agreement</Label>
  </div>
);
const InputForm: React.FC<{ options: Option[] }> = ({ options }) => (
  <div>
    <div className="flex items-center space-x-2">
      <Label htmlFor="airplane-mode">${
        options[0].amount !== undefined ?
          new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }).format(options[0].amount) : ''}</Label>
    </div>
  </div>
);

const Questionnaire: React.FC<QuestionnaireProps> = ({ property, landlord }) => {
  const projects: Project[] = [
    { name: 'Fixed Term Lease Agreement?', selectionType: 'toggle' },

    { name: 'Ontario Standard Lease Signed?', selectionType: 'radio', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }] },

    { name: 'NOTIFICATIONS', selectionType: 'multiple-choice', options: [{ value: 'email', label: 'Email' }] },

    { name: 'Rent Increase Control', selectionType: 'radio', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }] },

    { name: 'Condominium?', selectionType: 'radio', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }] },

    {
      name: 'Utilities to be responsible by the tenants', selectionType: 'multiple-choice', options: [
        { value: 'gas', label: 'Gas' },
        { value: 'hydro', label: 'Hydro' },
        { value: 'water', label: 'Water' },
      ]
    },

    { name: 'Parking?', selectionType: 'radio', options: [{ value: 'yes', label: `Yes-1` }, { value: 'no', label: 'No' }] },


    { name: 'Additional Terms?', selectionType: 'radio', options: [{ value: 'yes', label: `Yes` }, { value: 'no', label: 'No' }] },


    { name: 'Deposit at Landlord?', selectionType: 'input', options: [{ amount: property.totalDeposit }] },

    { name: 'Key Deposit', selectionType: 'input', options: [{ amount: property.totalKeyDeposit }] },

    { name: '', selectionType: '', options: [{ amount: 300 }] },


  ];

  const renderSelectionComponent = (selectionType: string, options?: Option[]) => {
    switch (selectionType) {
      case 'radio':
        return <RadioSelection options={options || []} />;
      case 'multiple-choice':
        return <MultipleChoiceSelection options={options || []} />;
      case 'toggle':
        return <ToggleSelection />;
      case 'input':
        return <InputForm options={options || []} />;
      default:
        return null;
    }
  }
  return (
    <div className="overflow-x-auto">

      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex rounded-md">
            <div className={`flex-1 items-center justify-between truncate rounded-r-md`}>
              <div className="flex-1 truncate py-2 text-sm">
                <p className="font-medium  ">
                  {project.name}
                </p>
              </div>
              <div className="flex-shrink-0 pr-2">
                {renderSelectionComponent(project.selectionType, project.options)}
              </div>
            </div>
          </li>
        ))}

        <div>
          <div className='flex flex-row gap-2'>
            {/* <div>
              <Button className='bg-indigo-400 text-white hover:bg-indigo-500' type="submit"><Save></Save></Button>
            </div> */}
            <div>
              <Button className='bg-indigo-400 text-white hover:bg-indigo-500 text-sm mr-4'>
                <FileDown className='mr-2' />
                {/* <a href='https://drive.google.com/uc?export=download&id=1oD8R1_0Ld1TSCiFfzmpUAuY8ROEoJ_oH' download>
                  Lease Agreement
                </a> */}
                <a href="/Rental_Unit-Lease_agreement.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
                  Lease Agreement
                </a>
              </Button>
            </div>
          </div>

        </div>
      </ul>
    </div>

  )
}

export default Questionnaire