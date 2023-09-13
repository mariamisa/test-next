"use client";
import { useTranslation } from "../i18n";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { languages, fallbackLng } from "../i18n/settings";
import clsx from "clsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Search from "../../components/Search";
import SelectLang from "../../components/SelectLang";
import SelectCurrency from "../../components/SelectCurency";
import Menue from "../../components/Menue";
import Carousel from "../../components/Carusel";
import Card from "../../components/Card";
import styles from "./page.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#151875",
    },
    secondary: {
      main: "#0E0E0E",
    },
  },
  typography: {
    fontFamily: poppins.className,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
  },
});
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({ params: { lng } }: any) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <ThemeProvider theme={theme}>
      <main className={clsx(styles.main, poppins.className)}>
        <div className={styles.headerBox}>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <Image
                src="/images/logo.svg"
                alt="Vercel Logo"
                width={48}
                height={48}
                priority
              />
              <Typography
                className={styles.logoText}
                variant="h3"
                component="h1"
                color="primary"
              >
                {t("k_store")}
              </Typography>
            </div>
            <Search t={t} />
            <div className={styles.selectSection}>
              <Box sx={{ mr: 1 }}>
                <SelectLang />
              </Box>
              <Box>
                <SelectCurrency />
              </Box>
            </div>
          </div>
          <div className={styles.menueContainer}>
            <Menue
              menueList={[
                t("Home"),
                t("Products"),
                t("Categories"),
                t("Offers"),
                t("Contact_Us"),
              ]}
            />

            <Menue
              menueList={["messages", "header", "wishlist", "man", "cart"]}
              paddingRight={32}
              withIcon
            />
          </div>
        </div>
        <div className={styles.carosulContainer}>
          <Carousel />
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.sectionHeader}>
            <Typography sx={{ fontWeight: 600 }}>{t("Categories")}</Typography>
            <Link href={"#"} className={styles.link}>
              {t("SEE_ALL")}{" "}
              <Image src="/images/all.svg" alt="all" width={16} height={8} />
            </Link>
          </div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.productsContainerAll}>
            <Image
              src="/images/left.svg"
              alt="arrow"
              width={40}
              height={40}
              priority
              style={{ placeSelf: "center" }}
            />
            <div className={styles.grid}>
              {[
                { imageName: "product4", textLink: t("ELECTRONICS") },
                { imageName: "product2", textLink: t("ELECTRONICS") },
                { imageName: "product1", textLink: t("ELECTRONICS") },
                { imageName: "product3", textLink: t("ELECTRONICS") },
              ].map(({ imageName, textLink }: any) => (
                <Card key="el" imageName={imageName} label={textLink} />
              ))}
            </div>
            <Image
              src="/images/rigth.svg"
              alt="arrow"
              width={40}
              height={40}
              priority
              style={{ placeSelf: "center" }}
            />
          </div>
          <Image
            src="/images/dots.svg"
            alt="dot"
            width={109.001}
            height={24}
            priority
            style={{ placeSelf: "center", marginTop: 48 }}
          />
          <div className={styles.footer}>
            <Image
              src="/images/footer2.png"
              alt="products"
              width={575}
              height={611}
              priority
            />
            <div>
              <Image
                src="/images/footer1.png"
                alt="products"
                width={575}
                height={284}
                priority
              />
              <Image
                src="/images/footer3.png"
                alt="products"
                width={575}
                height={284}
                style={{ marginTop: "36.5px" }}
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
