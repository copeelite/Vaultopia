"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { DateTimePicker } from "@/components/ui/date-time-picker/date-time-picker";
const DatePickerForLedger = () => {
  return (
    // <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-9">
    //   <div className="tile  col-span-2 md:col-span-3 lg:col-span-5">
    //     <div className="flex flex-row">


    //     </div>
    //   </div>
    //   <div className="tile  col-span-1 md:col-span-2 lg:col-span-3">

    //   </div>

    // </div >

    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-8 lg:space-y-0 gap-y-2 overflow-hidden items-center ">
        <div className="sm:col-span-3 sm:col-start-1">
          <div className="flex flex-row items-center">
            <label htmlFor="start-date" className="text-sm font-medium w-10 mx-2">
              From:
            </label>
            <DateTimePicker aria-label="Select a date"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <div className="flex flex-row items-center">

            <label htmlFor="end-date" className="text-sm font-medium  w-10 mx-2">
              To:
            </label>
            <DateTimePicker aria-label="Select a date"
            />

          </div>
        </div>

        <div className="sm:col-span-2 ">
          <div className="flex flex-row items-center">

            <Button type="submit" className="bg-indigo-500 text-white rounded-lg ml-5">
              Submit
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DatePickerForLedger