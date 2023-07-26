export const dynamic = "force-dynamic";

import Image from "next/image";
import { Metadata } from "next/types";
import { dataProduct } from "@/constants";
import styles from "./page.module.css";

export async function generateMetadata(data: any): Promise<Metadata> {
  const id = data?.searchParams?.d;
  const product = dataProduct[id];

  return {
    title: product ? product.name : "Thông tin sản phẩm",
    openGraph: {
      images: product ? [product.img] : [""],
    },
  };
}

export default function Home(props: any) {
  const id = props?.searchParams?.d;
  const product = dataProduct[id];

  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <Image
          className={styles.logo}
          src={product?.img || "/1.jpg"}
          alt={product?.name || "Thông tin sản phẩm"}
          layout="fill"
          priority
        />
      </div>
      <div>
        <p>
          Tên sản phẩm: <span>{product?.name}</span>
        </p>
        <p>
          Mã sản phẩm: <span>{product?.code}</span>
        </p>
      </div>
    </main>
  );
}
