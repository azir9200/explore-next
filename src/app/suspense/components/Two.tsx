import { delay } from "@/src/utils/delay";

export default async function Two() {
  await delay(5000);

  return (
    <div className="border-4 border-red-600 rounded-md h-300 w-300  p-4">
      <h1> One Suspense Page STATIC .</h1>
    </div>
  );
}
