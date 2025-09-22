import {
  LayoutIcon,
  BagIcon,
  TicketIcon,
  UserSquareIcon,
  MotorcycleIcon,
} from "@phosphor-icons/react";

export const navconfig = [
  {
    label: "Overview",
    href: "/overview",
    icon: LayoutIcon,
  },
  {
    label: "Trip Management",
    icon: BagIcon,
    children: [
      {
        label: "All Trips",
        href: "/trips",
      },
      {
        label: "Pending",
        href: "/pending",
      },
      {
        label: "Accepted",
        href: "/accepted",
      },
      {
        label: "Ongoing",
        href: "/ongoing",
      },
      {
        label: "Completed",
        href: "/completed",
      },
      {
        label: "Cancelled",
        href: "/cancelled",
      },
      {
        label: "Returning",
        href: "/returning",
      },
      {
        label: "Returned",
        href: "/returned",
      },
    ],
  },
  {
    label: "Promotion",
    icon: TicketIcon,
    children: [
      {
        label: "Banner Setup",
        href: "/banner",
      },
      {
        label: "Coupon Setup",
        href: "/coupon",
      },
      {
        label: "Discount Setup",
        href: "/discount",
      },
    ],
  },

  {
    label: "User Management",
    icon: UserSquareIcon,
    children: [
      {
        label: "Driver Setup",
        href: "/driver",
      },
      {
        label: "Withdraw",
        href: "/withdraw",
      },
      {
        label: "Customer Setup",
        href: "/customer",
      },
    ],
  },
  {
    label: "Vehicle Management",
    icon: MotorcycleIcon,
    children: [
      {
        label: "Vehicle Attribute Setup",
        href: "/vehicle-attribute",
      },
      {
        label: "Vehicle List",
        href: "/vehicle-list",
      },
      {
        label: "Add Vehicle",
        href: "/add-vehicle",
      },
    ],
  },
];
