export default function ScanlineOverlay() {
  return (
    <>
      {/* Static scanlines */}
      <div
        className="pointer-events-none fixed inset-0 z-[9998] opacity-[0.04]"
        style={{
          background:
            "repeating-linear-gradient(to bottom, transparent 0px 2px, rgba(0, 255, 65, 0.08) 2px 4px)",
        }}
      />
      {/* Moving scanline bar */}
      <div
        className="pointer-events-none fixed inset-x-0 z-[9998] h-[2px] opacity-[0.07]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.4), transparent)",
          height: "100px",
          animation: "scanline-move 8s linear infinite",
        }}
      />
    </>
  );
}
