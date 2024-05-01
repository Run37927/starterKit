import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/db";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <MaxWidthWrapper className="mb-12 mt-8 flex flex-col md:flex-row-reverse md:items-start md:justify-center">
      <h1>insert body here</h1>
    </MaxWidthWrapper>
  );
}
