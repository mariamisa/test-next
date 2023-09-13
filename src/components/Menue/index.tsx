import Box from "@mui/material/Box";
import styles from "./menue.module.css";
import Link from "next/link";
import Image from "next/image";

export default function MenuComponent({
  menueList = [],
  withIcon = false,
  paddingRight = 40,
}: any) {
  return (
    <Box className={styles.menueContainer}>
      {menueList?.map((page: string) => (
        <Link
          className={styles.link}
          key={page}
          href={`/${page}`}
          style={{ paddingRight }}
        >
          {withIcon ? (
            <Image
              src={`/images/${page}.svg`}
              alt={page}
              width={24}
              height={24}
            />
          ) : (
            page
          )}
        </Link>
      ))}
    </Box>
  );
}
