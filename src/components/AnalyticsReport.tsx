import React from 'react';

export default function AnalyticsReport({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  return (
    <>
      
{/*  Shared TopNavBar  */}
<header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-50 bg-surface/80 backdrop-blur-md flex justify-between items-center px-grid-margin h-16 border-b border-outline-variant">
<div className="flex items-center bg-background border border-border-subtle rounded px-3 py-1.5 w-96 group focus-within:border-primary transition-all">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-base text-on-surface w-full ml-2" placeholder="Search analytics..." type="text"/>
<span className="text-[10px] text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded border border-outline-variant">⌘K</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-8 items-center mr-8">
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-base" href="#" onClick={(e) => { e.preventDefault(); alert("此功能尚未接入 API (WIP)"); }}>Dashboard</a>
<a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-base" href="#" onClick={(e) => { e.preventDefault(); alert("此功能尚未接入 API (WIP)"); }}>Reports</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-base" href="#" onClick={(e) => { e.preventDefault(); alert("此功能尚未接入 API (WIP)"); }}>Logs</a>
</div>
<div className="flex items-center gap-4">
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="text-on-surface-variant hover:text-primary transition-all relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
</button>
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
{/*  Analytics Canvas Section  */}
<div className="mt-20 px-grid-margin max-w-container-max mx-auto">
{/*  Header Section  */}
<div className="flex justify-between items-end mb-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
<span className="font-label-mono text-label-mono text-primary uppercase tracking-tighter">Live Analysis</span>
</div>
<h2 className="font-display-hero text-display-hero text-on-surface">Deep Dive Report</h2>
<p className="font-body-muted text-body-muted text-on-surface-variant mt-2 max-w-xl">
                        A high-fidelity breakdown of system latency, user retention cohorts, and cross-platform conversion bottlenecks across the global edge network.
                    </p>
</div>
<div className="flex gap-3">
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="flex items-center gap-2 px-4 py-2 border border-border-subtle hover:bg-surface-container-high transition-colors text-on-surface font-label-mono text-label-mono">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
                        LAST 30 DAYS
                    </button>
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold hover:opacity-90 transition-opacity font-label-mono text-label-mono">
<span className="material-symbols-outlined text-[18px]">download</span>
                        EXPORT CSV
                    </button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-bento-gap">
{/*  Main Traffic Map (Level 1 Surface)  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-low border border-border-subtle p-6 rounded-lg relative overflow-hidden h-[400px]">
<div className="absolute top-6 left-6 z-10">
<h3 className="font-headline-section text-on-surface flex items-center gap-2">
                            Global Distribution
                            <span className="material-symbols-outlined text-primary text-[20px]">public</span>
</h3>
<p className="font-body-muted text-body-muted text-on-surface-variant">Real-time edge requests by node</p>
</div>
<div className="w-full h-full mt-8 flex items-center justify-center">
{/*  Minimalist SVG Map Placeholder  */}
<svg className="w-full h-full opacity-40" viewBox="0 0 800 400">
<path className="bezier-path" d="M150,150 Q200,100 250,150 T350,150 T450,150 T550,150" fill="none" stroke="#27272a" strokeWidth="1" />
{/*  Dots for cities  */}
<circle className="animate-ping" cx="120" cy="140" fill="#4edea3" r="3" style={{animationDuration: '3s'}}></circle>
<circle cx="120" cy="140" fill="#4edea3" r="3"></circle>
<circle className="animate-ping" cx="280" cy="110" fill="#4edea3" r="4" style={{animationDuration: '4s'}}></circle>
<circle cx="280" cy="110" fill="#4edea3" r="4"></circle>
<circle cx="450" cy="180" fill="#4edea3" r="2"></circle>
<circle className="animate-ping" cx="600" cy="150" fill="#4edea3" r="5" style={{animationDuration: '2.5s'}}></circle>
<circle cx="600" cy="150" fill="#4edea3" r="5"></circle>
<circle cx="700" cy="250" fill="#4edea3" r="3"></circle>
</svg>
</div>
{/*  Overlay Stats  */}
<div className="absolute bottom-6 right-6 flex gap-8 bg-surface-container-highest/50 backdrop-blur p-4 border border-border-subtle rounded">
<div className="text-right">
<span className="block font-label-mono text-[10px] text-on-surface-variant uppercase">Peak Node</span>
<span className="block font-headline-section text-primary">US-EAST-1</span>
</div>
<div className="text-right border-l border-border-subtle pl-8">
<span className="block font-label-mono text-[10px] text-on-surface-variant uppercase">Active Users</span>
<span className="block font-headline-section text-on-surface">14,204</span>
</div>
</div>
</div>
{/*  Metrics Column  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-bento-gap">
<div className="bg-surface-container-low border border-border-subtle p-6 rounded-lg flex-1">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">Average Latency</span>
<div className="flex items-baseline gap-2 mt-1">
<h4 className="text-[32px] font-bold text-on-surface">24.5<span className="text-lg font-normal text-on-surface-variant">ms</span></h4>
<span className="text-primary text-[12px] font-label-mono">▼ 12%</span>
</div>
<div className="mt-4 h-16 w-full">
<svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
<path className="bezier-path" d="M0,50 C20,45 40,55 60,30 C80,10 100,40 120,35 C140,30 160,10 180,15 L200,5" fill="none" stroke="#4edea3" strokeWidth="2" />
</svg>
</div>
</div>
<div className="bg-surface-container-low border border-border-subtle p-6 rounded-lg flex-1">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">Error Rate</span>
<div className="flex items-baseline gap-2 mt-1">
<h4 className="text-[32px] font-bold text-on-surface">0.08<span className="text-lg font-normal text-on-surface-variant">%</span></h4>
<span className="text-error text-[12px] font-label-mono">▲ 0.01%</span>
</div>
<div className="mt-4 h-16 w-full">
<svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
<path className="bezier-path" d="M0,40 C30,40 60,35 90,38 C120,42 150,30 180,32 L200,35" fill="none" stroke="#ffb4ab" strokeWidth="2" />
</svg>
</div>
</div>
</div>
{/*  Conversion Funnel (Asymmetric Layout)  */}
<div className="col-span-12 lg:col-span-5 bg-surface-container-low border border-border-subtle p-6 rounded-lg">
<h3 className="font-headline-section text-on-surface mb-6">User Acquisition Funnel</h3>
<div className="space-y-6">
{/*  Step 1  */}
<div>
<div className="flex justify-between text-label-mono mb-2">
<span className="text-on-surface-variant uppercase">1. Impression</span>
<span className="text-on-surface">1,000,000</span>
</div>
<div className="h-8 w-full bg-surface-container border border-border-subtle relative overflow-hidden">
<div className="h-full bg-primary/20 w-full"></div>
<div className="absolute inset-0 flex items-center justify-center font-label-mono text-[10px] text-on-surface opacity-60">100%</div>
</div>
</div>
{/*  Step 2  */}
<div>
<div className="flex justify-between text-label-mono mb-2">
<span className="text-on-surface-variant uppercase">2. Onboarding</span>
<span className="text-on-surface">420,000</span>
</div>
<div className="h-8 w-full bg-surface-container border border-border-subtle relative overflow-hidden">
<div className="h-full bg-primary/40 w-[42%]"></div>
<div className="absolute inset-0 flex items-center justify-center font-label-mono text-[10px] text-on-surface opacity-60">42.0% Conversion</div>
</div>
</div>
{/*  Step 3  */}
<div>
<div className="flex justify-between text-label-mono mb-2">
<span className="text-on-surface-variant uppercase">3. Conversion</span>
<span className="text-on-surface">12,400</span>
</div>
<div className="h-8 w-full bg-surface-container border border-border-subtle relative overflow-hidden">
<div className="h-full bg-primary/80 w-[12%]"></div>
<div className="absolute inset-0 flex items-center justify-center font-label-mono text-[10px] text-on-surface opacity-60">2.9% Delta</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-border-subtle flex justify-between">
<div className="text-center">
<p className="font-label-mono text-on-surface-variant text-[10px] uppercase">LTV</p>
<p className="font-headline-section text-on-surface">$1,240</p>
</div>
<div className="text-center">
<p className="font-label-mono text-on-surface-variant text-[10px] uppercase">CAC</p>
<p className="font-headline-section text-on-surface">$245</p>
</div>
<div className="text-center">
<p className="font-label-mono text-on-surface-variant text-[10px] uppercase">ROAS</p>
<p className="font-headline-section text-primary">5.1x</p>
</div>
</div>
</div>
{/*  Cohort Analysis Table (High Density)  */}
<div className="col-span-12 lg:col-span-7 bg-surface-container-low border border-border-subtle p-6 rounded-lg overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-section text-on-surface">Retention Cohorts</h3>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1">
<span className="w-2 h-2 bg-primary/20 rounded-sm"></span>
<span className="text-[10px] text-on-surface-variant font-label-mono">LOW</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 bg-primary rounded-sm"></span>
<span className="text-[10px] text-on-surface-variant font-label-mono">HIGH</span>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-label-mono text-label-mono border-collapse">
<thead>
<tr className="text-on-surface-variant border-b border-border-subtle">
<th className="py-3 px-2 font-normal">COHORT</th>
<th className="py-3 px-2 font-normal">USERS</th>
<th className="py-3 px-2 font-normal">W1</th>
<th className="py-3 px-2 font-normal">W2</th>
<th className="py-3 px-2 font-normal">W3</th>
<th className="py-3 px-2 font-normal">W4</th>
<th className="py-3 px-2 font-normal">W5</th>
</tr>
</thead>
<tbody className="text-on-surface">
<tr className="border-b border-border-subtle hover:bg-surface-container-high/40 transition-colors">
<td className="py-3 px-2">OCT 01</td>
<td className="py-3 px-2">2,451</td>
<td className="py-3 px-2 bg-primary/90 text-background text-center font-bold">100%</td>
<td className="py-3 px-2 bg-primary/70 text-background text-center font-bold">82%</td>
<td className="py-3 px-2 bg-primary/50 text-background text-center font-bold">64%</td>
<td className="py-3 px-2 bg-primary/40 text-on-surface text-center">45%</td>
<td className="py-3 px-2 bg-primary/20 text-on-surface text-center">31%</td>
</tr>
<tr className="border-b border-border-subtle hover:bg-surface-container-high/40 transition-colors">
<td className="py-3 px-2">OCT 08</td>
<td className="py-3 px-2">3,120</td>
<td className="py-3 px-2 bg-primary/90 text-background text-center font-bold">100%</td>
<td className="py-3 px-2 bg-primary/60 text-background text-center font-bold">78%</td>
<td className="py-3 px-2 bg-primary/40 text-on-surface text-center">52%</td>
<td className="py-3 px-2 bg-primary/30 text-on-surface text-center">39%</td>
<td className="py-3 px-2 bg-primary/10 text-on-surface text-center">22%</td>
</tr>
<tr className="border-b border-border-subtle hover:bg-surface-container-high/40 transition-colors">
<td className="py-3 px-2">OCT 15</td>
<td className="py-3 px-2">2,884</td>
<td className="py-3 px-2 bg-primary/90 text-background text-center font-bold">100%</td>
<td className="py-3 px-2 bg-primary/80 text-background text-center font-bold">85%</td>
<td className="py-3 px-2 bg-primary/60 text-background text-center font-bold">71%</td>
<td className="py-3 px-2 bg-primary/40 text-on-surface text-center">55%</td>
<td className="py-3 px-2 text-on-surface-variant text-center">—</td>
</tr>
<tr className="border-b border-border-subtle hover:bg-surface-container-high/40 transition-colors">
<td className="py-3 px-2">OCT 22</td>
<td className="py-3 px-2">4,005</td>
<td className="py-3 px-2 bg-primary/90 text-background text-center font-bold">100%</td>
<td className="py-3 px-2 bg-primary/70 text-background text-center font-bold">81%</td>
<td className="py-3 px-2 bg-primary/50 text-background text-center font-bold">66%</td>
<td className="py-3 px-2 text-on-surface-variant text-center">—</td>
<td className="py-3 px-2 text-on-surface-variant text-center">—</td>
</tr>
<tr className="hover:bg-surface-container-high/40 transition-colors">
<td className="py-3 px-2">OCT 29</td>
<td className="py-3 px-2">3,772</td>
<td className="py-3 px-2 bg-primary/90 text-background text-center font-bold">100%</td>
<td className="py-3 px-2 bg-primary/75 text-background text-center font-bold">84%</td>
<td className="py-3 px-2 text-on-surface-variant text-center">—</td>
<td className="py-3 px-2 text-on-surface-variant text-center">—</td>
<td className="py-3 px-2 text-on-surface-variant text-center">—</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  System Health Summary Card (Vertical Flow)  */}
<div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-bento-gap">
<div className="bg-surface-container-low border border-border-subtle p-6 rounded-lg group hover:border-primary transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">speed</span>
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">CPU LOAD</span>
</div>
<h5 className="font-headline-section text-on-surface">42.8%</h5>
<div className="w-full h-1 bg-surface-container mt-4 rounded-full overflow-hidden">
<div className="h-full bg-primary w-[42%]"></div>
</div>
</div>
<div className="bg-surface-container-low border border-border-subtle p-6 rounded-lg group hover:border-primary transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">memory</span>
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">RAM USAGE</span>
</div>
<h5 className="font-headline-section text-on-surface">12.4 GB</h5>
<div className="w-full h-1 bg-surface-container mt-4 rounded-full overflow-hidden">
<div className="h-full bg-primary w-[65%]"></div>
</div>
</div>
<div className="bg-surface-container-low border border-border-subtle p-6 rounded-lg group hover:border-primary transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">dns</span>
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">ACTIVE NODES</span>
</div>
<h5 className="font-headline-section text-on-surface">1,024</h5>
<div className="w-full h-1 bg-surface-container mt-4 rounded-full overflow-hidden">
<div className="h-full bg-primary w-[98%]"></div>
</div>
</div>
<div className="bg-surface-container-low border border-border-subtle p-6 rounded-lg group hover:border-primary transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">shield</span>
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">Uptime</span>
</div>
<h5 className="font-headline-section text-on-surface">99.998%</h5>
<div className="w-full h-1 bg-surface-container mt-4 rounded-full overflow-hidden">
<div className="h-full bg-primary w-full"></div>
</div>
</div>
</div>
</div>
</div>
{/*  Footer Context Meta  */}
<footer className="mt-12 px-grid-margin py-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center text-on-surface-variant font-label-mono text-[10px]">
<div className="flex gap-6 items-center">
<span>SYSTEM VERSION: v2.4.12-PROD</span>
<span className="text-primary">•</span>
<span>LAST UPDATED: 2023-11-24 14:32:01 UTC</span>
</div>
<div className="mt-4 md:mt-0 flex gap-4">
<a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); alert("此功能尚未接入 API (WIP)"); }}>PRIVACY POLICY</a>
<a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); alert("此功能尚未接入 API (WIP)"); }}>TERMS OF SERVICE</a>
<a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); alert("此功能尚未接入 API (WIP)"); }}>API ACCESS</a>
</div>
</footer>

    </>
  );
}
