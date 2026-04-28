// Sections of the Rad Mastery landing page.
// Uses framer-motion (window.motion / window.FramerMotion) for restrained scroll-reveals.

const { motion } = window.FramerMotion || window.Motion || (window.framerMotion ?? {});
const M = (window.FramerMotion && window.FramerMotion.motion) || (window.Motion && window.Motion.motion) || motion;
// Robust resolution — Framer Motion 11 UMD exposes window.FramerMotion.motion
const FM = window.FramerMotion || {};
const fmMotion = FM.motion || M;
const useInView = FM.useInView;

// Reveal: fades up on scroll, restrained.
const Reveal = ({ children, delay = 0, y = 16, className = '' }) => {
  const ref = React.useRef(null);
  const inView = useInView ? useInView(ref, { once: true, amount: 0.18, margin: '-40px 0px' }) : true;
  return (
    <fmMotion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </fmMotion.div>
  );
};

// =============================================================
// 2. HERO
// =============================================================
const Hero = () => (
  <section id="top" className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
    {/* Soft background — institutional, not flashy */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-soft via-white to-white" />
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0, 86, 179, 0.10), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 80%)',
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-6 lg:pr-4">
          <fmMotion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-line text-[11.5px] font-medium text-medblue shadow-card">
              <span className="w-1.5 h-1.5 rounded-full bg-medblue" />
              <span className="tracking-wide uppercase text-[10.5px]">Educational Simulator · iPhone & iPad</span>
            </div>
          </fmMotion.div>

          <fmMotion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 }}
            className="h-display mt-5 text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.04] font-bold text-navy"
          >
            Precision 3D
            <br />
            Radiography <span className="text-medblue">Training</span>
          </fmMotion.h1>

          <fmMotion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 0.18 }}
            className="mt-6 text-[16.5px] sm:text-[17.5px] leading-[1.6] text-slate-600 max-w-[560px]"
          >
            Practice equipment positioning, patient setup, collimation, and exposure settings in a safe 3D simulation environment built for radiography education.
          </fmMotion.p>

          <fmMotion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 0.26 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-3.5"
          >
            <button
              type="button"
              className="pulse-cta inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-medblue text-white text-[14.5px] font-semibold hover:bg-[#004ba0] transition-colors shadow-card"
            >
              Coming Soon on the App Store
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-white border border-line text-navy text-[14.5px] font-semibold hover:border-medblue hover:text-medblue transition-colors"
            >
              Request Pilot Access
            </a>
          </fmMotion.div>

          <fmMotion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-7 space-y-2 text-[13.5px] text-slate-500"
          >
            <div className="flex items-start gap-2">
              <IconDevice className="w-4 h-4 mt-[2px] text-slate-400" />
              <span>Launching first for iPhone and iPad. Android and web access are planned for future development.</span>
            </div>
            <div className="flex items-start gap-2">
              <IconShield className="w-4 h-4 mt-[2px] text-slate-400" />
              <span>Built for radiography students, instructors, and clinical workflow practice.</span>
            </div>
          </fmMotion.div>
        </div>

        {/* Right — simulator preview */}
        <fmMotion.div
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          {/* Decorative outer card frame */}
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[18px] bg-gradient-to-br from-navy/[0.04] via-medblue/[0.04] to-transparent" />
            <SimHero />
            {/* Floating mini badge */}
            <div className="hidden sm:flex absolute -bottom-4 left-6 items-center gap-2.5 bg-white border border-line rounded-full pl-2 pr-4 py-2 shadow-card">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-medblue/10 text-medblue">
                <IconBeam className="w-4 h-4" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold text-navy">Exam-Based Criteria</div>
                <div className="text-[10.5px] text-slate-500">Centering · Collimation · Technique</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-3 -right-3 items-center gap-2 bg-navy text-white rounded-full pl-3 pr-3.5 py-2 shadow-panel">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              <span className="text-[10.5px] font-mono tracking-wider">UNITY 6 · URP</span>
            </div>
          </div>
        </fmMotion.div>
      </div>
    </div>
  </section>
);

