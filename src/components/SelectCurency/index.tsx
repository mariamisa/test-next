"use client";
import Select from "react-select";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

const currencies = [
  {
    value: "USD",
    label: "USD $",
  },
  {
    value: "EUR",
    label: "EUR €",
  },
  {
    value: "BTC",
    label: "BTC ฿",
  },
  {
    value: "JPY",
    label: "JPY ¥",
  },
];

export default function SelectComponent() {
  const [selectedCountry, setSelectedCountry] = useState(currencies[0]);
  const theme2: any = useTheme();

  const handleChange = (value: any) => {
    setSelectedCountry(value);
  };
  return (
    <Select
      value={selectedCountry}
      options={currencies}
      onChange={handleChange}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          border: "none",
        }),
        singleValue: (base) => ({
          ...base,
        }),
      }}
      theme={(theme) => ({
        ...theme,
        border: "none",
        colors: {
          ...theme.colors,
          primary: theme2.palette.primary.main,
        },
      })}
    />
  );
}
