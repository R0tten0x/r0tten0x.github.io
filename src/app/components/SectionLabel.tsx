export default function SectionLabel({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs text-muted mb-4">
      <span className="text-primary">$</span> cd ~/{label.toLowerCase()}
    </p>
  );
}
