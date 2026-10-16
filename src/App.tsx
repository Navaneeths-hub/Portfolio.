import { useEffect, useRef, useState } from "react"

function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`
}

type Project = {
  slug: string
  year: string
  title: string
  description: string
  discipline: string
  image: string
  imageBase?: string
  imageAlt: string
  theme: string
  introduction: string
  challenge: string
  role: string[]
  process: { number: string; title: string; copy: string }[]
  outcome: string
}

const projects: Project[] = [
  {
    slug: "shopify-virtual-try-on",
    year: "2026",
    title: "Tuck Virtual Try-On",
    description:
      "A complete plugin connecting a high-converting shopper widget with a zero-code merchant management platform.",
    discipline: "Product Design",
    image: "assets/figma/shopify/ce9bd.png",
    imageAlt: "Tuck virtual try-on displayed on a phone held in hand",
    theme: "project-card--blue",
    introduction:
      "The virtual try-on company needed a Shopify experience that felt native to every merchant storefront. The product had to make advanced technology feel immediate, useful, and simple for both shoppers and store teams.",
    challenge:
      "Virtual try-on asks a shopper to pause a familiar buying journey and try something new. The challenge was to introduce that moment without adding friction, while also giving merchants enough control to make the plugin feel like part of their own brand.",
    role: [
      "Product strategy",
      "Customer journeys",
      "UX & interface design",
      "Interactive prototyping",
      "Merchant setup flow",
      "Design handoff",
    ],
    process: [
      {
        number: "01",
        title: "Understand the storefront",
        copy: "Mapped the product-page journey across desktop and mobile, identifying the moments where try-on could add confidence without competing with purchase actions.",
      },
      {
        number: "02",
        title: "Design for trust",
        copy: "Created a guided experience with clear expectations, lightweight permissions, and useful feedback before, during, and after the try-on moment.",
      },
      {
        number: "03",
        title: "Make it adaptable",
        copy: "Built a flexible component system that could inherit a merchant’s visual language while preserving a consistent interaction model.",
      },
      {
        number: "04",
        title: "Prototype the edge cases",
        copy: "Tested loading, camera access, unsupported products, and return visits so the experience remained composed beyond the ideal path.",
      },
    ],
    outcome:
      "The final concept gives shoppers a clear, reassuring way to visualize products before buying and gives merchants a focused setup experience that fits naturally into Shopify.",
  },
  {
    slug: "physical-try-on-kiosk",
    year: "2026",
    title: "Tuck In-Store Kiosk",
    description:
      "A phygital try-on system combining a 21-inch portrait kiosk, computer vision, and a seamless retail handoff.",
    discipline: "Lead Product Design",
    image: "assets/figma/kiosk/9f71b.png",
    imageAlt: "Tuck in-store portrait kiosk",
    theme: "project-card--mono",
    introduction:
      "This project translated virtual try-on from a personal device into a shared retail environment. I worked across the physical form, on-screen product, and surrounding customer journey to create one coherent kiosk experience.",
    challenge:
      "The kiosk needed to attract attention from a distance, explain itself quickly, and feel comfortable in a public space. Screen height, viewing distance, privacy, accessibility, and store operations all had to work together.",
    role: [
      "Experience strategy",
      "Physical interaction design",
      "Kiosk UX & UI",
      "Service blueprints",
      "Prototype testing",
      "Design specifications",
    ],
    process: [
      {
        number: "01",
        title: "Study the environment",
        copy: "Observed how customers move through retail spaces and defined the kiosk’s attract, approach, engage, and exit states.",
      },
      {
        number: "02",
        title: "Shape the journey",
        copy: "Reduced the experience to a small set of clear decisions, with every screen designed for quick comprehension at standing distance.",
      },
      {
        number: "03",
        title: "Connect form and interface",
        copy: "Worked through screen placement, camera position, lighting, reach ranges, and idle behavior as one connected design problem.",
      },
      {
        number: "04",
        title: "Test in context",
        copy: "Used full-scale prototypes to evaluate visibility, ergonomics, session reset, and the handoff between customers and store staff.",
      },
    ],
    outcome:
      "The result is an approachable self-service experience that makes sophisticated technology understandable in seconds while remaining practical for everyday retail use.",
  },
  {
    slug: "premium-experience-center",
    year: "Concept 2026",
    title: "Tuck Experience Centre",
    description:
      "A spatial AI service pairing with instant AI try-ons through a multi-screen, device-connected flagship experience.",
    discipline: "Product Design",
    image: "assets/figma/centre/83b12.png",
    imageBase: "assets/figma/centre/f3a61.png",
    imageAlt: "Tuck life-sized display in a premium retail space",
    theme: "project-card--warm",
    introduction:
      "The experience center was conceived as a physical expression of the virtual try-on brand: a place for customers, partners, and teams to understand the technology through guided, hands-on discovery.",
    challenge:
      "The space needed to communicate technical credibility without feeling like a showroom of screens. The experience had to feel premium and human, with technology supporting the story rather than dominating it.",
    role: [
      "Experience vision",
      "Spatial storytelling",
      "Visitor journey",
      "Digital touchpoints",
      "Content direction",
      "Service design",
    ],
    process: [
      {
        number: "01",
        title: "Build the narrative",
        copy: "Defined a simple story that moves visitors from the problem, through the technology, to its potential in real retail settings.",
      },
      {
        number: "02",
        title: "Create distinct zones",
        copy: "Organized the visit into welcome, discovery, demonstration, consultation, and reflection moments with a deliberate rhythm.",
      },
      {
        number: "03",
        title: "Design the service",
        copy: "Mapped how hosts adapt the experience for different visitors while keeping every interaction personal and consistent.",
      },
      {
        number: "04",
        title: "Refine every touchpoint",
        copy: "Aligned spatial cues, interfaces, content, materials, and transitions to create one calm and cohesive premium experience.",
      },
    ],
    outcome:
      "The concept turns an abstract technology into a memorable physical journey—giving every visitor space to explore, understand, and imagine how virtual try-on could work for them.",
  },
  {
    slug: "rfid-in-store-kiosk",
    year: "2026",
    title: "Tuck RFID In-Store Kiosk",
    description:
      "A 21-inch touch and RFID ecosystem that turns physical garment selections into an interactive styling session.",
    discipline: "Lead Product Design",
    image: "assets/figma/rfid/rfid-kiosk-thumbnail.jpg",
    imageAlt: "Tuck RFID in-store kiosk stand",
    theme: "project-card--rfid",
    introduction:
      "The RFID kiosk brings the speed of e-commerce into physical apparel retail, helping shoppers organize garments, compare complete outfits, and move confidently toward a fitting room.",
    challenge:
      "The experience had to respond instantly to physical garments, remain legible in a distracting public environment, and work comfortably across a wide range of standing and seated reach zones.",
    role: [
      "Physical-digital ecosystem",
      "Kiosk touch UI/UX",
      "RFID spatial interaction",
      "Physical ergonomics",
      "Multi-item composition",
      "Edge-case recovery",
    ],
    process: [
      {
        number: "01",
        title: "Map the retail environment",
        copy: "Defined the physical constraints, shopper behaviors, sensor states, and operational handoffs surrounding the kiosk.",
      },
      {
        number: "02",
        title: "Design the RFID feedback loop",
        copy: "Connected the act of placing garments on the tray with immediate, understandable visual confirmation.",
      },
      {
        number: "03",
        title: "Build the composition canvas",
        copy: "Created a spatial drag-and-pair model for turning separate garments into complete outfit groups.",
      },
      {
        number: "04",
        title: "Prototype graceful recovery",
        copy: "Designed human guidance for collisions, damaged tags, inactivity, and temporary connectivity failures.",
      },
    ],
    outcome:
      "The kiosk reduces outfit compilation time while encouraging cross-category discovery and increasing fitting-room intent.",
  },
]

function SiteHeader({ detail = false }: { detail?: boolean }) {
  return (
    <header className={`topbar topbar--${detail ? "detail" : "home"}`}>
      <a className="name" href="#top" aria-label="Go to homepage">
        Navaneeth Mohan
      </a>

      <p className="location">
        Sreekaryam, Trivandrum
        {detail && (
          <>
            <br />
            Design &amp; Art Direction
          </>
        )}
      </p>

      <nav className="nav-links" aria-label="Primary navigation">
        {detail ? (
          <a href="#work">All work ←</a>
        ) : (
          <>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=n8089193972@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email ↗
            </a>
            <a
              href={assetUrl("resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </>
        )}
      </nav>

      <a className="avatar" href="#about" aria-label="About Navaneeth Mohan">
        NM
      </a>
    </header>
  )
}

function ProjectPage({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="case-study" id="top">
      <SiteHeader detail />

      <header className="case-hero">
        <p className="eyebrow">
          {project.year}
          <br />
          {project.discipline}
        </p>
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </header>

      <div className={`case-image ${project.theme}`}>
        {project.imageBase && <img src={assetUrl(project.imageBase)} alt="" />}
        <img
          className="image-overlay"
          src={assetUrl(project.image)}
          alt={project.imageAlt}
        />
      </div>

      {project.slug === "shopify-virtual-try-on" ? (
        <ShopifyCaseContent />
      ) : project.slug === "physical-try-on-kiosk" ? (
        <KioskCaseContent />
      ) : project.slug === "premium-experience-center" ? (
        <ExperienceCentreCaseContent />
      ) : project.slug === "rfid-in-store-kiosk" ? (
        <RfidKioskCaseContent />
      ) : (
        <>
          <section className="case-overview">
            <p className="case-label">Overview</p>
            <p className="case-lead">{project.introduction}</p>
            <div className="case-facts">
              <div>
                <span>Year</span>
                <p>{project.year}</p>
              </div>
              <div>
                <span>Discipline</span>
                <p>{project.discipline}</p>
              </div>
              <div>
                <span>Focus</span>
                <p>Virtual try-on</p>
              </div>
            </div>
          </section>

          <section className="case-split">
            <p className="case-label">The challenge</p>
            <h2>{project.challenge}</h2>
          </section>

          <section className="case-role">
            <p className="case-label">My contribution</p>
            <div className="role-list">
              {project.role.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="case-process">
            <div className="case-section-heading">
              <p className="case-label">The process</p>
              <h2>From first questions to a complete experience.</h2>
            </div>
            <div className="process-grid">
              {project.process.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-outcome">
            <p className="case-label">The outcome</p>
            <h2>{project.outcome}</h2>
          </section>
        </>
      )}

      <a className="next-project" href={`#project/${nextProject.slug}`}>
        <span>Next project</span>
        <strong>{nextProject.title} ↗</strong>
      </a>
    </div>
  )
}

