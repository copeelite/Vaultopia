import { z } from "zod";

// const LeaseDetailTemplateItem = z.object({
//   leaseDetailTemplateId: z.string().uuid(),
//   key: z.string(),
//   type: z.enum(["toggle", "radio", "multiple-choice", "input"]), // Using z.enum for strict type validation
//   options: z.string(), // Stored as JSON string
//   defaultValue: z.string().optional(), // Stored as JSON string, optional
// });

export const CreateLeaseDetailTemplate = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  //items: z.array(LeaseDetailTemplateItem), // Array of LeaseDetailTemplateItem
});
