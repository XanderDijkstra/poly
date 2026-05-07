import { FormEvent, useEffect, useMemo, useState } from "react";
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

type View = "dashboard" | "leads" | "suppliers" | "settings";

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
  usePageMeta({ title: "Admin · Polymer Platform", noindex: true });

  const [token, setToken] = useState<string>(() =>
    typeof window !== "undefined"
      ? window.localStorage.getItem("admin_token") ?? ""
      : ""
  );
  const [pwInput, setPwInput] = useState("");
  const [view, setView] = useState<View>("leads");
  const [rfqs, setRfqs] = useState<RFQ[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          {error && <div className="mt-2 text-xs text-error">{error}</div>}
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

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar
        view={view}
        onChange={setView}
        onLogout={logout}
        rfqCount={rfqs?.length ?? 0}
      />
      <main className="flex-1 min-w-0 overflow-x-hidden">
        {view === "dashboard" && <DashboardView rfqs={rfqs ?? []} />}
        {view === "leads" && (
          <LeadsView
            rfqs={rfqs}
            loading={loading}
            error={error}
            onRefresh={() => void fetchRfqs(token)}
            onUpdate={updateRfq}
          />
        )}
        {view === "suppliers" && <SuppliersView />}
        {view === "settings" && <SettingsView onLogout={logout} />}
      </main>
    </div>
  );
}

