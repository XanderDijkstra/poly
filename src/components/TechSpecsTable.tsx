interface SpecRow {
  property: string;
  value: string;
  unit?: string;
  standard?: string;
}

export function TechSpecsTable({ rows }: { rows: SpecRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-surface text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-medium">Property</th>
            <th className="px-4 py-3 font-medium">Value</th>
            <th className="px-4 py-3 font-medium">Standard</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r) => (
            <tr key={r.property}>
              <td className="px-4 py-3 text-foreground">{r.property}</td>
              <td className="px-4 py-3 font-mono tabular text-foreground">
                {r.value}
                {r.unit ? <span className="text-muted-foreground"> {r.unit}</span> : null}
              </td>
              <td className="px-4 py-3 text-muted-foreground font-mono text-xs">
                {r.standard ?? ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
