import backgroundImg from "@/images/background.jpg";

export default function BackgroundAccent() {
  const fade =
    "radial-gradient(circle at 100% 100%, black 25%, transparent 100%)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-0 -z-10 w-[min(1500px,94vw)]"
      style={{
        aspectRatio: "711 / 350",
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundSize: "100% 100%",
        WebkitMaskImage: fade,
        maskImage: fade,
      }}
    />
  );
}
