import { PhoneIcon, WhatsAppIcon } from "./icons";
import { telLink, waLink } from "@/lib/site";

/** Sticky bottom bar on phones: the two fastest ways to enquire. */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <a href={telLink} className="btn btn-ghost-dark !min-h-12 !px-4">
          <PhoneIcon className="size-4" /> Call
        </a>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa !min-h-12">
          <WhatsAppIcon /> Book on WhatsApp
        </a>
      </div>
    </div>
  );
}