function Sidebar({
  view,
  onChange,
  onLogout,
  rfqCount,
}: {
  view: View;
  onChange: (v: View) => void;
  onLogout: () => void;
  rfqCount: number;
}) {
  const items: { id: View; label: string; badge?: number }[] = [
    { id: "dashboard", label: "Dashboard" },
    { id: "leads", label: "Leads", badge: rfqCount },
    { id: "suppliers", label: "Suppliers" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <aside className="w-60 shrink-0 border-r border-border bg-surface flex flex-col">
      <div className="px-6 py-5 border-b border-border">
        <div className="font-heading text-base font-bold text-primary">
          Polymer Platform
        </div>
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">
          Admin
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {items.map((item) => {
          const active = view === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-background"
              }`}
            >
              <span className="font-medium">{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span
                  className={`text-[11px] font-mono tabular px-1.5 py-0.5 rounded-full ${
                    active
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-border text-muted-foreground"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      <div className="px-3 py-4 border-t border-border">
        <button
          onClick={onLogout}
          className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-background"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}

function DashboardView({ rfqs }: { rfqs: RFQ[] }) {
  const total = rfqs.length;
  const newLeads = rfqs.filter((r) => r.status === "new").length;
  const qualified = rfqs.filter((r) => r.status === "qualified").length;
  const won = rfqs.filter((r) => r.status === "won").length;
  const avgScore =
    total > 0
      ? Math.round(rfqs.reduce((s, r) => s + r.lead_score, 0) / total)
      : 0;
  const recent = rfqs.slice(0, 5);

  return (
    <div className="px-8 py-8">
      <h1 className="font-heading text-2xl font-bold text-primary mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Stat label="Total RFQs" value={total.toString()} />
        <Stat label="New / unactioned" value={newLeads.toString()} />
        <Stat label="Qualified" value={qualified.toString()} />
        <Stat label="Won" value={won.toString()} />
        <Stat label="Average lead score" value={avgScore.toString()} />
      </div>
      <h2 className="font-heading text-lg font-semibold text-primary mb-3">
        Recent submissions
      </h2>
      <div className="rounded-lg border border-border bg-surface divide-y divide-border">
        {recent.length === 0 ? (
          <div className="px-4 py-6 text-sm text-muted-foreground">
            No RFQs yet.
          </div>
        ) : (
          recent.map((r) => (
            <div
              key={r.id}
              className="px-4 py-3 flex items-center justify-between gap-4"
            >
              <div className="min-w-0 flex-1">
                <div className="font-medium text-foreground truncate">
                  {r.company}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {r.polymer} · {r.quantity} · {r.country}
                </div>
              </div>
              <div className="text-xs font-mono tabular text-muted-foreground whitespace-nowrap">
                {new Date(r.submitted_at).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                })}
              </div>
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                  STATUS_COLOR[r.status] ?? "bg-gray-100 text-gray-700"
                }`}
              >
                {r.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-heading text-3xl font-bold text-primary tabular">
        {value}
      </div>
    </div>
  );
}

function LeadsView({
  rfqs,
  loading,
  error,
  onRefresh,
  onUpdate,
}: {
  rfqs: RFQ[] | null;
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
  onUpdate: (
    id: number,
    patch: { status?: string; internal_notes?: string }
  ) => Promise<void>;
}) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      (rfqs ?? []).filter((r) => {
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
      }),
    [rfqs, statusFilter, search]
  );

  const selected = filtered.find((r) => r.id === selectedId) ?? null;

  return (
    <div className="flex flex-col h-screen">
      <header className="px-8 py-5 border-b border-border flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-primary">
            Leads
          </h1>
          <p className="text-xs text-muted-foreground font-mono mt-0.5">
            {rfqs?.length ?? 0} total · {filtered.length} shown
          </p>
        </div>
      </header>

      <div className="px-8 py-3 border-b border-border flex items-center gap-3 flex-wrap">
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
          onClick={onRefresh}
          className="text-xs text-secondary hover:underline"
        >
          Refresh
        </button>
      </div>

      <div className="flex-1 flex min-h-0">
        <div className="flex-1 min-w-0 overflow-y-auto">
          {loading && (
            <div className="p-6 text-sm text-muted-foreground">Loading...</div>
          )}
          {error && <div className="p-6 text-sm text-error">{error}</div>}
          {!loading && rfqs && (
            <table className="w-full text-sm">
              <thead className="bg-surface text-left text-xs uppercase tracking-wide text-muted-foreground border-b border-border sticky top-0">
                <tr>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Score</th>
                  <th className="px-6 py-3 font-medium">Company</th>
                  <th className="px-6 py-3 font-medium">Polymer</th>
                  <th className="px-6 py-3 font-medium">Qty</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((r) => (
                  <tr
                    key={r.id}
                    onClick={() => setSelectedId(r.id)}
                    className={`cursor-pointer hover:bg-surface/60 ${
                      selectedId === r.id ? "bg-surface" : ""
                    }`}
                  >
                    <td className="px-6 py-3 font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(r.submitted_at).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })}
                    </td>
                    <td className="px-6 py-3 font-mono tabular text-xs">
                      <span
                        className={
                          r.lead_score >= 100
                            ? "text-green-700 font-semibold"
                            : r.lead_score >= 50
                            ? "text-amber-700"
                            : "text-muted-foreground"
                        }
                      >
                        {r.lead_score}
                      </span>
                      {r.free_domain_flag && (
                        <span className="ml-1 text-[10px] text-amber-600" title="Free email domain">
                          ⚠
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-3">
                      <div className="font-medium text-foreground">{r.company}</div>
                      <div className="text-xs text-muted-foreground">
                        {r.contact_name} · {r.country}
                      </div>
                    </td>
                    <td className="px-6 py-3 text-xs">{r.polymer}</td>
                    <td className="px-6 py-3 text-xs font-mono tabular">{r.quantity}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                          STATUS_COLOR[r.status] ?? "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                      No RFQs match the filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        {selected && (
          <LeadDetailPanel
            key={selected.id}
            rfq={selected}
            onClose={() => setSelectedId(null)}
            onUpdate={onUpdate}
          />
        )}
      </div>
    </div>
  );
}

function LeadDetailPanel({
  rfq,
  onClose,
  onUpdate,
}: {
  rfq: RFQ;
  onClose: () => void;
  onUpdate: (
    id: number,
    patch: { status?: string; internal_notes?: string }
  ) => Promise<void>;
}) {
  const [notes, setNotes] = useState(rfq.internal_notes ?? "");
  const [savingNotes, setSavingNotes] = useState(false);

  const submitted = new Date(rfq.submitted_at).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  async function saveNotes() {
    setSavingNotes(true);
    await onUpdate(rfq.id, { internal_notes: notes });
    setSavingNotes(false);
  }

  return (
    <aside className="w-[480px] shrink-0 border-l border-border bg-background overflow-y-auto">
      <div className="px-6 py-4 border-b border-border flex items-start justify-between gap-3 sticky top-0 bg-background z-10">
        <div className="min-w-0">
          <div className="text-xs font-mono text-muted-foreground">
            #{rfq.id} · {submitted}
          </div>
          <h2 className="font-heading text-xl font-bold text-primary mt-1 truncate">
            {rfq.company}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground text-lg leading-none"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <div className="px-6 py-5 space-y-6">
        <DetailSection title="Score">
          <div className="flex items-baseline gap-3">
            <span
              className={`font-mono tabular text-3xl font-bold ${
                rfq.lead_score >= 100
                  ? "text-green-700"
                  : rfq.lead_score >= 50
                  ? "text-amber-700"
                  : "text-muted-foreground"
              }`}
            >
              {rfq.lead_score}
            </span>
            {rfq.free_domain_flag && (
              <span className="text-xs text-amber-600">
                ⚠ Free email domain
              </span>
            )}
          </div>
        </DetailSection>

        <DetailSection title="Contact">
          <div className="text-base text-foreground font-medium">
            {rfq.contact_name}
          </div>
          <div className="mt-1.5 text-sm font-mono">
            <a
              href={`mailto:${rfq.email}`}
              className="text-secondary hover:underline break-all"
            >
              {rfq.email}
            </a>
          </div>
          {rfq.phone && (
            <div className="mt-1 text-sm font-mono">
              <a
                href={`tel:${rfq.phone.replace(/\s/g, "")}`}
                className="text-secondary hover:underline"
              >
                {rfq.phone}
              </a>
            </div>
          )}
          <div className="mt-2 text-sm text-muted-foreground">
            VAT <span className="font-mono text-foreground">{rfq.vat}</span> · {rfq.country}
          </div>
        </DetailSection>

        <DetailSection title="Requirement">
          <div className="text-base text-foreground font-medium">
            {rfq.polymer}
          </div>
          {rfq.grade && (
            <div className="mt-1.5 text-sm text-muted-foreground whitespace-pre-wrap">
              {rfq.grade}
            </div>
          )}
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <DetailRow label="Application" value={rfq.application} />
            <DetailRow label="Quantity" value={rfq.quantity} mono />
            <DetailRow label="Frequency" value={rfq.frequency} />
            <DetailRow
              label="Delivery"
              value={rfq.delivery + (rfq.required_by ? ` · by ${rfq.required_by.slice(0, 10)}` : "")}
            />
            {rfq.target_price_eur_t && (
              <DetailRow
                label="Target price"
                value={`€${rfq.target_price_eur_t}/t`}
                mono
              />
            )}
            {rfq.existing_supplier && (
              <DetailRow label="Current supplier" value={rfq.existing_supplier} />
            )}
          </div>
          {rfq.notes && (
            <div className="mt-3">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Notes from buyer
              </div>
              <div className="rounded-md bg-surface border border-border p-3 text-sm text-foreground whitespace-pre-wrap">
                {rfq.notes}
              </div>
            </div>
          )}
        </DetailSection>

        <DetailSection title="Manage">
          <label className="block">
            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
              Status
            </span>
            <select
              value={rfq.status}
              onChange={(e) => void onUpdate(rfq.id, { status: e.target.value })}
              className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4">
            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
              Internal notes
            </span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full border border-border rounded-md px-3 py-2 text-sm"
              placeholder="Notes only visible to the team..."
            />
          </label>
          <button
            onClick={() => void saveNotes()}
            disabled={savingNotes || notes === (rfq.internal_notes ?? "")}
            className="mt-2 text-sm bg-secondary text-secondary-foreground rounded-md px-4 py-2 hover:bg-secondary/90 disabled:opacity-40"
          >
            {savingNotes ? "Saving..." : "Save notes"}
          </button>
        </DetailSection>
      </div>
    </aside>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
        {title}
      </h3>
      {children}
    </div>
  );
}

function DetailRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className={`text-sm text-foreground ${mono ? "font-mono tabular" : ""}`}>
        {value}
      </div>
    </div>
  );
}

function SuppliersView() {
  return (
    <div className="px-8 py-8">
      <h1 className="font-heading text-2xl font-bold text-primary mb-2">
        Suppliers
      </h1>
      <p className="text-sm text-muted-foreground mb-6">
        Manage the verified supplier roster and applications.
      </p>
      <div className="rounded-lg border border-dashed border-border bg-surface p-8 text-center">
        <div className="text-sm text-muted-foreground">
          Supplier management coming soon. For now, applications come in via
          <span className="font-mono"> suppliers@polymerplatform.eu</span>.
        </div>
      </div>
    </div>
  );
}

function SettingsView({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="px-8 py-8 max-w-2xl">
      <h1 className="font-heading text-2xl font-bold text-primary mb-6">
        Settings
      </h1>
      <div className="rounded-lg border border-border bg-surface p-6 space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            Authentication
          </div>
          <div className="text-sm text-foreground">
            Single shared admin password. Set via the{" "}
            <span className="font-mono">ADMIN_PASSWORD</span> environment
            variable in Vercel.
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            Database
          </div>
          <div className="text-sm text-foreground">
            Neon Postgres via the Vercel-Neon integration. Connection string in{" "}
            <span className="font-mono">DATABASE_URL</span>.
          </div>
        </div>
        <button
          onClick={onLogout}
          className="text-sm text-error hover:underline"
        >
          Sign out of admin
        </button>
      </div>
    </div>
  );
}
