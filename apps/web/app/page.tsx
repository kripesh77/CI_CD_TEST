import styles from "./page.module.css";
import { prisma } from "@repo/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div className={styles.page}>
      <div>username: {user?.username}</div>
      <div>password: {user?.password}</div>
    </div>
  );
}
