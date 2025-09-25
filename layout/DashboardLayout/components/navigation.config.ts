import {
  LayoutIcon,
  BagIcon,
  TicketIcon,
  UserSquareIcon,
  MotorcycleIcon,
} from "@phosphor-icons/react";

export const navconfig = [
  { label: "Overview", href: "/overview", icon: LayoutIcon },

  {
    label: "Trip Management",
    icon: BagIcon,
    children: [
      { label: "All Trips", href: "/trips/all" },
      { label: "Pending", href: "/trips/pending" },
      { label: "Accepted", href: "/trips/accepted" },
      { label: "Ongoing", href: "/trips/ongoing" },
      { label: "Completed", href: "/trips/completed" },
      { label: "Cancelled", href: "/trips/cancelled" },
      { label: "Returning", href: "/trips/returning" },
      { label: "Returned", href: "/trips/returned" },
    ],
  },

  {
    label: "Promotion",
    icon: TicketIcon,
    children: [
      { label: "Banner Setup", href: "/promotion/banner" },
      { label: "Coupon Setup", href: "/promotion/coupon" },
      { label: "Discount Setup", href: "/promotion/discount" },
    ],
  },

  {
    label: "User Management",
    icon: UserSquareIcon,
    children: [
      { label: "Drivers", href: "/users/drivers" },
      { label: "Customers", href: "/users/customers" },
      { label: "Withdrawals", href: "/users/withdrawals" },
    ],
  },

  {
    label: "Vehicle Management",
    icon: MotorcycleIcon,
    children: [
      { label: "Attributes", href: "/vehicles/attributes" },
      { label: "List", href: "/vehicles" },
      { label: "Add Vehicle", href: "/vehicles/new" },
    ],
  },
];
