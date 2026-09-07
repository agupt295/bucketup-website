import Image from "next/image";
import frontImg from "@/images/front-img.svg";

export default function FrontImage() {
  return (
    <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-2xl shadow-indigo-500/20 ring-4 ring-white sm:h-80 sm:w-80 dark:ring-zinc-900">
      <Image
        src={frontImg}
        alt="Bucketus"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
