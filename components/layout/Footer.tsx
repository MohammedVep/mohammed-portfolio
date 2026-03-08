import { profileData } from "@/content/profile";

const quickLinks = [
  { href: "/#featured-systems", label: "Flagship Systems" },
  { href: "/#projects", label: "Project Vault" },
  { href: "/#runbooks", label: "Architecture and Runbooks" },
  { href: "/#recruiter-index", label: "Recruiter Index" },
  { href: "/blog", label: "Engineering Blog" },
  { href: "/#role-fit", label: "Role Fit Brief" },
  { href: "/sre-dashboard", label: "SRE Dashboard" },
];

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black">
      <div className="container mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-500">Portfolio_Node</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
              Systems and infrastructure portfolio with production-style projects, architecture docs,
              and incident-style engineering writing.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Quick Access</p>
            <div className="mt-3 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-300 transition hover:text-emerald-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">External</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-neutral-700 px-3 py-2 text-[10px] uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-200"
              >
                GitHub
              </a>
              <a
                href={profileData.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-neutral-700 px-3 py-2 text-[10px] uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-200"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="rounded border border-emerald-500/40 px-3 py-2 text-[10px] uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-900 pt-5 text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} {profileData.name}. Built for recruiter-first technical
          validation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
