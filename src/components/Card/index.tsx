import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import { Box, useTheme } from "@mui/material";
export default function Card({ imageName, label }: any) {
  const theme = useTheme();
  return (
    <div>
      <Image
        src={`/images/${imageName}.png`}
        height={150}
        width={150}
        alt="product"
        className={styles.image}
      />
      <Box className={styles.label}>
        <Link color={theme.palette.secondary.main} href={"#"}>
          {label}
        </Link>
      </Box>
    </div>
  );
}
