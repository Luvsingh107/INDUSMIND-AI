"use client";

import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  icon: ReactNode;
  children: ReactNode;
};

export default function SectionCard({
  title,
  description,
  icon,
  children,
}: Props) {
  return (
    <section className="rounded-3xl border bg-white shadow-sm">

      <div className="border-b p-6">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-slate-100 p-3">
            {icon}
          </div>

          <div>

            <h2 className="text-xl font-semibold">
              {title}
            </h2>

            {description && (
              <p className="mt-1 text-sm text-slate-500">
                {description}
              </p>
            )}

          </div>

        </div>

      </div>

      <div className="p-6">

        {children}

      </div>

    </section>
  );
}