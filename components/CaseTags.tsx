interface CaseTagsProps {
  tags: string[];
}

const palette = [
  { color: "#7c6af7", bg: "rgba(124,106,247,0.10)", border: "rgba(124,106,247,0.25)" },
  { color: "#2db8a0", bg: "rgba(45,184,160,0.10)", border: "rgba(45,184,160,0.25)" },
  { color: "#e08b3a", bg: "rgba(224,139,58,0.10)",  border: "rgba(224,139,58,0.25)"  },
  { color: "#d45f8c", bg: "rgba(212,95,140,0.10)",  border: "rgba(212,95,140,0.25)"  },
  { color: "#4a9fd4", bg: "rgba(74,159,212,0.10)",  border: "rgba(74,159,212,0.25)"  },
  { color: "#8db83b", bg: "rgba(141,184,59,0.10)",  border: "rgba(141,184,59,0.25)"  },
];

export default function CaseTags({ tags }: CaseTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag, i) => {
        const { color, bg, border } = palette[i % palette.length];
        return (
          <span
            key={tag}
            className="inline-block text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ color, background: bg, border: `1px solid ${border}` }}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
