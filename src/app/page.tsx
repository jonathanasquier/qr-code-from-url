"use client";
import QRC from "@/components/qrcode";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useMemo } from "react";

const DisplayQRCodeAndTitle: React.FC = () => {
  const searchParams = useSearchParams();

  const data = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    return { url: params.get("url"), title: params.get("title") };
  }, [searchParams]);

  return (
    <div className="flex justify-center">
      {data.url ? (
        <div className="mt-5">
          <div className="text-2xl font-bold justify-center text-center">
            {data.title}
          </div>
          <div className="flex justify-center">
            <QRC value={data.url} />
          </div>
        </div>
      ) : (
        <div>{`Pas d'URL fournie`}</div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <Suspense>
      <DisplayQRCodeAndTitle />
    </Suspense>
  );
}
