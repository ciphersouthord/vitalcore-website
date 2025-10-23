import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Globe2, Shield, Ambulance, Users, Mail, Phone, MapPin, ArrowRight, Hospital, GraduationCap, HandHeart, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ————————————————————————————————————————————————
// Starter single‑page site for a humanitarian NGO that deploys
// medical professionals to Africa & other regions to deliver
// training for local communities & civil defense forces.
//
// • Tech: React + Tailwind + shadcn/ui + lucide-react + framer-motion
// • All copy is placeholder & easily editable in this file
// • Search for TODO: to customize brand/org specifics
// ————————————————————————————————————————————————

// TODO: Set your brand name + tagline
const BRAND = {
  name: "Global MedReach",
  tagline: "Training local hands. Saving local lives.",
  ctaDonate: "Donate",
  ctaVolunteer: "Volunteer",
  email: "hello@globalmedreach.org",
  phone: "+1 (555) 123-4567",
  hq: "Washington, DC, USA",
};

// TODO: Add your priority countries & programs
const PRIORITY_REGIONS = [
  { country: "Kenya", focus: "Community First Aid & BLS", year: 2025 },
  { country: "Uganda", focus: "Maternal & Newborn Care", year: 2025 },
  { country: "Ghana", focus: "Mass-Casualty Triage for CivDef", year: 2025 },
  { country: "Morocco", focus: "Disaster Response & WASH", year: 2026 },
  { country: "Nepal", focus: "Remote Clinic Capacity", year: 2026 },
];

const IMPACT = [
  { label: "Health workers trained", value: 4200 },
  { label: "Community responders", value: 9800 },
  { label: "Clinics supported", value: 126 },
  { label: "Countries reached", value: 9 },
];

const PROGRAMS = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Train-the-Trainer (T3)",
    desc: "We certify local clinicians and civil defense instructors to sustain skills long after deployments end.",
    bullets: ["Adult & Pediatric BLS/CPR", "Mass-casualty triage", "Bleeding control & airway"],
  },
  {
    icon: <Hospital className="h-6 w-6" />,
    title: "Clinic Capacity Uplift",
    desc: "Targeted mentorship for rural clinics: protocols, supply chains, referral pathways, and data hygiene.",
    bullets: ["Maternal & newborn care", "Infection prevention & control", "Cold chain basics"],
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Civil Defense & First Responder",
    desc: "Scenario-based training for community responders and civil defense units to stabilize incidents early.",
    bullets: ["Incident command lite", "Tactical triage lanes", "Comms & casualty tracking"],
  },
  {
    icon: <HandHeart className="h-6 w-6" />,
    title: "Community Health & WASH",
    desc: "Trainings in hygiene, safe water, and outbreak readiness tailored to local realities.",
    bullets: ["Rapid risk assessment", "Community IEC materials", "Water testing & chlorine use"],
  },
];

