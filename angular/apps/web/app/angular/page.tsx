"use client";

import React, { Suspense } from "react";
import { LoadedAngularInServerError } from "../../lib/loaded-angular-in-server-error";
import SuspendingLazyAngularWrapper from "../../angular-helper-components/suspending-lazy-angular-wrapper";

const angularComponentLoader =
  typeof IS_SERVER !== "undefined" && IS_SERVER
    ? () => Promise.reject(new LoadedAngularInServerError())
    : () => import("angular-module/dist/demo").then((m) => m.DemoComponent);

export default function Index() {
  return (
    <div style={{ paddingLeft: 72 }}>
      <Suspense fallback={<p>...</p>}>
        <SuspendingLazyAngularWrapper
          name="demo"
          serverFallback={<p>...</p>}
          componentLoader={angularComponentLoader}
        />
      </Suspense>
    </div>
  );
}
