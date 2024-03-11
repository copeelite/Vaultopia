// PropertyManagementTypes.ts

export interface Landlord {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface Property {
  id: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  landlordId: string; // Reference to the Landlord's ID
  propertyName: string;
  totalRent: number;
  totalDeposit?: number;
  totalKeyDeposit?: number;
  tenancyStart: string;
  tenancyEnd: string;
  maintenanceRequests: MaintenanceRequest[];
}

export interface MaintenanceRequest {
  id: string;
  propertyId: string; // Reference to the Property's ID
  description: string;
  reportedOn: string;
  status: "Pending" | "Completed" | "Failed";
  startedOn?: string;
  completedOn?: string;
  title?: string;
}

export interface ManagementSystem {
  landlords: Landlord[];
  properties: Property[];
  maintenanceRequests: MaintenanceRequest[];
}
