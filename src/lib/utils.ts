/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ConsoleLog(...data: any[]) {
  return process.env.NODE_ENV === "development"
    ? console.log(...data)
    : () => {};
}
