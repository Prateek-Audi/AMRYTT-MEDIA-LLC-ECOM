import { useState, useMemo, useCallback } from "react";

type FilterOptions = {
  label: string;
  value: string;
};

type UseFiltersResult<T> = {
  filterOptions: Record<keyof T, FilterOptions[]>;
  filters: Record<keyof T, string>;
  handleFilterChange: (key: keyof T, value: string) => void;
};

export function useFilters<T extends Record<string, any>>(
  data: T[],
  filterKeys: (keyof T)[]
): UseFiltersResult<T> {
  const [filters, setFilters] = useState<Record<keyof T, string>>(() =>
    filterKeys.reduce((acc, key) => {
      acc[key] = "ALL";
      return acc;
    }, {} as Record<keyof T, string>)
  );

  const filterOptions = useMemo(() => {
    const options = {} as Record<keyof T, FilterOptions[]>;

    filterKeys.forEach((key) => {
      const uniqueValues = Array.from(new Set(data.map((item) => item[key])));
      options[key] = [
        { label: "All", value: "ALL" },
        ...uniqueValues
          .filter(value => value !== undefined && value !== null)
          .map((value) => ({ 
            label: String(value), 
            value: String(value) 
          })),
      ];
    });

    return options;
  }, [data, filterKeys]);

  const handleFilterChange = useCallback((key: keyof T, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  }, []);

  return { filterOptions, filters, handleFilterChange };
}