function ExperienceCentreCaseContent() {
  const decisions = [
    {
      dimension: "Appless mobile tech",
      strategy:
        "Built with browser-based Camera APIs and WebSockets, with no native download.",
      impact: "Zero app-store friction and 100% onboarding success.",
    },
    {
      dimension: "1:1 physical-scale rendering",
      strategy:
        "A color-calibrated display canvas sized to reflect average human height.",
      impact:
        "A realistic perspective that feels like standing before a mirror.",
    },
    {
      dimension: "Background processing",
      strategy:
        "Rendering starts when garments are scanned rather than at the final screen.",
      impact: "Wait anxiety disappears while clients continue browsing.",
    },
    {
      dimension: "Bespoke stylist integration",
      strategy:
        "Associates see scanned products in real time on a companion tablet.",
      impact:
        "Staff can pre-fetch accessories and prepare physical winning looks.",
    },
  ]

  return (
    <div className="tuck-case experience-case">
      <section className="tuck-summary">
        <p className="case-label">Executive summary</p>
        <div>
          <h2>A discreet spatial AI service for luxury retail.</h2>
          <p>
            In high-end luxury, bespoke tailoring, and couture ateliers,
            physical try-on is inherently costly. Silk, cashmere, and
            hand-embroidered fabrics suffer wear during fittings, structured
            garments require staff assistance to pin and drape, and limited
            sample sizes restrict what clients can physically try.
          </p>
          <p>
            I designed the Tuck Experience Centre—a hybrid spatial AI service
            pairing a life-sized portrait display with an appless mobile web
            scanner. By separating garment discovery from fitting-room changes,
            clients can virtually pair delicate, multi-piece bespoke looks while
            preserving the tactile and high-touch nature of luxury shopping.
          </p>
        </div>
        <div className="tuck-facts">
          <div>
            <span>Role</span>
            <p>Product Designer</p>
          </div>
          <div>
            <span>Scope</span>
            <p>
              Spatial UX, Service Design, Mobile Web App, Life-Sized Display,
              Omnichannel Architecture
            </p>
          </div>
          <div>
            <span>Focus</span>
            <p>Bespoke &amp; High-End Luxury Retail</p>
          </div>
        </div>
      </section>

      <section className="metric-section">
        <p className="case-label">Luxury store value</p>
        <div className="objective-grid">
          <article>
            <span>01</span>
            <h3>Garment protection</h3>
            <p>
              Eliminate wear on high-value, delicate sample stock during early
              outfit exploration.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Unlimited outfit pairing</h3>
            <p>
              Mix delicate tops, tailoring, and outerwear without repetitive
              physical changes.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Zero perceived latency</h3>
            <p>
              Render looks asynchronously while clients continue browsing the
              physical floor.
            </p>
          </article>
        </div>
      </section>

      <CaseSection number="01" title="The high-end retail challenge">
        <p className="section-intro">
          Luxury retail demands an elevated balance between high-tech
          convenience and tactile physical elegance.
        </p>
        <div className="persona-grid">
          <article>
            <span>Bespoke store pain points</span>
            <ul>
              <li>
                Delicate sample garments become damaged or soiled during
                physical try-ons.
              </li>
              <li>
                Not every colorway, fabric, or size cut can be stocked on the
                floor.
              </li>
              <li>
                Fitting-room bottlenecks limit VIP client handling capacity.
              </li>
            </ul>
          </article>
          <article>
            <span>VIP client pain points</span>
            <ul>
              <li>
                Fatigue from repeatedly changing structured couture garments.
              </li>
              <li>
                Hesitation to request associate help for every outfit match.
              </li>
              <li>
                Friction from downloading a native app inside the boutique.
              </li>
            </ul>
          </article>
        </div>
      </CaseSection>

      <CaseSection
        number="02"
        title="The phygital ecosystem & customer journey"
      >
        <p className="section-intro">
          An asynchronous, dual-screen journey combines a life-sized ambient
          display in the showroom with an instant mobile web app in the
          client&apos;s hands.
        </p>
        <div className="shopper-flow" aria-label="Experience Centre journey">
          {[
            ["01", "Ambient intake & capture"],
            ["02", "Mobile link & handoff"],
            ["03", "Floor scan & outfit pair"],
            ["04", "Life-sized reveal"],
          ].map(([number, label]) => (
            <div className="flow-step" key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>

        <div className="ecosystem-diagram">
          <article>
            <span>Life-sized portrait display</span>
            <p>
              Captures a full-body base silhouette and presents a secure pairing
              code for the mobile handoff.
            </p>
          </article>
          <i aria-hidden="true">Scan QR ↓</i>
          <article>
            <span>Client mobile web app</span>
            <p>
              Scans garment cards, pairs pieces into custom outfits, and
              triggers background cloud rendering without a download.
            </p>
          </article>
          <i aria-hidden="true">Transfer back ↓</i>
          <article>
            <span>Life-sized portrait display</span>
            <p>
              Reveals ultra-high-definition output at 1:1 scale for fit, color,
              pattern, and drape inspection.
            </p>
          </article>
        </div>
      </CaseSection>

      <CaseSection number="03" title="Step-by-step experience blueprint">
        <div className="feature-stack">
          <Feature
            number="01"
            title="Showroom arrival & life-sized capture"
            items={[
              [
                "Natural presence sensing",
                "The portrait screen recognizes a client entering the zone and transitions from ambient imagery to a refined greeting.",
              ],
              [
                "1:1 base photo capture",
                "A calibrated full-length silhouette becomes the baseline for every subsequent generative render.",
              ],
            ]}
          />
          <Feature
            number="02"
            title="Frictionless mobile web handoff"
            items={[
              [
                "No-download access",
                "A session-specific QR code opens a lightweight WebRTC and Web Camera API experience directly in the client’s browser.",
              ],
              [
                "Session pairing",
                "The client’s phone securely binds to the showroom session and becomes a personal scanner and remote control.",
              ],
            ]}
          />
          <Feature
            number="03"
            title="Tactile browsing & outfit pairing"
            items={[
              [
                "Garment hangtag scanning",
                "Clients browse fabrics and racks naturally while scanning QR garment cards with their own phone.",
              ],
              [
                "Mix-and-match creator",
                "Single pieces or two-item combinations can be paired across different areas of the boutique.",
              ],
              [
                "Asynchronous rendering",
                "Cloud generation starts immediately while the client keeps browsing, reducing perceived latency to zero.",
              ],
            ]}
          />
          <Feature
            number="04"
            title="Life-sized reveal & reflection"
            items={[
              [
                "Showroom transfer",
                "The client returns to the display and transfers completed looks using a secure QR code.",
              ],
              [
                "1:1 scale visualization",
                "Garments appear at true physical scale for inspection of fabric fall, pattern scale, and overall drape.",
              ],
            ]}
          />
        </div>
      </CaseSection>

      <UIScreenGallery
        title="UI components for the Experience Center."
        screens={[
          {
            label: "Try-on intake",
            type: "portrait",
            image: "assets/figma/centre/card-1.png",
          },
          {
            label: "Garment discovery",
            type: "portrait",
            image: "assets/figma/centre/card-2.png",
          },
          {
            label: "Look confirmation",
            type: "portrait",
            image: "assets/figma/centre/1deee.png",
          },
        ]}
      />

      <CaseSection number="04" title="Key spatial & technical UX decisions">
        <div className="handoff-table decision-table">
          <div className="handoff-row handoff-head">
            <span>Experience dimension</span>
            <span>Design strategy</span>
            <span>Business &amp; human impact</span>
          </div>
          {decisions.map((decision) => (
            <div className="handoff-row" key={decision.dimension}>
              <strong>{decision.dimension}</strong>
              <p>{decision.strategy}</p>
              <p>{decision.impact}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        number="05"
        title="Human-in-the-loop & high-touch service blueprint"
      >
        <p className="section-intro">
          The Experience Centre empowers luxury sales associates rather than
          replacing them.
        </p>
        <div className="service-blueprint">
          <article>
            <span>01</span>
            <h3>Associate companion view</h3>
            <p>
              Store staff see products each client has scanned through a
              dedicated tablet interface.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Curated recommendations</h3>
            <p>
              Stylists can add bespoke belts, scarves, shoes, and other
              finishing pieces directly into the client&apos;s mobile queue.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Targeted fitting-room delivery</h3>
            <p>
              Associates fetch only one or two winning combinations for final
              fitting and alteration pinning, reducing preparation time by up to
              70%.
            </p>
          </article>
        </div>
      </CaseSection>

      <CaseSection number="06" title="Strategic takeaways & spatial principles">
        <div className="takeaway-list experience-takeaways">
          <article>
            <span>01</span>
            <h3>Decouple capture from selection.</h3>
            <p>
              Capture the silhouette once, then let clients browse freely with
              their own device to blend tactile discovery and digital
              convenience.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Asynchronous rendering removes perceived wait.</h3>
            <p>
              Generating looks while clients explore transforms waiting time
              into productive showroom browsing.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Technology should enhance luxury, not obstruct it.</h3>
            <p>
              Personal phones and an ambient life-sized display keep technology
              subtle so fabrics, lighting, and human service remain the hero.
            </p>
          </article>
        </div>
      </CaseSection>
    </div>
  )
}

function KioskCaseContent() {
  const handoffs = [
    {
      mode: "Find in aisle",
      action: "Displays an interactive map: “Located in Aisle 4, Bay B.”",
      impact: "Enables self-service and reduces store associate queries.",
    },
    {
      mode: "Send to fitting room",
      action: "Requests selected garments and sizes to a fitting room.",
      impact: "Notifies store staff through associate handheld devices.",
    },
    {
      mode: "Scan to mobile",
      action: "Saves the look by QR code for sharing or later purchase.",
      impact: "Captures omnichannel intent and supports customer loyalty.",
    },
    {
      mode: "Add to in-store cart",
      action: "Generates a master barcode for scanning at the register.",
      impact: "Accelerates point-of-sale checkout.",
    },
  ]

  return (
    <div className="tuck-case kiosk-case">
      <section className="tuck-summary">
        <p className="case-label">Executive summary</p>
        <div>
          <h2>Redefining Physical Retail Through Instant Try-On</h2>
          <p>
            Traditional apparel shopping suffers from severe physical
            bottlenecks: fitting-room queues drive store abandonment, physical
            rack space limits how many garments a customer tries on, and
            underperforming inventory disappears on crowded sales floors.
          </p>
          <p>
            I designed the Tuck In-Store Try-On Kiosk—a phygital hardware
            solution with a 21-inch portrait touchscreen and integrated computer
            vision camera. Shoppers can try on high volumes of apparel in
            seconds, discover underperforming SKUs through intelligent
            recommendations, and transition seamlessly to purchase or fitting
            room delivery.
          </p>
        </div>
        <div className="tuck-facts">
          <div>
            <span>Role</span>
            <p>Lead Product Designer</p>
          </div>
          <div>
            <span>Scope</span>
            <p>
              Hardware Ergonomics, CV Interaction Design, On-Screen Interface,
              Retail Handoff Architecture
            </p>
          </div>
          <div>
            <span>Status</span>
            <p>Pilot Phase — Retail Brand Partnerships</p>
          </div>
        </div>
      </section>

      <section className="metric-section">
        <p className="case-label">Core retail objectives</p>
        <div className="objective-grid">
          <article>
            <span>01</span>
            <h3>Reduce fitting wait</h3>
            <p>Offload size-checking from physical fitting-room queues.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Drive in-store lift</h3>
            <p>
              Increase items tried per session from 2.5 to 8+ digital looks.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Move underperforming SKUs</h3>
            <p>
              Surface high-margin and slow-moving items through AI styling
              recommendations.
            </p>
          </article>
        </div>
      </section>

      <CaseSection number="01" title="The phygital retail challenge">
        <p className="section-intro">
          Designing for public hardware requires solving physical, spatial, and
          environmental constraints that do not exist on personal mobile
          devices.
        </p>
        <div className="persona-grid">
          <article>
            <span>Shopper physical friction</span>
            <ul>
              <li>Long fitting-room lines causing purchase abandonment.</li>
              <li>
                Repeatedly changing clothes just to compare sizing or colorways.
              </li>
              <li>Anxiety around photo capture in a public store.</li>
            </ul>
          </article>
          <article>
            <span>Retail floor friction</span>
            <ul>
              <li>
                Dead stock and underperforming garments hidden on crowded racks.
              </li>
              <li>Passersby corrupting camera tracking and model accuracy.</li>
              <li>Ambient glare and harsh overhead retail lighting.</li>
            </ul>
          </article>
        </div>
      </CaseSection>

      <CaseSection
        number="02"
        title='Hardware form factor & ergonomics — 21" portrait display'
      >
        <p className="section-intro">
          The physical architecture fits unobtrusively onto crowded sales floors
          while providing an intuitive, accessible interface for standing
          shoppers.
        </p>
        <div className="feature-stack kiosk-features">
          <Feature
            number="01"
            title="High-contrast visual system"
            items={[
              [
                "Overhead glare resistance",
                "An ultra-high-contrast dark interface remains legible under harsh store spotlights and natural window reflections.",
              ],
              [
                "Touch target proportions",
                "Every CTA and size toggle uses a minimum 64 × 64px touch area for rapid standing interactions.",
              ],
            ]}
          />
          <Feature
            number="02"
            title="Distance-guided spatial positioning"
            items={[
              [
                "Fixed standing zone",
                "The camera guides shoppers into an ideal capture range of 1.5 to 2 meters using head-to-torso proportions.",
              ],
              [
                "Visual feedback overlay",
                "Clear directional cues—“Step Back Slightly” or “Come a Bit Closer”—replace manual camera adjustment.",
              ],
              [
                "Hands-free auto-capture",
                "After 1.5 seconds in the ideal position, a 3–2–1 countdown captures automatically without an awkward tap-and-step-back interaction.",
              ],
            ]}
          />
        </div>
      </CaseSection>

      <CaseSection
        number="03"
        title="In-store shopper journey & interaction architecture"
      >
        <p className="section-intro">
          The workflow is optimized for rapid throughput, moving a shopper from
          approach to virtual try-on in under 20 seconds.
        </p>
        <div className="shopper-flow" aria-label="In-store kiosk journey">
          {[
            ["01", "Auto-approach initiation"],
            ["02", "Guided auto-capture"],
            ["03", "AI try-on & cross-sell"],
            ["04", "Store handoff & checkout"],
          ].map(([number, label]) => (
            <div className="flow-step" key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>

        <div className="feature-stack">
          <Feature
            number="01"
            title="Zero-touch initiation"
            items={[
              [
                "Active greeting",
                "When a shopper enters a two-meter range, presence sensing transitions the screen from ambient visuals to “Step up to try on any item instantly.”",
              ],
            ]}
          />
          <Feature
            number="02"
            title="Input & controlled-environment processing"
            items={[
              [
                "Garment selection",
                "Shoppers scan a hangtag barcode, tap a trending item, or choose a merchandising recommendation.",
              ],
              [
                "Background handling",
                "Real-time silhouette segmentation isolates the primary user and blurs passersby that could distort the pose model.",
              ],
            ]}
          />
          <Feature
            number="03"
            title="Interactive try-on & recommendations"
            items={[
              [
                "Instant garment swapping",
                "Shoppers toggle sizes, alternate colorways, and complementary garments in real time.",
              ],
              [
                "AI complete the look",
                "The recommendation module intentionally pairs selections with underperforming or low-visibility store inventory.",
              ],
            ]}
          />
          <Feature
            number="04"
            title="Frictionless retail handoff"
            items={[
              [
                "Merchant-configurable actions",
                "Each retailer can choose the handoff modes that fit its store operations, staffing, and checkout model.",
              ],
            ]}
          />
        </div>

        <div className="handoff-table">
          <div className="handoff-row handoff-head">
            <span>Mode</span>
            <span>Shopper action & value</span>
            <span>Store impact</span>
          </div>
          {handoffs.map((handoff) => (
            <div className="handoff-row" key={handoff.mode}>
              <strong>{handoff.mode}</strong>
              <p>{handoff.action}</p>
              <p>{handoff.impact}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <UIScreenGallery
        title="A public interface designed around distance, movement, and touch."
        screens={[
          {
            label: "User details",
            type: "portrait",
            image: "assets/figma/kiosk/d5a83.png",
          },
          {
            label: "Catalogue",
            type: "portrait",
            image: "assets/figma/kiosk/e2219.png",
          },
          {
            label: "Try-on setup",
            type: "portrait",
            image: "assets/figma/kiosk/81dd5.png",
          },
          {
            label: "Saved catalogue",
            type: "portrait",
            image: "assets/figma/kiosk/4a3b0.png",
          },
          {
            label: "Individual product",
            type: "portrait",
            image: "assets/figma/kiosk/c6f2e.png",
          },
          {
            label: "Try-on result",
            type: "portrait",
            image: "assets/figma/kiosk/0891f.png",
          },
        ]}
      />

      <CaseSection number="04" title="Public UX, privacy & session management">
        <p className="section-intro">
          A shared retail environment requires strict data privacy protocols and
          automatic recovery mechanics.
        </p>
        <div className="privacy-lifecycle">
          <article>
            <span>15 sec</span>
            <div>
              <h3>Inactivity countdown</h3>
              <p>A subtle “Still there?” prompt checks for continued use.</p>
            </div>
          </article>
          <article>
            <span>Instant</span>
            <div>
              <h3>Local data purge</h3>
              <p>
                Shopper captures are deleted from local storage when a session
                ends or times out.
              </p>
            </div>
          </article>
          <article>
            <span>Reset</span>
            <div>
              <h3>Ambient recovery</h3>
              <p>
                The hardware returns to its branded screensaver for the next
                approaching shopper.
              </p>
            </div>
          </article>
        </div>
        <div className="privacy-notes">
          <p>
            <strong>No photo retention.</strong> Capture-screen microcopy
            explicitly explains that photos are processed locally and deleted
            immediately when the shopper walks away.
          </p>
          <p>
            <strong>Smart session timeout.</strong> A countdown begins after ten
            seconds outside the standing zone or fifteen seconds without a
            screen interaction, then purges all session data.
          </p>
        </div>
      </CaseSection>

      <CaseSection
        number="05"
        title="Key phygital takeaways & design learnings"
      >
        <div className="takeaway-list">
          <article>
            <span>01</span>
            <h3>Physical ergonomics dictate digital usability.</h3>
            <p>
              Software cannot be designed in isolation from hardware position.
              Auto-capture and high-contrast styling made the 21-inch display
              effortless for people of varying heights and physical abilities.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Kiosks must solve floor merchandising.</h3>
            <p>
              The store-owner value is not novelty—it is inventory velocity.
              Surfacing underperforming items turns the kiosk into an active
              revenue driver for retail partners.
            </p>
          </article>
        </div>
      </CaseSection>
    </div>
  )
}

function ShopifyCaseContent() {
  const metrics = [
    {
      metric: "Add-to-Cart Conversion Lift",
      outcome: "+24%",
      value: "Direct revenue growth across participating merchant storefronts",
    },
    {
      metric: "Product Return Rate",
      outcome: "−25%",
      value: "Significant reduction in sizing uncertainty and logistics costs",
    },
    {
      metric: "Merchant Onboarding",
      outcome: "< 3 mins",
      value: "Rapid store activation without developer intervention",
    },
  ]

  const failures = [
    {
      scenario: "Low ambient lighting",
      trigger: "Brightness below 20%",
      status: "Poor lighting detected",
      recovery:
        "Step into natural or overhead light so the AI can distinguish fabric contours.",
    },
    {
      scenario: "Multiple subjects detected",
      trigger: ">1 person detected",
      status: "Multiple people detected",
      recovery:
        "Please upload a photo with only yourself in the frame so the AI knows who to style.",
    },
    {
      scenario: "Partial body framing",
      trigger: "Keypoints cut off at frame edge",
      status: "Full body not detected",
      recovery:
        "Full body not visible. A full body photo provides better virtual try-on results.",
    },
    {
      scenario: "No person detected",
      trigger: "0 person detected",
      status: "No person detected",
      recovery:
        "We couldn’t detect a person. Upload a clear photo that shows a person.",
    },
  ]

  return (
    <div className="tuck-case">
      <section className="tuck-summary">
        <p className="case-label">Executive summary</p>
        <div>
          <h2>
            A dual-sided product ecosystem built for shoppers and merchants.
          </h2>
          <p>
            E-commerce try-on tools frequently suffer from friction: shoppers
            drop off due to lag and doubt, while merchants struggle with tools
            that lack clear performance metrics.
          </p>
          <h3>The Experience Solution</h3>
          <p>
            As a Product Designer at Tuck, I designed a streamlined Shopify app
            ecosystem with a clean, universal aesthetic.
          </p>
          <p>
            <strong>For Shoppers:</strong> A fast, intuitive widget that removes
            buying hesitation by making try-on immediate and simple.
          </p>
          <p>
            <strong>For Merchants:</strong> A lightweight, zero-code dashboard
            that makes onboarding, management, and tracking effortless.
          </p>
        </div>
        <div className="tuck-facts">
          <div>
            <span>Role</span>
            <p>Product Designer (B2B2C)</p>
          </div>
          <div>
            <span>Scope</span>
            <p>
              Shopper Widget, Merchant Dashboard, AI Interaction Architecture,
              Design System
            </p>
          </div>
          <div>
            <span>Timeline</span>
            <p>2026</p>
          </div>
        </div>
      </section>

      <section className="metric-section">
        <p className="case-label">Shipped impact</p>
        <div
          className="metric-table"
          role="table"
          aria-label="Project outcomes"
        >
          <div className="metric-row metric-head" role="row">
            <span role="columnheader">Metric</span>
            <span role="columnheader">Outcome</span>
            <span role="columnheader">Business value</span>
          </div>
          {metrics.map((item) => (
            <div className="metric-row" role="row" key={item.metric}>
              <span role="cell">{item.metric}</span>
              <strong role="cell">{item.outcome}</strong>
              <span role="cell">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <CaseSection number="01" title="The dual-sided ecosystem problem">
        <p className="section-intro">
          Designing a B2B2C product requires balancing two fundamentally
          distinct user personas whose needs intersect on the Product Detail
          Page.
        </p>
        <div className="persona-grid">
          <article>
            <span>The shopper challenge</span>
            <ul>
              <li>
                Sizing uncertainty driving 20%+ cart drop-off on apparel PDPs.
              </li>
              <li>
                Anxiety and bounce rates caused by multi-second AI generation
                latency.
              </li>
              <li>
                Hesitation uploading full-body photos due to privacy and
                security concerns.
              </li>
            </ul>
          </article>
          <article>
            <span>The merchant challenge</span>
            <ul>
              <li>
                Product returns eroding e-commerce profit margins, with a 20–30%
                return rate.
              </li>
              <li>
                Fragile third-party widgets that break custom store themes.
              </li>
              <li>
                Limited control over generative API costs and no visibility into
                AI ROI.
              </li>
            </ul>
          </article>
        </div>
      </CaseSection>

      <CaseSection
        number="02"
        title="Shopper front-end experience & interaction flow"
      >
        <p className="section-intro">
          The shopper experience is structured as a low-friction four-step
          linear flow.
        </p>
        <div className="shopper-flow" aria-label="Shopper experience flow">
          {[
            ["01", "PDP entry"],
            ["02", "Photo intake & consent"],
            ["03", "Latency masking & generation"],
            ["04", "Decision & add-to-cart"],
          ].map(([number, label]) => (
            <div className="flow-step" key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>

        <div className="feature-stack">
          <Feature
            number="01"
            title="PDP entry & universal theme ingestion"
            items={[
              [
                "Adaptive styling",
                "The trigger CTA dynamically inherits CSS variable tokens—border radius, primary colors, and typography—from the parent merchant theme, making the widget feel native.",
              ],
              [
                "Flexible placement",
                "Supports multiple mobile and desktop configurations, from a secondary CTA beneath “Add to Cart” to a floating mobile pill, without causing Cumulative Layout Shift.",
              ],
            ]}
          />
          <Feature
            number="02"
            title="Full-body photo intake & trust building"
            items={[
              [
                "Framing & orientation assistance",
                "An interactive overlay gives real-time prompts on optimal posture, standing distance, and ambient lighting for precise garment draping.",
              ],
              [
                "Privacy controls",
                "Prominent trust messaging clarifies that photos are encrypted, processed in memory for pose-fitting, and never saved or resold.",
              ],
            ]}
          />
          <Feature
            number="03"
            title="Latency management via progressive masking"
            items={[
              [
                "Progressive image resolution",
                "The uploaded photo appears with a subtle Gaussian blur, gradually sharpening into full fidelity as generative layers resolve.",
              ],
              [
                "Contextual microcopy",
                "Rotating status messages explain the work in progress: analyzing body ratio, matching fabric drape, and applying the lighting match.",
              ],
            ]}
          />
          <Feature
            number="04"
            title="Decision loop & direct conversion"
            items={[
              [
                "Fit heatmap overlay",
                "Highlights areas of tight or loose drape across different body zones.",
              ],
              [
                "Interactive size switcher",
                "Lets shoppers toggle between S, M, L, and XL without beginning a new generation flow.",
              ],
              [
                "Embedded conversion CTA",
                "A prominent “Add Recommended Size M to Cart” action keeps the shopper inside the buying funnel.",
              ],
            ]}
          />
        </div>
      </CaseSection>

      <UIScreenGallery
        title="The core shopper and merchant interfaces."
        screens={[
          {
            label: "Shopper UI",
            type: "phone",
            image: "assets/figma/shopify/36fde.png",
          },
          {
            label: "Shopper UI",
            type: "phone",
            image: "assets/figma/shopify/753b8.png",
          },
          {
            label: "Shopper UI",
            type: "phone",
            image: "assets/figma/shopify/a51d6.png",
          },
          {
            label: "Shopper UI",
            type: "phone",
            image: "assets/figma/shopify/5412d.png",
          },
          {
            label: "Shopper UI",
            type: "phone",
            image: "assets/figma/shopify/e50a4.png",
          },
          {
            label: "Shopper UI",
            type: "phone",
            image: "assets/figma/shopify/fc64c.png",
          },
          {
            label: "Merchant Admin panel screens",
            type: "wide",
            image: "assets/figma/shopify/eddc9.png",
          },
          {
            label: "Merchant Admin panel screens",
            type: "wide",
            image: "assets/figma/shopify/af08f.png",
          },
          {
            label: "Merchant Admin panel screens",
            type: "wide",
            image: "assets/figma/shopify/43cad.png",
          },
          {
            label: "Merchant Admin panel screens",
            type: "wide",
            image: "assets/figma/shopify/8e263.png",
          },
        ]}
      />

      <CaseSection
        number="03"
        title="Designing for non-deterministic AI failures"
      >
        <p className="section-intro">
          Generative models fail when fed low-quality inputs. Instead of
          surfacing generic technical errors, I mapped model failure triggers to
          clear and actionable recovery paths.
        </p>
        <div className="failure-table">
          {failures.map((failure) => (
            <article key={failure.scenario}>
              <div>
                <span>Scenario</span>
                <strong>{failure.scenario}</strong>
              </div>
              <div>
                <span>Detection trigger</span>
                <p>{failure.trigger}</p>
              </div>
              <div>
                <span>UI warning</span>
                <p>{failure.status}</p>
              </div>
              <div>
                <span>Recovery prompt</span>
                <p>{failure.recovery}</p>
              </div>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseSection number="04" title="Merchant admin dashboard">
        <p className="section-intro">
          The merchant control panel uses Shopify Polaris design tokens so
          non-technical store owners can manage branding, catalog coverage, and
          usage budgets in under three minutes.
        </p>
        <div className="merchant-grid">
          <Feature
            number="01"
            title="Zero-code theme customizer"
            items={[
              [
                "Visual WYSIWYG editor",
                "Fine-tune button shapes, colors, font mappings, and widget position with a real-time PDP preview.",
              ],
              [
                "Branded social watermarking",
                "Attach a subtle merchant logo to generated outputs to encourage social sharing.",
              ],
              [
                "Usage caps & cooldowns",
                "Configure session guardrails to prevent API budget overruns during peak events.",
              ],
            ]}
          />
          <Feature
            number="02"
            title="AI catalog management"
            items={[
              [
                "Granular SKU activation",
                "Activate try-on storewide or focus on high-return categories such as outerwear, formal wear, and tops.",
              ],
              [
                "Live ingestion tracker",
                "See ready-to-render SKUs and products that still require higher-resolution flatlay uploads.",
              ],
            ]}
          />
          <Feature
            number="03"
            title="Business intelligence & ROI"
            items={[
              [
                "Funnel analytics",
                "Track impressions through completed try-ons and add-to-cart conversion lift.",
              ],
              [
                "Category performance",
                "Compare engagement and return estimates by apparel category to inform inventory planning.",
              ],
            ]}
          />
        </div>
      </CaseSection>

      <CaseSection number="05" title="System architecture & theme immunity">
        <div className="architecture-grid">
          <article>
            <span>Encapsulated Shadow DOM</span>
            <p>
              I specified an isolated web-component wrapper so the plugin
              remains immune to merchant global CSS overrides while preventing
              plugin styles from leaking into the parent storefront.
            </p>
          </article>
          <article>
            <span>Responsive breakpoints</span>
            <p>
              The experience scales to 320px mobile viewports, supporting smooth
              photo uploads and fit visualizations on low-bandwidth connections.
            </p>
          </article>
        </div>
      </CaseSection>

      <CaseSection number="06" title="Key design takeaways">
        <div className="takeaway-list">
          <article>
            <span>01</span>
            <h3>Perceived speed equals user trust.</h3>
            <p>
              Masking multi-second model latency with progressive visual
              feedback and contextual microcopy reduced drop-offs more
              effectively than backend speed optimizations alone.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>B2B2C demands dual empathy.</h3>
            <p>
              A compelling consumer feature means little if merchant setup is
              cumbersome. Keeping store activation under three minutes was
              critical to acquisition and long-term retention.
            </p>
          </article>
        </div>
      </CaseSection>
    </div>
  )
}

function RfidKioskCaseContent() {
  const metrics = [
    {
      metric: "Outfit compilation time",
      outcome: "−40%",
      value:
        "Instant multi-tag RFID loading eliminates manual barcode-scanning friction.",
    },
    {
      metric: "Cross-category attach rate",
      outcome: "+18%",
      value:
        "Contextual “Complete the Look” pairings encourage discovery across categories.",
    },
    {
      metric: "Fitting-room stock requests",
      outcome: "+35%",
      value:
        "Real-time size availability removes uncertainty and increases trial intent.",
    },
  ]

  const edgeCases = [
    {
      scenario: "Tag collision or over-scan",
      condition: "More than 10 items placed on the tray",
      response:
        "A soft amber message asks the shopper to split the haul into smaller styling batches.",
      recovery:
        "Protects the layout and helps the reader disambiguate overlapping signals.",
    },
    {
      scenario: "Unrecognized or damaged tag",
      condition: "RFID resolves without a catalogue match",
      response:
        "The garment remains visible as an “Unidentified Piece” with a one-tap associate request.",
      recovery:
        "Keeps every valid item active without interrupting the shopper’s momentum.",
    },
    {
      scenario: "Abandoned session",
      condition: "45 seconds without shopper activity",
      response:
        "A radial countdown explains that the session is being cleared for privacy.",
      recovery:
        "Prevents outfit choices and browsing history from carrying into the next session.",
    },
  ]

  return (
    <div className="tuck-case rfid-case">
      <section className="tuck-summary">
        <p className="case-label">Executive summary</p>
        <div>
          <h2>Designing the phygital shopping experience.</h2>
          <p>
            Physical apparel shopping makes it difficult to move from browsing
            individual garments to evaluating a complete outfit. Shoppers carry
            armfuls of clothing, guess at size availability, and repeatedly
            change clothes just to understand how separate pieces work
            together.
          </p>
          <p>
            As Lead Product Designer, I created a 21-inch vertical touch
            interface connected to instant multi-tag RFID detection. The system
            combines the tactile pleasure of physical browsing with the speed,
            organization, and inventory intelligence shoppers expect from
            e-commerce.
          </p>
        </div>
        <div className="tuck-facts">
          <div>
            <span>Role</span>
            <p>Lead Product Designer — Physical-Digital Ecosystem</p>
          </div>
          <div>
            <span>Scope</span>
            <p>
              Kiosk UI/UX, RFID Interaction, Physical Ergonomics, Multi-Item
              Composition
            </p>
          </div>
          <div>
            <span>Timeline</span>
            <p>2026</p>
          </div>
        </div>
      </section>

      <section className="metric-section">
        <p className="case-label">Design impact</p>
        <div className="metric-table" role="table" aria-label="RFID kiosk impact">
          <div className="metric-row metric-head" role="row">
            <span>Metric</span>
            <span>Outcome</span>
            <span>Design driver</span>
          </div>
          {metrics.map((item) => (
            <div className="metric-row" role="row" key={item.metric}>
              <span>{item.metric}</span>
              <strong>{item.outcome}</strong>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <CaseSection
        number="01"
        title="Bridging physical tactility and digital fluidity"
      >
        <p className="section-intro">
          Public retail interfaces must work for people who are standing,
          carrying garments, moving quickly, and dividing their attention
          between the screen and the store.
        </p>
        <div className="objective-grid">
          <article>
            <span>01</span>
            <h3>Reduce cognitive load</h3>
            <p>
              Preserve sizes, colors, and potential pairings so shoppers do not
              have to remember every garment they are carrying.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Make hardware legible</h3>
            <p>
              Translate invisible RFID activity into immediate feedback so
              sensor delays never feel like system failure.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Design for reach variance</h3>
            <p>
              Place primary controls in the lower 60% of the portrait display
              for tall, short, and wheelchair-using shoppers.
            </p>
          </article>
        </div>
      </CaseSection>

      <CaseSection number="02" title="The four-stage shopper journey">
        <p className="section-intro">
          A fast interaction loop moves shoppers from ambient invitation to a
          complete outfit and fitting-room handoff with minimal cognitive
          friction.
        </p>
        <div className="shopper-flow" aria-label="RFID kiosk shopper journey">
          {[
            ["01", "Approach & ambient invitation"],
            ["02", "Instant RFID feed"],
            ["03", "Mix & match canvas"],
            ["04", "Try-on & handoff"],
          ].map(([number, label]) => (
            <div className="flow-step" key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>

        <div className="feature-stack">
          <Feature
            number="01"
            title="Ambient invitation & spatial ergonomics"
            items={[
              [
                "Calm idle state",
                "Cinematic editorial loops and one direct instruction replace noisy promotional advertising.",
              ],
              [
                "Thumb-zone hierarchy",
                "Size selectors and actions remain in the lower 60% while the upper display is reserved for outfit visualization.",
              ],
            ]}
          />
          <Feature
            number="02"
            title="Instant multi-tag RFID feed"
            items={[
              [
                "Zero-latency confirmation",
                "Garment cards slide upward like physical receipts as soon as items touch the scanner tray.",
              ],
              [
                "Smart stacking",
                "Larger batches automatically organize into tops, bottoms, and outerwear instead of becoming an overwhelming raw grid.",
              ],
            ]}
          />
          <Feature
            number="03"
            title="Tactile mix-and-match canvas"
            items={[
              [
                "Spatial drag-and-pair",
                "Dragging a top over a bottom snaps both into an outfit group and updates color-coordination guidance in real time.",
              ],
              [
                "Contextual size matrices",
                "A lightweight bottom sheet shows live XS–XXL availability across the sales floor, backstock, and sold-out states.",
              ],
            ]}
          />
          <Feature
            number="04"
            title="Fitting-room and mobile continuity"
            items={[
              [
                "Associate handoff",
                "A shopper assigns the look to a fitting-room number and dispatches the pick list to a staff handheld.",
              ],
              [
                "QR session transfer",
                "The complete canvas can move into the shopper’s mobile browser without losing item groups or sizes.",
              ],
            ]}
          />
        </div>
      </CaseSection>

      <UIScreenGallery
        title="A composition interface built for fast standing interactions."
        screens={[
          {
            label: "Ambient invitation",
            type: "portrait",
            image: "assets/figma/rfid/ambient-invitation.jpg",
          },
          {
            label: "Look review and confirmation",
            type: "portrait",
            image: "assets/figma/rfid/look-confirmation.jpg",
          },
          {
            label: "Processing garments",
            type: "portrait",
            image: "assets/figma/rfid/processing-look.jpg",
          },
          {
            label: "Add to cart",
            type: "portrait",
            image: "assets/figma/rfid/add-to-cart.jpg",
          },
          {
            label: "Session complete and data deletion",
            type: "portrait",
            image: "assets/figma/rfid/session-complete.jpg",
          },
        ]}
      />

      <CaseSection
        number="03"
        title="Physical edge cases and graceful recovery"
      >
        <p className="section-intro">
          Hardware errors are translated into human guidance that protects the
          shopper’s progress instead of exposing technical codes or dead ends.
        </p>
        <div className="failure-table rfid-failure-table">
          {edgeCases.map((edgeCase) => (
            <article key={edgeCase.scenario}>
              <div>
                <span>Scenario</span>
                <strong>{edgeCase.scenario}</strong>
              </div>
              <div>
                <span>Trigger</span>
                <p>{edgeCase.condition}</p>
              </div>
              <div>
                <span>UX response</span>
                <p>{edgeCase.response}</p>
              </div>
              <div>
                <span>Recovery value</span>
                <p>{edgeCase.recovery}</p>
              </div>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseSection number="04" title="Systemic design and hardware constraints">
        <div className="service-blueprint">
          <article>
            <span>01</span>
            <h3>Immersive locked shell</h3>
            <p>
              Browser chrome, system gestures, and navigation bars remain
              suppressed so shoppers cannot accidentally leave the kiosk
              experience.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>High-contrast touch system</h3>
            <p>
              Typography and touch areas maintain standing-distance legibility
              under changing track lighting and screen glare.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Local edge caching</h3>
            <p>
              Catalogue imagery and local inventory remain available through
              temporary Wi-Fi interruptions without layout stutter.
            </p>
          </article>
        </div>
      </CaseSection>

      <CaseSection number="05" title="Key phygital design takeaways">
        <div className="takeaway-list">
          <article>
            <span>01</span>
            <h3>Physical gestures should mirror digital feedback.</h3>
            <p>
              Connecting the act of dropping clothes on a tray with immediate
              upward card motion creates a clear sense of physical-digital
              continuity.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Design for environmental distraction.</h3>
            <p>
              Every core interaction—from scan, to pair, to try-on—must remain
              understandable and achievable in fewer than three taps.
            </p>
          </article>
        </div>
      </CaseSection>
    </div>
  )
}

function UIScreenGallery({
  title,
  screens,
}: {
  title: string
  screens: {
    label: string
    type: "wide" | "phone" | "portrait"
    image?: string
  }[]
}) {
  const labelsRepeat = new Set(screens.map((screen) => screen.label)).size <
    screens.length
  const groups = labelsRepeat
    ? screens.reduce<{ label: string; screens: typeof screens }[]>(
        (result, screen) => {
          const previous = result.at(-1)
          if (previous?.label === screen.label) {
            previous.screens.push(screen)
          } else {
            result.push({ label: screen.label, screens: [screen] })
          }
          return result
        },
        [],
      )
    : [{ label: "", screens }]

  return (
    <section
      className={`ui-gallery-section${
        labelsRepeat ? " ui-gallery-section--shopify" : ""
      }`}
    >
      <div className="ui-gallery-heading">
        <p className="case-label">UI screen gallery</p>
        <h2>{title}</h2>
      </div>
      {groups.map((group, groupIndex) => (
        <div
          className={`ui-screen-group ui-screen-group--${groupIndex + 1}`}
          key={group.label || "screens"}
        >
          {group.label && <p className="ui-screen-group-label">{group.label}</p>}
          <div className="ui-screen-grid">
            {group.screens.map((screen, index) => (
              <article
                className={`ui-screen-slot ui-screen-slot--${screen.type}`}
                key={`${screen.image}-${index}`}
              >
                <div
                  className={`ui-placeholder${
                    screen.image ? " ui-placeholder--filled" : ""
                  }`}
                >
                  {screen.image ? (
                    <img
                      src={assetUrl(screen.image)}
                      alt={`${screen.label} interface`}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>UI screen placeholder</p>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

function CaseSection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="tuck-section">
      <div className="tuck-section-heading">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      <div className="tuck-section-body">{children}</div>
    </section>
  )
}

function Feature({
  number,
  title,
  items,
}: {
  number: string
  title: string
  items: string[][]
}) {
  return (
    <article className="feature">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        {items.map(([label, copy]) => (
          <p key={label}>
            <strong>{label}:</strong> {copy}
          </p>
        ))}
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <>
      <SiteHeader />

      <section className="hero" id="top">
        <p className="eyebrow">
          Selected work
          <br />
          2026
        </p>
        <h1>
          Hello — I&apos;m Navaneeth Mohan, a Product Designer crafting
          exquisite experiences with great people.
        </h1>
      </section>

      <section className="work" id="work" aria-label="Selected projects">
        {projects.map((project, index) => (
          <article className="project" key={project.title}>
            <div className="project-meta">
              <span className="project-year">{index + 1}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span className="project-discipline">{project.discipline}</span>
            </div>
            <a
              className={`project-card ${project.theme}`}
              href={`#project/${project.slug}`}
              aria-label={`View ${project.title} project`}
            >
              {project.imageBase && (
                <img src={assetUrl(project.imageBase)} alt="" />
              )}
              <img
                className="image-overlay"
                src={assetUrl(project.image)}
                alt={project.imageAlt}
              />
            </a>
          </article>
        ))}
      </section>

      <section className="about" id="about">
        <p className="eyebrow">A little about me</p>
        <div>
          <h2>
            I turn complex ideas into intuitive products, working across web
            platforms, hardware UI, and emerging technologies.
          </h2>
          <p>
            Currently independent and available for a product design role where
            I can build thoughtful tools alongside a great team.
          </p>
        </div>
      </section>

      <footer id="contact">
        <p>Hiring for your design team?</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=n8089193972@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let&apos;s talk about how I can add value ↗
        </a>
        <div className="footer-meta">
          <span>© 2026 Navaneeth Mohan</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const slug = route.startsWith("#project/") ? route.slice(9) : ""
  const selectedProject = projects.find((project) => project.slug === slug)

  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash)
    window.addEventListener("hashchange", updateRoute)
    return () => window.removeEventListener("hashchange", updateRoute)
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => {
      if (selectedProject) {
        portfolioRef.current?.scrollTo({ top: 0 })
        return
      }

      const id = route.replace("#", "")
      if (id) {
        document.getElementById(id)?.scrollIntoView({ block: "start" })
      } else {
        portfolioRef.current?.scrollTo({ top: 0 })
      }
    })
  }, [route, selectedProject])

  return (
    <main className="site-shell">
      <div className="portfolio" ref={portfolioRef}>
        {selectedProject ? (
          <ProjectPage project={selectedProject} />
        ) : (
          <HomePage />
        )}
      </div>
    </main>
  )
}
