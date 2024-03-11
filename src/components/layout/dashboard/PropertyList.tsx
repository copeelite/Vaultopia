

// SomeComponent.ts or SomeService.ts

import { ManagementSystem } from './PropertyListTypes';


export const propertyList: ManagementSystem = {
    landlords: [
        {
            id: "landlord1",
            name: "Alex Johnson",
            email: "alexjohnson@example.com",
            phoneNumber: "555-6789-012",
        },
        {
            id: "landlord2",
            name: "Sarah Smith",
            email: "sarahsmith@example.com",
            phoneNumber: "555-9876-543",
        },
    ],
    properties: [
        {
            id: "1",
            landlordId: "landlord1",
            propertyName: "Downtown Condo",
            address: "HD12899 (123 Main St)",
            city: "Toronto",
            province: "ON",
            postalCode: "M5V 2T6",
            totalRent: 31200,
            totalDeposit: 2600,
            totalKeyDeposit: 300,
            tenancyStart: "Jan 1, 2023",
            tenancyEnd: "Jan 1, 2024",
            maintenanceRequests: [],
        },
        {
            id: "2",
            landlordId: "landlord1",
            propertyName: "Suburban House",
            address: "HD12900 (456 Elm St)",
            city: "Mississauga",
            province: "ON",
            postalCode: "L5B 3C2",
            totalRent: 125000,
            totalDeposit: 5000,
            totalKeyDeposit: 300,
            tenancyStart: "Feb 1, 2023",
            tenancyEnd: "Jan 31, 2024",
            maintenanceRequests: [],
        },
        {
            id: "3",
            landlordId: "landlord2",
            propertyName: "City Apartment",
            address: "HD12901 (789 Oak St)",
            city: "Vancouver",
            province: "BC",
            postalCode: "V6H 2J3",
            totalRent: 100000,
            totalDeposit: 10000,
            totalKeyDeposit: 3000,
            tenancyStart: "Mar 15, 2023",
            tenancyEnd: "Mar 14, 2024",
            maintenanceRequests: [],
        },
    ],
    maintenanceRequests: [
        {
            id: "mr1",
            propertyId: "property1",
            description: "Leak in bathroom",
            reportedOn: "Feb 15, 2023",
            status: "Pending",
            startedOn: "Feb 16, 2023",
            completedOn: "Feb 17, 2023",
        },
        {
            id: "mr2",
            propertyId: "property2",
            description: "HVAC issues",
            reportedOn: "Apr 5, 2023",
            status: "Completed",
            startedOn: "Feb 16, 2023",
            completedOn: "Feb 17, 2023",
        },
        {
            id: "mr3",
            propertyId: "property2",
            description: "AC issues",
            reportedOn: "Apr 26, 2023",
            status: "Failed",
            startedOn: "Feb 16, 2023",
            completedOn: "Feb 17, 2023",
        },
    ],
};
