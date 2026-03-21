type TagPillProps = {
  text: string;
};

export default function TagPill({ text }: TagPillProps) {
  return (
    <div className="text-secondary flex items-center rounded-full bg-slate-300/40 px-3 py-1 text-xs leading-5 font-medium">
      {text}
    </div>
  );
}