// =============================================================
// 3. PROBLEM / SOLUTION
// =============================================================
const ProblemSolution = () => (
  <section className="py-20 sm:py-24 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionEyebrow>Problem & Solution</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h-display mt-3 text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.08] font-bold text-navy">
              Bridge the Gap Between Theory and Clinical Practice
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-[16px] leading-[1.65] text-slate-600 max-w-[540px]">
              Physical lab time is limited. Radiation safety limits repeated live practice. Rad Mastery gives students a safe place to practice positioning, technical factors, and clinical workflow before working with patients.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {[
              { icon: IconClock, t: 'Limited lab access', d: 'Skill repetition is constrained by equipment, scheduling, and instructor availability.' },
              { icon: IconShield, t: 'No live radiation exposure during practice', d: 'Run setup, technique, and centering steps without live patient exposure.' },
              { icon: IconRepeat, t: 'Repeatable practice with feedback', d: 'Run the same exam as many times as needed and receive structured review.' },
            ].map((p, i) => (
              <Reveal key={i} delay={0.18 + i * 0.06}>
                <div className="flex items-start gap-3.5">
                  <div className="flex-none mt-0.5 w-9 h-9 rounded-md bg-soft border border-line text-medblue flex items-center justify-center">
                    <p.icon className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <div className="text-[14.5px] font-semibold text-navy">{p.t}</div>
                    <div className="text-[13.5px] text-slate-600 leading-snug mt-0.5">{p.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Process card */}
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <div className="relative bg-soft border border-line rounded-2xl p-6 sm:p-8 shadow-card">
              <div className="text-[10.5px] uppercase tracking-[0.14em] font-semibold text-medblue mb-5">
                Learning Pathway
              </div>
              <div className="flex flex-col gap-3.5">
                {[
                  { step: '01', t: 'Classroom Theory', d: 'Foundational coursework and exam criteria.' },
                  { step: '02', t: '3D Simulation Practice', d: 'Repeatable workflow practice with structured feedback.' },
                  { step: '03', t: 'Clinical Workflow Familiarity', d: 'Comfort with exam steps and equipment ahead of live patient work.' },
                ].map((s, i, arr) => (
                  <div key={i}>
                    <div className="bg-white border border-line rounded-xl px-4 sm:px-5 py-4 flex items-center gap-4 shadow-card">
                      <div className="flex-none w-10 h-10 rounded-md bg-navy text-white font-mono text-[12px] font-semibold flex items-center justify-center">
                        {s.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14.5px] font-semibold text-navy">{s.t}</div>
                        <div className="text-[13px] text-slate-500 leading-snug mt-0.5">{s.d}</div>
                      </div>
                      <IconArrowRight className="hidden sm:block w-4 h-4 text-slate-400 flex-none" />
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex justify-center py-1.5">
                        <svg width="2" height="22" viewBox="0 0 2 22"><line x1="1" y1="0" x2="1" y2="22" stroke="#cbd5e1" strokeWidth="1.4" strokeDasharray="2 3" /></svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

// =============================================================
// 4. TECHNOLOGY (Feature grid)
// =============================================================
const Technology = () => {
  const features = [
    { icon: IconTube, t: 'Equipment Positioning', d: 'Practice tube, table, and wall bucky positioning in a controlled 3D training space.' },
    { icon: IconPatient, t: 'Patient Setup', d: 'Work through patient positioning, shielding choices, markers, and breathing instructions.' },
    { icon: IconTechnical, t: 'Technical Control', d: 'Adjust kVp, mAs, SID, tube angle, and collimation to understand setup decisions.' },
    { icon: IconCriteria, t: 'Exam-Based Criteria', d: 'Each projection uses structured criteria to guide positioning, technique, prep, and anatomy review.' },
    { icon: IconFeedback, t: 'Real-Time Feedback', d: 'Receive immediate feedback on centering, alignment, collimation, and setup accuracy.' },
    { icon: IconRepeat, t: 'Safe Repetition', d: 'Repeat exams without radiation exposure, patient risk, or lab scheduling pressure.' },
  ];

  return (
    <section id="technology" className="py-20 sm:py-24 lg:py-28 bg-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <Reveal><SectionEyebrow>Technology</SectionEyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="h-display mt-3 text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.08] font-bold text-navy">
              Built for Radiography Skill Development
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-[16px] leading-[1.65] text-slate-600 max-w-[640px]">
              Rad Mastery focuses on the skills students use in imaging labs and clinical settings.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((f, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <div className="group h-full bg-white rounded-xl border border-line p-6 lg:p-7 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 hover:border-medblue/30 transition-all duration-300">
                <div className="w-11 h-11 rounded-md bg-medblue/[0.08] border border-medblue/20 text-medblue flex items-center justify-center group-hover:bg-medblue group-hover:text-white transition-colors">
                  <f.icon className="w-[20px] h-[20px]" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold text-navy h-tight">{f.t}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================
// 5. WORKFLOW (replaces Simulator preview)
// =============================================================
const WORKFLOW_STEPS = [
  { n: '01', t: 'Select Projection', d: 'Choose the exam and view.' },
  { n: '02', t: 'Position Equipment', d: 'Adjust tube, table, wall bucky, SID, and tube angle.' },
  { n: '03', t: 'Prepare Patient', d: 'Review patient positioning, shielding choices, markers, and breathing instructions.' },
  { n: '04', t: 'Set Technique', d: 'Practice kVp, mAs, collimation, and exposure setup.' },
  { n: '05', t: 'Review Feedback', d: 'Receive structured feedback based on exam criteria.' },
];

const PRACTICE_AREAS = [
  { icon: IconTube, t: 'Equipment', d: 'Tube alignment, SID, tube angle, wall bucky, table height.' },
  { icon: IconPatient, t: 'Patient', d: 'Positioning, marker placement, shielding, breathing instructions.' },
  { icon: IconTechnical, t: 'Technique', d: 'kVp, mAs, collimation field size, centering.' },
  { icon: IconFeedback, t: 'Review', d: 'Centering check, collimation review, rotation check, setup criteria.' },
];

const PROJECTIONS = [
  'Chest PA', 'Chest AP Supine', 'Abdomen AP',
  'Lumbar AP', 'Cervical Lateral', 'Knee AP',
  'Hand PA', 'Pelvis AP', 'Shoulder AP',
];

const WorkflowSection = () => (
  <section id="workflow" className="py-20 sm:py-24 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <Reveal><SectionEyebrow>Workflow</SectionEyebrow></Reveal>
        <Reveal delay={0.06}>
          <h2 className="h-display mt-3 text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.08] font-bold text-navy">
            A Digital Lab for Radiography Practice
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 text-[16px] leading-[1.65] text-slate-600 max-w-[640px]">
            Rad Mastery guides students through the steps of a radiographic exam, from projection selection to structured feedback.
          </p>
        </Reveal>
      </div>

      {/* 5-step horizontal workflow */}
      <div className="mt-12 lg:mt-14">
        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
            {WORKFLOW_STEPS.map((s, i) => (
              <div key={i} className="relative bg-white border border-line rounded-xl p-5 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 hover:border-medblue/30 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-medblue font-semibold tracking-wider">{s.n}</span>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <span className="hidden lg:inline-flex text-slate-300">
                      <IconArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <div className="mt-3 text-[15.5px] font-semibold text-navy h-tight leading-snug">{s.t}</div>
                <div className="mt-1.5 text-[13px] text-slate-600 leading-snug">{s.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Practice Areas */}
      <div className="mt-16 lg:mt-20">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <SectionEyebrow>Practice Areas</SectionEyebrow>
              <h3 className="h-display mt-3 text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.15] font-bold text-navy">
                Skill areas covered by the simulator
              </h3>
            </div>
          </div>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {PRACTICE_AREAS.map((a, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div className="h-full bg-soft border border-line rounded-xl p-5 lg:p-6 hover:bg-white hover:border-medblue/30 hover:-translate-y-0.5 transition-all duration-300">
                <span className="w-10 h-10 rounded-md bg-medblue/[0.08] border border-medblue/20 text-medblue flex items-center justify-center">
                  <a.icon className="w-[18px] h-[18px]" />
                </span>
                <div className="mt-4 text-[15.5px] font-semibold text-navy h-tight">{a.t}</div>
                <div className="mt-1.5 text-[13px] text-slate-600 leading-snug">{a.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Projection Coverage */}
      <div className="mt-16 lg:mt-20">
        <Reveal>
          <SectionEyebrow>Projection Coverage</SectionEyebrow>
          <h3 className="h-display mt-3 text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.15] font-bold text-navy">
            Projections supported in development builds
          </h3>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {PROJECTIONS.map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-white border border-line text-[13px] text-navy font-medium shadow-card">
                <span className="w-1 h-1 rounded-full bg-medblue/70" />
                {p}
              </span>
            ))}
          </div>
          <div className="mt-4 text-[13px] text-slate-500">
            Additional projections are planned as development continues.
          </div>
        </Reveal>

        {/* Visual clarification */}
        <Reveal delay={0.14}>
          <div className="mt-8 text-[12.5px] text-slate-500 italic">
            Website visuals are simplified product summaries.
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

// =============================================================
// 6. NATIVE APP
// =============================================================
const NativeApp = () => {
  const items = [
    { icon: IconChip, k: 'Engine', v: 'Unity 6' },
    { icon: IconLayers, k: 'Rendering', v: 'Universal Render Pipeline' },
    { icon: IconDevice, k: 'Initial Platform', v: 'iPhone and iPad' },
    { icon: IconBook, k: 'App Type', v: 'Educational radiography training simulator' },
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-soft border-y border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal><SectionEyebrow>Native Application</SectionEyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="h-display mt-3 text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.08] font-bold text-navy">
                Built as a Native 3D Training App
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-[16px] leading-[1.65] text-slate-600">
                Rad Mastery is being developed as a Unity-based mobile application for iPhone and iPad. The simulator uses a 3D environment to support equipment movement, exam setup, and structured skill feedback.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {items.map((it, i) => (
                  <div key={i} className="bg-white border border-line rounded-xl p-5 shadow-card">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-md bg-medblue/[0.08] text-medblue flex items-center justify-center">
                        <it.icon className="w-[18px] h-[18px]" />
                      </span>
                      <div className="text-[10.5px] uppercase tracking-[0.14em] font-semibold text-slate-500">{it.k}</div>
                    </div>
                    <div className="mt-3 text-[16.5px] font-semibold text-navy h-tight leading-snug">{it.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================================
// 7. PILOT
// =============================================================
const Pilot = () => (
  <section id="pilot" className="py-20 sm:py-24 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-6">
          <Reveal><SectionEyebrow>Pilot Program</SectionEyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="h-display mt-3 text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.08] font-bold text-navy">
              Institutional Pilot Program
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-[16px] leading-[1.65] text-slate-600 max-w-[560px]">
              Rad Mastery Software LLC is preparing an initial pilot at Aultman College. The pilot will study how 3D simulation can support positioning accuracy, technical factor selection, workflow practice, and student confidence.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-medblue hover:text-navy transition-colors"
            >
              Discuss a pilot with us
              <IconArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <div className="relative bg-gradient-to-br from-navy to-[#001734] rounded-2xl p-7 sm:p-9 text-white shadow-panel overflow-hidden">
              <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-medblue/15 blur-3xl" aria-hidden="true" />
              <div className="absolute inset-0 opacity-[0.18]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />

              <div className="relative">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-cyan-300/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                  Planned Pilot
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                  <div>
                    <div className="text-[10.5px] uppercase tracking-[0.14em] text-slate-300/80">Pilot Site</div>
                    <div className="mt-1.5 text-[20px] font-semibold h-tight">Aultman College</div>
                  </div>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-[0.14em] text-slate-300/80">Status</div>
                    <div className="mt-1.5 text-[20px] font-semibold h-tight">Planning &amp; Evaluation</div>
                  </div>
                </div>

                <div className="mt-7 h-px bg-white/10" />

                <div className="mt-6">
                  <div className="text-[10.5px] uppercase tracking-[0.14em] text-slate-300/80 mb-3">Focus Areas</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Positioning accuracy',
                      'Technical factor understanding',
                      'Clinical workflow practice',
                      'Student confidence',
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-white/[0.05] border border-white/10">
                        <span className="w-5 h-5 flex-none rounded-sm bg-cyan-400/20 text-cyan-200 flex items-center justify-center">
                          <IconCheck className="w-3 h-3" />
                        </span>
                        <span className="text-[13px] text-slate-100">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

// =============================================================
// 8. EDUCATIONAL USE
// =============================================================
const EducationalUse = () => (
  <section className="py-20 sm:py-24 bg-soft">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <Reveal>
        <div className="bg-white border border-line rounded-2xl px-7 sm:px-10 py-9 sm:py-11 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <SectionEyebrow>Intended Use</SectionEyebrow>
              <h2 className="h-display mt-3 text-[26px] sm:text-[30px] lg:text-[32px] leading-[1.12] font-bold text-navy">
                Designed for Training, Not Diagnosis
              </h2>
            </div>
            <div className="lg:col-span-8 lg:pl-4 lg:border-l lg:border-line">
              <p className="text-[16px] leading-[1.7] text-slate-600">
                Rad Mastery is an educational training tool. It supports simulation-based learning, skill practice, and classroom instruction. It is not intended for diagnosis, treatment decisions, or clinical image interpretation.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// =============================================================
// 9. ABOUT
// =============================================================
const About = () => {
  const rows = [
    { k: 'Business Entity', v: 'Rad Mastery Software LLC' },
    { k: 'Location', v: 'North Canton, Ohio' },
    { k: 'Focus', v: 'Radiography education software' },
    { k: 'Audience', v: 'Radiography students, instructors, and allied health programs' },
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <Reveal><SectionEyebrow>About</SectionEyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="h-display mt-3 text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.08] font-bold text-navy">
                About Rad Mastery Software LLC
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-[16px] leading-[1.65] text-slate-600 max-w-[520px]">
                Rad Mastery Software LLC is a registered business entity based in North Canton, Ohio. The company develops focused educational tools for radiography students and allied health programs.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <dl className="bg-soft border border-line rounded-2xl divide-y divide-line">
                {rows.map((r, i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 px-5 sm:px-7 py-5">
                    <dt className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-500 sm:col-span-1">
                      {r.k}
                    </dt>
                    <dd className="text-[15.5px] text-navy font-medium sm:col-span-2 leading-snug">
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================================
// 10. CONTACT
// =============================================================
const Contact = () => (
  <section id="contact" className="py-20 sm:py-24 lg:py-28 bg-soft">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <Reveal>
        <div className="relative bg-gradient-to-br from-navy via-[#001b3a] to-[#001734] rounded-2xl px-7 sm:px-12 py-12 sm:py-16 text-white shadow-panel overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20] pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 30% 30%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 30% 30%, black, transparent 75%)',
          }} />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-medblue/25 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionEyebrow tone="onDark">Contact</SectionEyebrow>
              <h2 className="h-display mt-3 text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.08] font-bold">
                Contact
              </h2>
              <p className="mt-4 text-[16px] leading-[1.65] text-slate-200 max-w-[560px]">
                For pilot program questions, institutional interest, or product updates, contact Rad Mastery Software LLC directly.
              </p>
              <a
                href="mailto:iaroslav@radmasterysoftware.com"
                className="mt-6 inline-flex items-center gap-2.5 text-[15px] font-mono text-cyan-200 hover:text-white transition-colors"
              >
                <IconMail className="w-4 h-4" />
                iaroslav@radmasterysoftware.com
              </a>
            </div>

            <div className="lg:col-span-5">
              <a
                href="mailto:iaroslav@radmasterysoftware.com"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-white text-navy text-[15px] font-semibold hover:bg-cyan-50 transition-colors shadow-card"
              >
                <IconMail className="w-4 h-4" />
                Email Rad Mastery Software LLC
              </a>

            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// =============================================================
// 11. FOOTER
// =============================================================
const Footer = () => (
  <footer className="bg-navy text-slate-300">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-10">
        <div className="sm:col-span-6">
          <div className="flex items-center gap-2.5 text-white">
            <span className="text-medblue/90"><IconLogoMark className="w-6 h-6" /></span>
            <span className="font-semibold tracking-tight text-[16px]">Rad Mastery Software LLC</span>
          </div>
          <div className="mt-3 text-[13.5px] text-slate-400 leading-relaxed">
            North Canton, Ohio<br />
            <a href="mailto:iaroslav@radmasterysoftware.com" className="text-cyan-300 hover:text-white transition-colors">iaroslav@radmasterysoftware.com</a>
          </div>
        </div>
        <div className="sm:col-span-3">
          <div className="text-[10.5px] uppercase tracking-[0.14em] font-semibold text-slate-400">Product</div>
          <ul className="mt-3 space-y-2 text-[13.5px]">
            <li><a href="#technology" className="text-slate-300 hover:text-white transition-colors">Technology</a></li>
            <li><a href="#workflow" className="text-slate-300 hover:text-white transition-colors">Workflow</a></li>
            <li><a href="#pilot" className="text-slate-300 hover:text-white transition-colors">Pilot Program</a></li>
            <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="sm:col-span-3">
          <div className="text-[10.5px] uppercase tracking-[0.14em] font-semibold text-slate-400">Platform</div>
          <ul className="mt-3 space-y-2 text-[13.5px] text-slate-300">
            <li>iPhone and iPad</li>
            <li className="text-slate-400">Android (planned)</li>
            <li className="text-slate-400">Web access (planned)</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12.5px] text-slate-400">
        <div>© 2026 Rad Mastery Software LLC. All rights reserved.</div>
        <div className="text-slate-500">Educational training tool. Not for diagnosis or clinical interpretation.</div>
      </div>
    </div>
  </footer>
);

// =============================================================
// Helpers
// =============================================================
const SectionEyebrow = ({ children, tone }) => (
  <div className={`inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.18em] font-semibold ${
    tone === 'onDark' ? 'text-cyan-300/90' : 'text-medblue'
  }`}>
    <span className={`w-5 h-px ${tone === 'onDark' ? 'bg-cyan-300/60' : 'bg-medblue/60'}`} />
    {children}
  </div>
);

Object.assign(window, {
  Reveal, Hero, ProblemSolution, Technology, WorkflowSection, NativeApp,
  Pilot, EducationalUse, About, Contact, Footer, SectionEyebrow,
});
