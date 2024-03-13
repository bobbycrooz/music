import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs)
{
  return twMerge(clsx(inputs))
}

export function formatPhone(phoneNumber)
{
  if (/^\+\d{1,3}\d{10}$/.test(phoneNumber))
  {
    return phoneNumber;
  }

  if (!phoneNumber.startsWith("0"))
  {
    phoneNumber = "0" + phoneNumber;
  }

  return "+234" + phoneNumber.slice(1);
}