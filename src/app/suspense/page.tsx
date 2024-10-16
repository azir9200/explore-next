import { title } from "@/src/components/primitives";
import One from "./components/one";
import Two from "./components/Two";
import { Suspense } from "react";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>Suspense Page</h1>
      <div className="max-w-7xl mx-auto flex gap-6">
        <Suspense>
          <One />
        </Suspense>

        <Two />
      </div>
    </div>
  );
}
