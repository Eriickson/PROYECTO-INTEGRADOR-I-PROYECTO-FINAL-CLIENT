import { useState } from "react";

interface IUseToogleReturn {
  value: boolean;
  toggle: (newValue?: boolean) => void;
}

export const useToggle = (state = false): IUseToogleReturn => {
  const [value, setValue] = useState<boolean>(state);

  function toggle(newValue?: boolean) {
    if (typeof newValue === "boolean") {
      setValue(newValue);
    }
    setValue(!value);
  }

  return { value, toggle };
};
