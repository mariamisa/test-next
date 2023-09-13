import Select, { components } from "react-select";
import React from "react";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { useRouter, usePathname } from "next/navigation";

const countries: any = [
  { value: "en", label: "English", icon: "english" },
  { value: "ar", label: "Arabic", icon: "arabic" },
];

const SingleValue = ({ children, ...props }: any) => {
  const pathName = usePathname();

  return (
    <components.SingleValue {...props}>
      <Image
        src={`/images/${pathName.includes("ar") ? "arabic" : "english"}.svg`}
        alt="s-logo"
        width={32}
        height={32}
        style={{ paddingRight: "5px", paddingLeft: "5px" }}
      />
      {children}
    </components.SingleValue>
  );
};

export default function SelectComponent() {
  const theme2: any = useTheme();

  const router = useRouter();
  const pathName = usePathname();

  const handleChange = (value: any) => {
    console.log(pathName);
    router.push(`/${value.value}`);
  };
  return (
    <Select
      value={
        countries.find(({ value }: any) => pathName.includes(value)) ||
        countries[0]
      }
      options={countries}
      onChange={handleChange}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: "none",
          display: "flex",
          alignItems: "center",
        }),
        singleValue: (base) => ({
          ...base,
          display: "flex",
          alignItems: "center",
          zIndex: 5555,
          background: "none",
          fontWeight:700
        }),
      }}
      theme={(theme) => ({
        ...theme,
        border: "none",
        colors: {
          ...theme.colors,
          primary: theme2.palette.primary.main,
          display: "flex",
          alignItems: "center",
        },
      })}
      components={{
        SingleValue,
      }}
    />
  );
}
