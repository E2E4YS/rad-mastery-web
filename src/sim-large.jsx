// Larger preview block for "Simulator" section — abstract capability summary,
// NOT a fake screenshot of the actual app.

const SimLarge = () => {
  const exams = [
    'Chest PA', 'Chest AP Supine', 'Abdomen AP',
    'Lumbar AP', 'Cervical Lateral', 'Knee AP',
    'Hand PA', 'Pelvis AP', 'Shoulder AP',
  ];
  const skills = [
    { k: 'Equipment', items: ['Tube alignment', 'SID', 'Tube angle', 'Wall bucky', 'Table height'] },
    { k: 'Patient', items: ['Position', 'Marker placement', 'Shielding', 'Breathing instructions'] },
    { k: 'Technique', items: ['kVp', 'mAs', 'Collimation field size', 'Centering'] },
    { k: 'Review', items: ['Centering check', 'Collimation review', 'Rotation check', 'Setup criteria'] },
  ];

  return (
    <div className="relative w-full rounded-[16px] overflow-hidden bg-white border border-line shadow-panel">
      {/* Top institutional bar */}
      <div className="bg-navy text-white px-6 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-medblue/90"><IconLogoMark className="w-6 h-6" /></span>
          <div className="leading-tight">
            <div className="text-[14px] font-semibold tracking-tight">Rad Mastery Simulator</div>
            <div className="text-[11px] text-slate-300">Capability overview</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[10.5px] font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
          iPhone · iPad
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Skills column */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 lg:border-r lg:border-line">
          <div className="text-[10.5px] uppercase tracking-[0.18em] font-semibold text-medblue">
            Skill Areas
          </div>
          <h3 className="mt-2 text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-navy h-tight leading-[1.15]">
            What students practice in the simulator
          </h3>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((s, i) => (
              <div key={i} className="bg-soft border border-line rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-medblue">0{i + 1}</span>
                  <div className="text-[13px] font-semibold text-navy h-tight">{s.k}</div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-slate-600">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-medblue/70 flex-none" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage column */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-soft">
          <div className="text-[10.5px] uppercase tracking-[0.18em] font-semibold text-medblue">
            Projection Coverage
          </div>
          <h3 className="mt-2 text-[20px] sm:text-[22px] font-bold text-navy h-tight leading-[1.2]">
            Common projections used in radiography programs
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {exams.map((e) => (
              <span key={e} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-line text-[12.5px] text-navy font-medium">
                <span className="w-1 h-1 rounded-full bg-medblue/70" />
                {e}
              </span>
            ))}
            <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-white border border-dashed border-line text-[12.5px] text-slate-500 font-medium">
              additional projections in development
            </span>
          </div>

          <div className="mt-7 pt-5 border-t border-line">
            <div className="text-[10.5px] uppercase tracking-[0.18em] font-semibold text-slate-500 mb-3">
              Modes
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-none w-8 h-8 rounded-md bg-medblue/[0.08] border border-medblue/20 text-medblue flex items-center justify-center">
                  <IconBook className="w-[16px] h-[16px]" />
                </span>
                <div>
                  <div className="text-[13.5px] font-semibold text-navy">Study Mode</div>
                  <div className="text-[12.5px] text-slate-600 leading-snug">Guided positioning with helpful tips and no grading.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none w-8 h-8 rounded-md bg-medblue/[0.08] border border-medblue/20 text-medblue flex items-center justify-center">
                  <IconCriteria className="w-[16px] h-[16px]" />
                </span>
                <div>
                  <div className="text-[13.5px] font-semibold text-navy">Practice Mode</div>
                  <div className="text-[12.5px] text-slate-600 leading-snug">Independent setup with structured feedback against exam criteria.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.SimLarge = SimLarge;
