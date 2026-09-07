import backgroundImg from "@/images/background.jpg";

export default function BackgroundAccent() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[1200px] w-[min(820px,90vw)]"
      style={{
        backgroundImage: `radial-gradient(circle at 100% 100%, transparent 20%, var(--background) 75%), url(${backgroundImg.src})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "bottom right, bottom right",
        backgroundSize: "100% 100%, 100% auto",
      }}
    />
  );
}
