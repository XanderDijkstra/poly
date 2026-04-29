import { FormEvent, useEffect, useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";

interface RFQ {
  id: number;
  submitted_at: string;
  contact_name: string;
  email: string;
  phone: string | null;
  company: string;
  country: string;
  vat: string;
  polymer: string;
  grade: string | null;
  application: string;
  quantity: string;
  frequency: string;
  delivery: string;
  required_by: string | null;
  existing_supplier: string | null;
  target_price_eur_t: number | null;
  notes: string | null;
  free_domain_flag: boolean;
  lead_score: number;
  status: string;
  internal_notes: string | null;
}

const STATUSES = ["new", "contacted", "qualified", "won", "lost", "archived"];

const STATUS_COLOR: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-amber-100 text-amber-800",
  qualified: "bg-purple-100 text-purple-800",
  won: "bg-green-100 text-green-800",
  lost: "bg-gray-200 text-gray-700",
  archived: "bg-gray-100 text-gray-500",
};

export default function AdminPage() {
  usePageMeta({
    title: "Admin · RFQ inbox",
    noindex: true,
  });

  const [token, setToken] = useState<string>(() =>
    typeof window !== "undefined"
      ? window.localStorage.getItem("admin_token") ?? ""
      : ""
  );
  const [pwInput, setPwInput] = useState("");
  const [rfqs, setRfqs] = useState<RFQ[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  async function fetchRfqs(authToken: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/rfqs", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.status === 401) {
        setError("Wrong password.");
        setToken("");
        window.localStorage.removeItem("admin_token");
        return;
      }
      if (!res.ok) throw new Error("Failed to load RFQs");
      const data = (await res.json()) as { rfqs: RFQ[] };
      setRfqs(data.rfqs);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) void fetchRfqs(token);
  }, [token]);

  function login(e: FormEvent) {
    e.preventDefault();
    window.localStorage.setItem("admin_token", pwInput);
    setToken(pwInput);
    setPwInput("");
  }

  function logout() {
    window.localStorage.removeItem("admin_token");
    setToken("");
    setRfqs(null);
  }

  async function updateRfq(
    id: number,
    patch: { status?: string; internal_notes?: string }
  ) {
    try {
      const res = await fetch("/api/admin/rfqs", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, ...patch }),
      });
      if (!res.ok) throw new Error("Update failed");
      setRfqs((prev) =>
        prev?.map((r) => (r.id === id ? { ...r, ...patch } : r)) ?? null
      );
    } catch (err) {
      alert(err instanceof Error ? err.message : "Update failed");
    }
  }

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <form
          onSubmit={login}
          className="w-full max-w-sm rounded-lg border border-border bg-background p-6 shadow-sm"
        >
          <h1 className="font-heading text-xl font-bold text-primary mb-1">
            Admin
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Enter the admin password to view incoming RFQs.
          </p>
          <input
            type="password"
            required
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            placeholder="Password"
            className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-secondary"
            autoFocus
          />
          {error && (
            <div className="mt-2 text-xs text-error">{error}</div>
          )}
          <button
            type="submit"
            className="mt-4 w-full bg-secondary text-secondary-foreground rounded-md py-2 text-sm font-medium hover:bg-secondary/90"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }

  const filtered = (rfqs ?? []).filter((r) => {
    if (statusFilter !== "all" && r.status !== statusFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        r.company.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.contact_name.toLowerCase().includes(q) ||
        r.polymer.toLowerCase().includes(q) ||
        r.application.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-lg font-bold text-primary">
            RFQ Inbox
          </h1>
          <p className="text-xs text-muted-foreground font-mono">
            {rfqs?.length ?? 0} total · {filtered.length} shown
          </p>
        </div>
        <button
          onClick={logout}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Sign out
        </button>
      </header>

      <div className="px-6 py-3 border-b border-border flex items-center gap-3 flex-wrap">
        <input
          type="search"
          placeholder="Search company, email, name, polymer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-border rounded-md px-3 py-1.5 text-sm flex-1 min-w-[240px] focus:outline-none focus:border-secondary"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-border rounded-md px-3 py-1.5 text-sm bg-background"
        >
          <option value="all">All statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button
          onClick={() => void fetchRfqs(token)}
          className="text-xs text-secondary hover:underline"
        >
          Refresh
        </button>
      </div>

      {loading && (
        <div className="p-6 text-sm text-muted-foreground">Loading...</div>
      )}
      {error && <div className="p-6 text-sm text-error">{error}</div>}

      {!loading && rfqs && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-surface text-left text-xs uppercase tracking-wide text-muted-foreground border-b border-border">
              <tr>
                <th className="px-4 py-2 font-medium">Date</th>
                <th className="px-4 py-2 font-medium">Score</th>
                <th className="px-4 py-2 font-medium">Company</th>
                <th className="px-4 py-2 font-medium">Polymer</th>
                <th className="px-4 py-2 font-medium">Qty</th>
                <th className="px-4 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((r) => (
                <Row
                  key={r.id}
                  rfq={r}
                  expanded={expandedId === r.id}
                  onToggle={() =>
                    setExpandedId(expandedId === r.id ? null : r.id)
                  }
                  onUpdate={updateRfq}
                />
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-muted-foreground"
                  >
                    No RFQs match the filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Row({
  rfq,
  expanded,
  onToggle,
  onUpdate,
}: {
  rfq: RFQ;
  expanded: boolean;
  onToggle: () => void;
  onUpdate: (
    id: number,
    patch: { status?: string; internal_notes?: string }
  ) => Promise<void>;
}) {
  const [notes, setNotes] = useState(rfq.internal_notes ?? "");
  const [savingNotes, setSavingNotes] = useState(false);

  const date = new Date(rfq.submitted_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  async function saveNotes() {
    setSavingNotes(true);
    await onUpdate(rfq.id, { internal_notes: notes });
    setSavingNotes(false);
  }

  return (
    <>
      <tr
        onClick={onToggle}
        className="cursor-pointer hover:bg-surface/60"
      >
        <td className="px-4 py-2 font-mono text-xs text-muted-foreground whitespace-nowrap">
          {date}
        </td>
        <td className="px-4 py-2 font-mono tabular text-xs">
          <span
            className={
              rfq.lead_score >= 100
                ? "text-green-700 font-semibold"
                : rfq.lead_score >= 50
                ? "text-amber-700"
                : "text-muted-foreground"
            }
          >
            {rfq.lead_score}
          </span>
          {rfq.free_domain_flag && (
            <span
              className="ml-1 text-[10px] text-amber-600"
              title="Free email domain"
            >
              ⚠
            </span>
          )}
        </td>
        <td className="px-4 py-2">
          <div className="font-medium text-foreground">{rfq.company}</div>
          <div className="text-xs text-muted-foreground">
            {rfq.contact_name} · {rfq.country}
          </div>
        </td>
        <td className="px-4 py-2 text-xs">{rfq.polymer}</td>
        <td className="px-4 py-2 text-xs font-mono tabular">{rfq.quantity}</td>
        <td className="px-4 py-2">
          <span
            className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
              STATUS_COLOR[rfq.status] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {rfq.status}
          </span>
        </td>
      </tr>
      {expanded && (
        <tr className="bg-surface/40">
          <td colSpan={6} className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  Contact
                </h4>
                <div className="space-y-1">
                  <div>{rfq.contact_name}</div>
                  <div className="font-mono text-xs">
                    <a
                      href={`mailto:${rfq.email}`}
                      className="text-secondary hover:underline"
                    >
                      {rfq.email}
                    </a>
                  </div>
                  {rfq.phone && (
                    <div className="font-mono text-xs">{rfq.phone}</div>
                  )}
                  <div className="text-xs text-muted-foreground">
                    VAT: <span className="font-mono">{rfq.vat}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  Requirement
                </h4>
                <div className="space-y-1">
                  <div>
                    <span className="font-medium">{rfq.polymer}</span>
                    {rfq.grade && (
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {rfq.grade}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Application: {rfq.application}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {rfq.quantity} · {rfq.frequency}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Delivery: {rfq.delivery}
                    {rfq.required_by && ` · by ${rfq.required_by.slice(0, 10)}`}
                  </div>
                  {rfq.target_price_eur_t && (
                    <div className="text-xs text-muted-foreground">
                      Target: €{rfq.target_price_eur_t}/t
                    </div>
                  )}
                  {rfq.existing_supplier && (
                    <div className="text-xs text-muted-foreground">
                      Current supplier: {rfq.existing_supplier}
                    </div>
                  )}
                </div>
                {rfq.notes && (
                  <div className="mt-3 p-2 bg-background rounded border border-border text-xs">
                    {rfq.notes}
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  Manage
                </h4>
                <label className="block mb-3">
                  <span className="block text-xs text-muted-foreground mb-1">
                    Status
                  </span>
                  <select
                    value={rfq.status}
                    onChange={(e) =>
                      void onUpdate(rfq.id, { status: e.target.value })
                    }
                    className="w-full border border-border rounded-md px-2 py-1.5 text-sm bg-background"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="block text-xs text-muted-foreground mb-1">
                    Internal notes
                  </span>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full border border-border rounded-md px-2 py-1.5 text-sm"
                  />
                </label>
                <button
                  onClick={() => void saveNotes()}
                  disabled={savingNotes || notes === (rfq.internal_notes ?? "")}
                  className="mt-2 text-xs bg-secondary text-secondary-foreground rounded-md px-3 py-1.5 hover:bg-secondary/90 disabled:opacity-40"
                >
                  {savingNotes ? "Saving..." : "Save notes"}
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
