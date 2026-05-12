export default function SectionLabel({ label }: { label: string }) {
  return (
    <div className="glass inline-flex rounded-full px-4 py-1.5 mb-5">
      <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-primary/70">
        {label}
      </span>
    </div>
  );
}
