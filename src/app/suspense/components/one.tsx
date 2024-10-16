import { delay } from "@/src/utils/delay";

export default async function One() {
  await delay(5000);

  return (
    <div className="border-4 border-emerald-600 rounded-md size-[300px] p-4">
      <h1> One Suspense Page Dynamic .</h1>
    </div>
  );
}
