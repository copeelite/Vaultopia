
import {z} from "zod"
import {LeaseDetailTemplate} from "@prisma/client"

import {ActionState} from "@/lib/create-safe-action"

import {CreateLeaseDetailTemplate}  from "./schema"

export type InputType = z.infer<typeof CreateLeaseDetailTemplate>
export type ReturnType = ActionState<InputType, LeaseDetailTemplate>