"use client";
import QRC from "@/components/qrcode";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function Home() {
  const searchParams = useSearchParams();

  const data = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    return { url: params.get("url"), title: params.get("title") };
  }, [searchParams]);

  return (
    <main className="flex justify-center">
      {data.url ? (
        <div>
          <div className="text-xxl font-bold align-center">{data.title}</div>
          <div className="flex justify-center">
            <QRC value={data.url} />
          </div>
        </div>
      ) : (
        <div>{`Pas d'URL fournie`}</div>
      )}
    </main>
  );
}
