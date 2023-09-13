import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
export default function Card({ imageName, label }: any) {
  return (
    <div>
      <Image
        src={`/images/${imageName}.png`}
        height={150}
        width={150}
        alt="product"
        className={styles.image}
      />
      <p className={styles.label}>{label}</p>
    </div>
  );
}
