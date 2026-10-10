"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { WhatsAppIcon } from "./icons";
import { services } from "@/lib/services";
import { waLink } from "@/lib/site";

type Fields = {
  service: string;
  name: string;
  phone: string;
  locality: string;
  date: string;
  time: string;
  details: string;
};

type Errors = Partial<Record<keyof Fields | "consent", string>>;

const timeSlots = ["Morning (8 am – 12 pm)", "Afternoon (12 pm – 4 pm)", "Evening (4 pm – 8 pm)", "Flexible"];

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

const noopSubscribe = () => () => {};

export function validate(f: Fields, consent: boolean): Errors {
  const e: Errors = {};
  if (!f.service) e.service = "Please choose a service.";
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  const digits = f.phone.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, "");
  if (!/^[6-9]\d{9}$/.test(digits)) e.phone = "Enter a valid 10-digit Indian mobile number.";
  const loc = f.locality.trim();
  if (loc.length < 3) e.locality = "Enter your locality or 6-digit pincode.";
  else if (/^\d+$/.test(loc) && !/^\d{6}$/.test(loc)) e.locality = "Pincodes have 6 digits.";
  if (f.date && f.date < todayISO()) e.date = "Choose today or a future date.";
  if (!consent) e.consent = "Please confirm so we can contact you about this request.";
  return e;
}

/**
 * Booking enquiry form. There is no backend: on submit the validated details are
 * turned into a pre-filled WhatsApp message that the customer sends themselves.
 * Nothing is stored or transmitted by this website.
 */
export default function EnquiryForm({ defaultService = "" }: { defaultService?: string }) {
  const uid = useId();
  const [f, setF] = useState<Fields>({ service: defaultService, name: "", phone: "", locality: "", date: "", time: "", details: "" });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState<string | null>(null);
  // Set on the client only, so the static HTML (built on another day) never mismatches.
  const minDate = useSyncExternalStore(noopSubscribe, todayISO, () => undefined);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setF((prev) => ({ ...prev, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(f, consent);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    const lines = [
      `Hi SetoraHome, I want to book ${f.service} in Varanasi. Please share availability and the final quotation.`,
      "",
      `Name: ${f.name.trim()}`,
      `Phone: ${f.phone.trim()}`,
      `Locality / pincode: ${f.locality.trim()}`,
      f.date ? `Preferred date: ${new Date(f.date + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}` : "",
      f.time ? `Preferred time: ${f.time}` : "",
      f.details.trim() ? `Details: ${f.details.trim()}` : "",
    ].filter((l, i) => l !== "" || i === 1);
    const url = waLink(lines.join("\n"));
    setOpened(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const field = "mt-1.5 block w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.97rem] text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none focus:ring-2 focus:ring-brand/40 aria-[invalid=true]:border-red-600";
  const label = "text-sm font-semibold text-ink";
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${uid}-${k}-error`} className="mt-1.5 text-sm text-red-700">{errors[k]}</p>
    ) : null;
  const a11y = (k: keyof Errors) => ({
    id: `${uid}-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-white p-5 shadow-[0_24px_60px_-35px_rgba(15,15,15,0.45)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-service`} className={label}>Service <span className="text-brand-700">*</span></label>
          <select {...a11y("service")} required value={f.service} onChange={set("service")} className={field}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
          {err("service")}
        </div>
        <div>
          <label htmlFor={`${uid}-name`} className={label}>Your name <span className="text-brand-700">*</span></label>
          <input {...a11y("name")} required autoComplete="name" value={f.name} onChange={set("name")} className={field} placeholder="Full name" />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={label}>Mobile number <span className="text-brand-700">*</span></label>
          <input {...a11y("phone")} required type="tel" inputMode="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} className={field} placeholder="10-digit mobile" />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-locality`} className={label}>Locality or pincode <span className="text-brand-700">*</span></label>
          <input {...a11y("locality")} required autoComplete="address-level3" value={f.locality} onChange={set("locality")} className={field} placeholder="e.g. Sigra, Lanka or 221005" />
          {err("locality")}
        </div>
        <div>
          <label htmlFor={`${uid}-date`} className={label}>Preferred date</label>
          <input {...a11y("date")} type="date" min={minDate} value={f.date} onChange={set("date")} className={field} />
          {err("date")}
        </div>
        <div>
          <label htmlFor={`${uid}-time`} className={label}>Preferred time</label>
          <select {...a11y("time")} value={f.time} onChange={set("time")} className={field}>
            <option value="">Any time</option>
            {timeSlots.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-details`} className={label}>What do you need? <span className="font-normal text-muted">(optional)</span></label>
          <textarea {...a11y("details")} rows={3} maxLength={600} value={f.details} onChange={set("details")} className={field} placeholder="e.g. 2BHK deep cleaning, kitchen and two bathrooms" />
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
            <input
              id={`${uid}-consent`}
              type="checkbox"
              checked={consent}
              onChange={(e) => { setConsent(e.target.checked); setErrors((p) => ({ ...p, consent: undefined })); }}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? `${uid}-consent-error` : undefined}
              className="mt-1 size-4 shrink-0 accent-[#f85a05]"
            />
            <span>
              I agree to share these details with SetoraHome on WhatsApp so they can respond to my request.
              See our <a href="/privacy" className="font-semibold text-ink underline underline-offset-2">privacy notice</a>.
            </span>
          </label>
          {err("consent")}
        </div>
      </div>

      <button type="submit" className="btn btn-wa mt-7 w-full sm:w-auto">
        <WhatsAppIcon /> Continue on WhatsApp
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        This form does not send or store anything by itself. It opens WhatsApp with your details pre-filled. Your request reaches us only when you press send in WhatsApp.
      </p>

      <div aria-live="polite" className="mt-4">
        {opened && (
          <p className="rounded-xl bg-sand px-4 py-3 text-sm text-ink">
            WhatsApp should have opened in a new tab. Press <strong>send</strong> there to reach us. If it didn&apos;t open,{" "}
            <a href={opened} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline underline-offset-2">tap here to open WhatsApp</a>.
          </p>
        )}
      </div>
    </form>
  );
}
