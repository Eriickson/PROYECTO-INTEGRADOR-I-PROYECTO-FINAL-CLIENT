// My Elements
import { IOption } from "@/shared";

interface IGetYears {
  years: IOption[];
  yearsBetween: IOption[];
}

export function getYears(minYear: number): IGetYears {
  const years: IOption[] = [];
  const yearsBetween: IOption[] = [];

  for (let i = new Date().getFullYear() + 1; i >= 1960; i--) {
    years.push({ label: i.toString(), value: i });
  }
  for (let i = new Date().getFullYear() + 1; i >= minYear; i--) {
    yearsBetween.push({ label: i.toString(), value: i });
  }

  return { years, yearsBetween };
}