const FAQ = [
  {
    q: "How do deployments work?",
    a: "We send small, multidisciplinary teams (4–8) for 1–3 weeks to co-teach with local partners. Everything is mapped to locally approved protocols and language-first materials.",
  },
  {
    q: "Who do you train?",
    a: "Local clinicians, nurses, midwives, community health volunteers, and civil defense responders designated by municipal or national partners.",
  },
  {
    q: "Can I volunteer if I'm not medical?",
    a: "Yes—logistics, education design, translation, and media are critical roles. We onboard non-clinical volunteers for these tracks.",
  },
  {
    q: "How are donations used?",
    a: "80% program delivery (training kits, travel, local partner support), 15% operations, 5% compliance & monitoring. Audited annually.",
  },
];

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center p-4">
      <div className="text-4xl font-bold tracking-tight">{value.toLocaleString()}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function ProgramCard({ item }: { item: any }) {
  return (
    <Card className="h-full hover:shadow-xl transition-shadow rounded-2xl">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="p-2 rounded-xl bg-muted">{item.icon}</div>
        <CardTitle className="text-lg">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p className="mb-3">{item.desc}</p>
        <ul className="list-disc pl-5 space-y-1">
          {item.bullets.map((b: string, i: number) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function RegionTag({ country, focus, year }: { country: string; focus: string; year: number }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border p-3 hover:bg-muted/40 transition">
      <div>
        <div className="font-medium">{country}</div>
        <div className="text-xs text-muted-foreground">{focus}</div>
      </div>
      <div className="text-xs text-muted-foreground">{year}</div>
    </div>
  );
}

export default function Site() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-primary/10 flex items-center justify-center">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="font-semibold">{BRAND.name}</div>
                <div className="text-[11px] text-muted-foreground hidden sm:block">{BRAND.tagline}</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#programs" className="hover:opacity-80">Programs</a>
              <a href="#regions" className="hover:opacity-80">Regions</a>
              <a href="#impact" className="hover:opacity-80">Impact</a>
              <a href="#partners" className="hover:opacity-80">Partners</a>
              <a href="#contact" className="hover:opacity-80">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button className="rounded-2xl" variant="secondary">{BRAND.ctaVolunteer}</Button>
              <Button className="rounded-2xl">{BRAND.ctaDonate}</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Equip local responders to save lives—every day, not just during deployments.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We deploy medical professionals to co-train community health workers and civil defense forces across Africa and beyond—
                building skills that last and systems that scale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl">
                  Start a Monthly Gift <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="rounded-2xl" variant="outline">
                  Join a Training Team
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Stethoscope className="h-4 w-4"/> Evidence-based curricula</div>
                <div className="flex items-center gap-2"><Globe2 className="h-4 w-4"/> Local-first partnerships</div>
                <div className="flex items-center gap-2"><Ambulance className="h-4 w-4"/> Scenario-led drills</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Replace this with a real image or video later */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/15 via-emerald-100 to-sky-100 flex items-center justify-center">
                  <div className="text-center p-10">
                    <Users className="h-10 w-10 mx-auto mb-4"/>
                    <div className="font-semibold">Training in session</div>
                    <div className="text-sm text-muted-foreground">Add a field photo or short reel here</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Programs</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Our deployments focus on high-impact modules that translate into daily practice and community resilience.
              </p>
            </div>
            <Button className="rounded-2xl" variant="outline"><PlusCircle className="h-4 w-4 mr-2"/>Request a Training</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROGRAMS.map((p, i) => (
              <ProgramCard key={i} item={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section id="regions">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Where we work</h2>
              <p className="text-muted-foreground mt-2">
                We embed alongside ministries of health, local NGOs, and civil defense to co-design training that sticks.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {PRIORITY_REGIONS.map((r, i) => (
                  <RegionTag key={i} {...r} />
                ))}
              </div>
            </div>
            <div>
              <Card className="rounded-3xl overflow-hidden">
                <CardHeader>
                  <CardTitle>Deployments map</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Map placeholder — integrate Mapbox/Leaflet later */}
                  <div className="aspect-[4/3] rounded-2xl border grid place-items-center text-muted-foreground">
                    <div className="text-center">
                      <Globe2 className="h-8 w-8 mx-auto mb-2"/>
                      <div>Interactive map coming soon</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">Measured impact, transparent results</h2>
            <p className="text-muted-foreground mt-2">
              We publish training numbers, partner feedback, and monitoring data after each deployment cycle.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {IMPACT.map((s, i) => (
              <Stat key={i} value={s.value} label={s.label} />
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="rounded-2xl p-4 border">Audited annually by an independent CPA firm.</div>
            <div className="rounded-2xl p-4 border">Data aligned to WHO/IFRC community health indicators.</div>
            <div className="rounded-2xl p-4 border">Partner-led evaluations and after-action reviews (AARs).</div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">In trusted partnership</h2>
            <p className="text-muted-foreground mt-2">We work by invitation with ministries, universities, and NGOs.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Ministry of Health", "Regional Hospital", "Medical University", "Civil Defense"].map((p, i) => (
              <div key={i} className="rounded-2xl border p-6 text-center text-sm text-muted-foreground">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Frequently asked questions</h2>
              <p className="text-muted-foreground mt-2">If you don’t see your question here, reach out—we’re happy to chat.</p>
              <div className="mt-6 space-y-4">
                {FAQ.map((f, i) => (
                  <details key={i} className="group rounded-2xl border p-4">
                    <summary className="cursor-pointer font-medium flex items-center justify-between">
                      {f.q}
                      <span className="text-muted-foreground text-xs group-open:hidden">open</span>
                      <span className="text-muted-foreground text-xs hidden group-open:inline">close</span>
                    </summary>
                    <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <div>
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle>Download our briefing pack</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Includes program overviews, sample curricula, and partnership pathways.</p>
                  <div className="mt-4 flex gap-3">
                    <Button className="rounded-2xl"><ArrowRight className="h-4 w-4 mr-2"/>PDF (2.1 MB)</Button>
                    <Button className="rounded-2xl" variant="outline">One‑pager</Button>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-4 text-xs text-muted-foreground">
                * Hook up real file links in your framework or CMS.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Bring training to your community</h2>
              <p className="text-muted-foreground mt-2">Partner with us to co-host a deployment or invite our faculty to your region.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border p-4">
                  <div className="font-medium flex items-center gap-2"><Mail className="h-4 w-4"/> Email</div>
                  <div className="text-sm text-muted-foreground">{BRAND.email}</div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="font-medium flex items-center gap-2"><Phone className="h-4 w-4"/> Phone</div>
                  <div className="text-sm text-muted-foreground">{BRAND.phone}</div>
                </div>
                <div className="rounded-2xl border p-4 sm:col-span-2">
                  <div className="font-medium flex items-center gap-2"><MapPin className="h-4 w-4"/> Headquarters</div>
                  <div className="text-sm text-muted-foreground">{BRAND.hq}</div>
                </div>
              </div>
            </div>
            <div>
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle>Request a training</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Input placeholder="Organization" required />
                      <Input placeholder="Your name" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Input type="email" placeholder="Email" required />
                      <Input placeholder="Country/Region" />
                    </div>
                    <Textarea placeholder="Tell us about your training needs (e.g., audience, dates, topics)" rows={5} />
                    <Button type="submit" className="rounded-2xl">Submit request</Button>
                    <div className="text-xs text-muted-foreground">* Wire this form to your backend or a service like Formspree.</div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="font-semibold mb-2">{BRAND.name}</div>
              <p className="text-muted-foreground">{BRAND.tagline}</p>
            </div>
            <div>
              <div className="font-medium mb-2">Programs</div>
              <ul className="space-y-1 text-muted-foreground">
                {PROGRAMS.slice(0,4).map((p, i) => (
                  <li key={i}>{p.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Regions</div>
              <ul className="space-y-1 text-muted-foreground">
                {PRIORITY_REGIONS.slice(0,5).map((r, i) => (
                  <li key={i}>{r.country}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Get involved</div>
              <ul className="space-y-2">
                <li><Button size="sm" variant="secondary" className="rounded-xl w-full">{BRAND.ctaVolunteer}</Button></li>
                <li><Button size="sm" className="rounded-xl w-full">{BRAND.ctaDonate}</Button></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Non‑profit 501(c)(3) — EIN 00‑0000000
          </div>
        </div>
      </footer>
    </div>
  );
}