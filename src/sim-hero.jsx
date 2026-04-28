// Hero capability overview card — clean institutional summary, no fake app UI.

const SimHero = () => {
  const items = [
    { l: 'Equipment Positioning', icon: IconTube, d: 'Tube · Bucky · SID' },
    { l: 'Patient Setup', icon: IconPatient, d: 'Position · Markers · Prep' },
    { l: 'Collimation', icon: IconBeam, d: 'Field size · Centering' },
    { l: 'Technique Selection', icon: IconTechnical, d: 'kVp · mAs · Angle' },
    { l: 'Exam Criteria', icon: IconCriteria, d: 'Per projection' },
    { l: 'Structured Feedback', icon: IconFeedback, d: 'Setup review' },
  ];

  return (
    <div className="relative w-full rounded-[16px] overflow-hidden bg-white border border-line shadow-panel">

      {/* Header bar */}
      <div className="bg-navy text-white px-5 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-medblue/90"><IconLogoMark className="w-5 h-5" /></span>
          <div className="leading-tight">
            <div className="text-[13.5px] font-semibold tracking-tight">Rad Mastery Capability Overview</div>
            <div className="text-[10.5px] text-slate-300/90 mt-0.5">Educational radiography simulator</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
          iPhone · iPad
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          {items.map((it, i) => (
            <div key={i} className="bg-soft border border-line rounded-lg p-3.5 sm:p-4 flex items-start gap-3">
              <span className="flex-none w-9 h-9 rounded-md bg-medblue/[0.08] border border-medblue/20 text-medblue flex items-center justify-center">
                <it.icon className="w-[17px] h-[17px]" />
              </span>
              <div className="min-w-0 leading-tight">
                <div className="text-[13px] font-semibold text-navy">{it.l}</div>
                <div className="text-[11.5px] text-slate-500 mt-1">{it.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-5 pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-medblue/70" />
            Workflow modeled on radiography exam criteria.
          </div>
          <div className="text-[10px] font-mono text-slate-400 tracking-wider">UNITY 6 · URP</div>
        </div>
      </div>
    </div>
  );
};

window.SimHero = SimHero;
