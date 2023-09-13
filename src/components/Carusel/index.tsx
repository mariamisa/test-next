import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function Carousell() {
  return (
    <Carousel>
      <Image
        src="/images/placeholder.png"
        alt="Vercel Logo"
        width={971}
        height={472}
        style={{ borderRadius: 40 }}
      />
      <Image
        src="/images/image2.png"
        alt="Vercel Logo"
        width={971}
        height={472}
        style={{ borderRadius: 40 }}
      />
      <Image
        src="/images/image3.png"
        alt="Vercel Logo"
        width={971}
        height={472}
        style={{ borderRadius: 40 }}
      />
    </Carousel>
  );
}
