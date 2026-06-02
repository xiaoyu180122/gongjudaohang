import React, { useState } from 'react';

export default function Analytics({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  const [timeRange, setTimeRange] = useState('30d'); 
  const [isExporting, setIsExporting] = useState(false);
  const [activeOrigin, setActiveOrigin] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const toggleTimeRange = () => {
    setTimeRange(prev => {
      if (prev === '30d') return '90d';
      if (prev === '90d') return '7d';
      return '30d';
    });
  };

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      
      const csvContent = "data:text/csv;charset=utf-8,Category,AdoptionRate\nAI Tools,0.92\nDev Tools,0.64\nProductivity,0.78";
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `kinetic_noir_analytics_${timeRange}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setToast('Telemetry CSV data downloaded successfully.');
      setTimeout(() => setToast(null), 3000);
    }, 1500);
  };

  const ctrVal = timeRange === '7d' ? '12.14%' : (timeRange === '90d' ? '15.93%' : '14.82%');
  const ctrSub = timeRange === '7d' ? '+1.1% vs last week' : (timeRange === '90d' ? '+3.8% vs last quarter' : '+2.4% vs last period');
  
  const retVal = timeRange === '7d' ? '72.1%' : (timeRange === '90d' ? '64.2%' : '68.5%');
  const retSub = timeRange === '7d' ? 'High-density short term retention' : (timeRange === '90d' ? 'Macro cohort stabilization' : 'Consistent monthly cohort');
  return (
    <>
      
{/*  Dashboard Header  */}
{toast && (
        <div className="fixed top-20 right-8 bg-emerald-500 text-background px-6 py-3 rounded-lg shadow-lg font-label-mono text-sm z-50 animate-bounce">
          {toast}
        </div>
      )}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="font-display-hero text-display-hero text-on-surface mb-2">Comparative Insights</h2>
<p className="font-body-muted text-body-muted text-on-surface-variant">Multi-vector technical analysis of ecosystem tool performance.</p>
</div>
<div className="flex gap-2">
<button onClick={toggleTimeRange} className="bg-surface-container border border-border-subtle text-on-surface px-4 py-2 font-label-mono text-label-mono hover:border-primary transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">calendar_today</span>
                    {timeRange === '7d' ? 'LAST 7 DAYS' : (timeRange === '90d' ? 'LAST 90 DAYS' : 'LAST 30 DAYS')}
                </button>
<button disabled={isExporting} onClick={handleExport} className="bg-primary text-surface-dim px-4 py-2 font-label-mono text-label-mono hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50">
<span className={`material-symbols-outlined text-sm ${isExporting ? "animate-spin" : ""}`}>{isExporting ? "sync" : "download"}</span>
                    {isExporting ? "EXPORTING..." : "EXPORT DATA"}
                </button>
</div>
</div>
{/*  Bento Grid Dashboard  */}
<div className="bento-grid">
{/*  Main Trend Chart (Column Span 8, Row Span 2)  */}
<div className="md:col-span-8 md:row-span-2 bg-surface-container border border-border-subtle p-6 rounded-lg relative overflow-hidden group">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="font-headline-section text-headline-section text-on-surface">Category Growth Velocity</h3>
<p className="font-label-metadata text-label-metadata text-on-surface-variant mt-1">Cross-sectional comparison of adoption rates</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-mono text-label-mono text-on-surface-variant">AI TOOLS</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-mono text-label-mono text-on-surface-variant">DEV TOOLS</span>
</div>
</div>
</div>
<div className="h-64 w-full flex items-end gap-1">
{/*  Faux SVG Chart Overlay for Smooth Curves  */}
<svg className="w-full h-full absolute bottom-6 left-0 px-6 overflow-visible pointer-events-none" viewBox="0 0 800 200">
{/*  AI Tools Curve  */}
<path className="text-primary opacity-80" d="M0,180 Q100,160 200,100 T400,80 T600,40 T800,20" fill="none" stroke="currentColor" strokeWidth="2" />
{/*  Dev Tools Curve  */}
<path className="text-secondary opacity-40" d="M0,170 Q150,150 300,130 T500,110 T700,90 T800,85" fill="none" stroke="currentColor" strokeWidth="2" />
{/*  Grid Lines  */}
<line stroke="#27272a" stroke-dasharray="4" x1="0" x2="800" y1="0" y2="0"></line>
<line stroke="#27272a" stroke-dasharray="4" x1="0" x2="800" y1="50" y2="50"></line>
<line stroke="#27272a" stroke-dasharray="4" x1="0" x2="800" y1="100" y2="100"></line>
<line stroke="#27272a" stroke-dasharray="4" x1="0" x2="800" y1="150" y2="150"></line>
</svg>
{/*  Labels for Y-Axis  */}
<div className="absolute left-6 bottom-6 flex flex-col justify-between h-64 text-[10px] font-label-mono text-on-surface-variant/40 pb-4">
<span>100%</span>
<span>75%</span>
<span>50%</span>
<span>25%</span>
<span>0%</span>
</div>
</div>
<div className="flex justify-between mt-4 px-2 font-label-mono text-label-mono text-on-surface-variant/60">
<span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span><span>W7</span><span>W8</span>
</div>
</div>
{/*  Small Metric Card: Click Rate (Column Span 4)  */}
<div className="md:col-span-4 bg-surface-container border border-border-subtle p-6 rounded-lg flex flex-col justify-between hover:border-primary transition-all">
<div className="flex justify-between items-start">
<div>
<span className="font-label-mono text-label-mono text-primary bg-primary/10 px-2 py-0.5 rounded">CTR</span>
<h4 className="font-headline-section text-headline-section mt-3">Aggregate Click Rate</h4>
</div>
<span className="material-symbols-outlined text-primary">trending_up</span>
</div>
<div className="mt-4">
<span className="text-4xl font-bold text-on-surface">{ctrVal}</span>
<p className="font-label-metadata text-label-metadata text-primary mt-1">{ctrSub}</p>
</div>
</div>
{/*  Small Metric Card: Retention (Column Span 4)  */}
<div className="md:col-span-4 bg-surface-container border border-border-subtle p-6 rounded-lg flex flex-col justify-between hover:border-primary transition-all">
<div className="flex justify-between items-start">
<div>
<span className="font-label-mono text-label-mono text-on-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded">LOYALTY</span>
<h4 className="font-headline-section text-headline-section mt-3">User Retention</h4>
</div>
<span className="material-symbols-outlined text-on-tertiary-container">sync_alt</span>
</div>
<div className="mt-4">
<span className="text-4xl font-bold text-on-surface">{retVal}</span>
<p className="font-label-metadata text-label-metadata text-on-surface-variant mt-1">{retSub}</p>
</div>
</div>
{/*  Comparative Tool Stack (Column Span 4, Row Span 2)  */}
<div className="md:col-span-4 md:row-span-2 bg-surface-container border border-border-subtle p-6 rounded-lg">
<h3 className="font-headline-section text-headline-section text-on-surface mb-6">Retention Heatmap</h3>
<div className="space-y-4">
<div className="space-y-2">
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-on-surface">Productivity Tools</span>
<span className="text-primary">92%</span>
</div>
<div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-border-subtle">
<div className="h-full bg-primary" style={{width: '92%'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-on-surface">AI Generation</span>
<span className="text-primary">78%</span>
</div>
<div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-border-subtle">
<div className="h-full bg-primary opacity-80" style={{width: '78%'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-on-surface">Dev Environments</span>
<span className="text-primary">64%</span>
</div>
<div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-border-subtle">
<div className="h-full bg-primary opacity-60" style={{width: '64%'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-on-surface">Design Assets</span>
<span className="text-primary">45%</span>
</div>
<div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-border-subtle">
<div className="h-full bg-primary opacity-40" style={{width: '45%'}}></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-border-subtle">
<p className="font-body-muted text-body-muted text-on-surface-variant mb-4">Focus acquisition efforts on the AI Generation segment to bridge the engagement gap observed in Q3.</p>
<button onClick={() => { if (setActiveCategory) setActiveCategory("Analytics Report"); }} className="w-full py-2 border border-border-subtle text-on-surface font-label-mono text-label-mono hover:bg-surface-container-high transition-colors">DEEP DIVE REPORT</button>
</div>
</div>
{/*  Complex Multi-Panel Data (Column Span 8)  */}
<div className="md:col-span-8 bg-surface-container border border-border-subtle p-0 rounded-lg overflow-hidden flex flex-col md:flex-row">
<div className="md:w-1/2 p-6 border-r border-border-subtle bg-surface-container-low">
<h4 className="font-headline-section text-headline-section mb-4">Traffic Origins</h4>
<div className="grid grid-cols-2 gap-4">
<div onClick={() => setActiveOrigin(activeOrigin === "DIRECT" ? null : "DIRECT")} className={`p-3 border rounded transition-all cursor-pointer ${activeOrigin === "DIRECT" ? "border-primary bg-primary/5" : "bg-background border-border-subtle hover:border-primary"}`}>
<span className="font-label-metadata text-label-metadata text-on-surface-variant block mb-1">DIRECT</span>
<span className="text-xl font-bold text-on-surface">42,102</span>
</div>
<div onClick={() => setActiveOrigin(activeOrigin === "REFERRAL" ? null : "REFERRAL")} className={`p-3 border rounded transition-all cursor-pointer ${activeOrigin === "REFERRAL" ? "border-primary bg-primary/5" : "bg-background border-border-subtle hover:border-primary"}`}>
<span className="font-label-metadata text-label-metadata text-on-surface-variant block mb-1">REFERRAL</span>
<span className="text-xl font-bold text-on-surface">18,443</span>
</div>
<div onClick={() => setActiveOrigin(activeOrigin === "SOCIAL" ? null : "SOCIAL")} className={`p-3 border rounded transition-all cursor-pointer ${activeOrigin === "SOCIAL" ? "border-primary bg-primary/5" : "bg-background border-border-subtle hover:border-primary"}`}>
<span className="font-label-metadata text-label-metadata text-on-surface-variant block mb-1">SOCIAL</span>
<span className="text-xl font-bold text-on-surface">12,009</span>
</div>
<div onClick={() => setActiveOrigin(activeOrigin === "SEARCH" ? null : "SEARCH")} className={`p-3 border rounded transition-all cursor-pointer ${activeOrigin === "SEARCH" ? "border-primary bg-primary/5" : "bg-background border-border-subtle hover:border-primary"}`}>
<span className="font-label-metadata text-label-metadata text-on-surface-variant block mb-1">SEARCH</span>
<span className="text-xl font-bold text-on-surface">8,552</span>
</div>
</div>
</div>
<div className="md:w-1/2 p-6 flex flex-col justify-center relative overflow-hidden">
{/*  Tech Background Decoration  */}
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #4edea3 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
</div>
<h4 className="font-headline-section text-headline-section mb-2">
                    {activeOrigin === null && 'Technical Summary'}
                    {activeOrigin === 'DIRECT' && 'Direct Telemetry'}
                    {activeOrigin === 'REFERRAL' && 'Referrals Routing'}
                    {activeOrigin === 'SOCIAL' && 'Social Hub Nodes'}
                    {activeOrigin === 'SEARCH' && 'Search Index Logs'}
                  </h4>
                  <p className="font-body-muted text-body-muted text-on-surface-variant mb-6 h-16 overflow-hidden">
                    {activeOrigin === null && 'Ecosystem latency averaged 24ms across all regions, with a 99.9% uptime on the primary analytics endpoint.'}
                    {activeOrigin === 'DIRECT' && 'Direct access accounts for 54.3% of total traffic. Key nodes target production servers on node-04 cluster.'}
                    {activeOrigin === 'REFERRAL' && 'GitHub repository references represent 84.2% of referral endpoints. Top linking agent is @kinetic-noir/core.'}
                    {activeOrigin === 'SOCIAL' && 'Developer communities (Discord / Reddit CDNs) drive significant node downloads. Peak load at 14:00 UTC.'}
                    {activeOrigin === 'SEARCH' && 'Ecosystem search queries target "high-density LLMs" and "low latency node architectures". Core index operational.'}
                  </p>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-surface bg-secondary-container flex items-center justify-center font-label-mono text-[10px] text-on-surface overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of a woman with glasses, looking focused at a computer screen. The image lighting is cinematic with sharp shadows and highlights from the monitor, emphasizing a high-tech developer environment consistent with the Kinetic Noir design system." src="https://lh3.googleusercontent.com/aida/AP1WRLush2F_k4CEMj5c9P8M_P7d0ksx1J_i8TnDXbIT9FxHSYYwCu9ksc_DqtOZ3A5pJbVBpIiE2ccA0n51LOcS5ePjF872toPlyJ7DobTqu_4mKfJnQw4cqm-iP_hcKglvENBfmQAVgwFt1UkL9LWxlizBgbLay8xOm4aDfvBaH3oQejOcDKP0yPuWVyuCmNUvjU54qdXz36VZY6juzKhEt7HBP8gNKF9SYKjiV4w_-H1H0BZkz7yu7vR6OKM"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-surface bg-secondary-container flex items-center justify-center font-label-mono text-[10px] text-on-surface overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a male data scientist in a dark room illuminated by neon green code reflections on his face. The style is moody and technical, matching the dark minimalist aesthetics of the corporate modern dashboard design." src="https://lh3.googleusercontent.com/aida/AP1WRLu_vsPBuXjKkRVpUb_LLJCujzjMJCTQXaPeJxtnwpmJbQ3Vujxn2rqYswAYAP4W3W5sSva2SmBnjdG3hU4NKN5JNcwz0E3el4Ox-iFy1cqzt17Ehw-_gwG1E1muXPaTocBlH74oPewWcPDMuVD_bo6MwCult8iwpuLlLwq4qBlj_3y5qL_23gPMf5aibgpldT7bart1aw2vbXMOm7X-79rIh_XZiyn0SHLnSBynunLyy-dyaioOE9tCYIg"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-surface bg-secondary-container flex items-center justify-center font-label-mono text-[10px] text-on-surface">
                                +4
                            </div>
</div>
<span className="font-label-metadata text-label-metadata text-on-surface-variant">Real-time auditors active</span>
</div>
</div>
</div>
</div>
{/*  Footer Meta  */}
<footer className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-label-metadata text-label-metadata text-on-surface-variant uppercase tracking-widest">Kinetic Noir Protocol v4.2.0</p>
<div className="flex gap-8">
<a className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>STATUS: OPERATIONAL</a>
<a className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>SECURITY AUDIT: PASSED</a>
<a className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>© 2024 NOIR SYSTEMS</a>
</div>
</footer>

    </>
  );
}
