import React, { useState } from 'react';

export default function Dashboard({ setActiveCategory }: { setActiveCategory: (c: string) => void }) {
  const [showInsights, setShowInsights] = useState(false);
  return (
    <>

<div className="max-w-container-max mx-auto px-8 py-12">
{/*  Hero Header  */}
<section className="mb-20">
<div className="max-w-3xl">
<h2 className="font-display-hero text-display-hero mb-4 tracking-tight">Engineering Efficiency.</h2>
<p className="font-body-base text-body-muted text-lg max-w-2xl leading-relaxed opacity-80">
                        A curated repository of high-performance tools for technical workflows. 
                        Operational speed and data density prioritized for modern builders.
                    </p>
</div>
</section>
{/*  Trending Section  */}
<section className="mb-20">
<div className="glass-card bg-surface-container-low/40 border border-outline-variant/20 rounded-xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
<span className="material-symbols-outlined text-[140px]" data-icon="trending_up">trending_up</span>
</div>
<div className="flex items-baseline justify-between mb-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-xl" data-icon="trending_up">trending_up</span>
</div>
<h3 className="font-headline-section text-headline-section">热门排行 <span className="text-muted font-normal text-lg ml-2">(Trending)</span></h3>
</div>
<p className="font-label-mono text-muted text-[10px] uppercase tracking-[0.15em] opacity-60">Last updated: 04:00 UTC</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
{/*  Trending Items  */}
<div onClick={() => setActiveCategory?.('Tool Detail')} className="group cursor-pointer flex flex-col gap-4">
<div className="flex items-center justify-between relative">
<div className="absolute -inset-4 glow-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-label-mono text-primary text-3xl font-bold tracking-tighter relative z-10">01</span>
<div className="w-10 h-10 bg-surface-container-highest/50 backdrop-blur-sm rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary/40 transition-all relative z-10">
<span className="material-symbols-outlined text-xl" data-icon="token">token</span>
</div>
</div>
<div className="border-t border-outline-variant/20 pt-4 relative z-10">
<p className="font-headline-section text-lg group-hover:text-primary transition-colors mb-1">Figma</p>
<div className="flex items-center gap-3">
<p className="font-label-mono text-muted text-[10px] uppercase whitespace-nowrap">8.2k clicks</p>
<svg className="w-14 h-4 text-accent-emerald opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 40 12">
<path d="M0 10 C 8 10, 8 8, 16 8 C 24 8, 24 11, 32 6 C 36 3.5, 38 2, 40 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
</div>
</div>
</div>
<div onClick={() => setActiveCategory?.('Tool Detail')} className="group cursor-pointer flex flex-col gap-4">
<div className="flex items-center justify-between relative">
<div className="absolute -inset-4 glow-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-label-mono text-primary text-3xl font-bold tracking-tighter relative z-10">02</span>
<div className="w-10 h-10 bg-surface-container-highest/50 backdrop-blur-sm rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary/40 transition-all relative z-10">
<span className="material-symbols-outlined text-xl" data-icon="code_blocks">code_blocks</span>
</div>
</div>
<div className="border-t border-outline-variant/20 pt-4 relative z-10">
<p className="font-headline-section text-lg group-hover:text-primary transition-colors mb-1">Cursor</p>
<div className="flex items-center gap-3">
<p className="font-label-mono text-muted text-[10px] uppercase whitespace-nowrap">6.5k clicks</p>
<svg className="w-14 h-4 text-accent-emerald opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 40 12">
<path d="M0 11 C 8 11, 8 7, 16 7 C 24 7, 24 8, 32 3 C 36 0.5, 38 5, 40 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
</div>
</div>
</div>
<div onClick={() => setActiveCategory?.('Tool Detail')} className="group cursor-pointer flex flex-col gap-4">
<div className="flex items-center justify-between relative">
<div className="absolute -inset-4 glow-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-label-mono text-primary text-3xl font-bold tracking-tighter relative z-10">03</span>
<div className="w-10 h-10 bg-surface-container-highest/50 backdrop-blur-sm rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary/40 transition-all relative z-10">
<span className="material-symbols-outlined text-xl" data-icon="travel_explore">travel_explore</span>
</div>
</div>
<div className="border-t border-outline-variant/20 pt-4 relative z-10">
<p className="font-headline-section text-lg group-hover:text-primary transition-colors mb-1">Perplexity</p>
<div className="flex items-center gap-3">
<p className="font-label-mono text-muted text-[10px] uppercase whitespace-nowrap">5.1k clicks</p>
<svg className="w-14 h-4 text-accent-emerald opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 40 12">
<path d="M0 8 C 8 8, 8 10, 16 6 C 24 6, 24 7, 32 2 C 36 -0.5, 38 4, 40 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
</div>
</div>
</div>
<div onClick={() => setActiveCategory?.('Tool Detail')} className="group cursor-pointer flex flex-col gap-4">
<div className="flex items-center justify-between relative">
<div className="absolute -inset-4 glow-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-label-mono text-on-surface-variant text-3xl font-bold tracking-tighter relative z-10">04</span>
<div className="w-10 h-10 bg-surface-container-highest/50 backdrop-blur-sm rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary/40 transition-all relative z-10">
<span className="material-symbols-outlined text-xl" data-icon="rebase_edit">rebase_edit</span>
</div>
</div>
<div className="border-t border-outline-variant/20 pt-4 relative z-10">
<p className="font-headline-section text-lg group-hover:text-primary transition-colors mb-1">Linear</p>
<div className="flex items-center gap-3">
<p className="font-label-mono text-muted text-[10px] uppercase whitespace-nowrap">4.8k clicks</p>
<svg className="w-14 h-4 text-accent-emerald opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 40 12">
<path d="M0 9 C 8 9, 8 7, 16 8 C 24 9, 24 10, 32 11 C 36 11.5, 38 9, 40 9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
</div>
</div>
</div>
<div onClick={() => setActiveCategory?.('Tool Detail')} className="group cursor-pointer flex flex-col gap-4">
<div className="flex items-center justify-between relative">
<div className="absolute -inset-4 glow-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-label-mono text-on-surface-variant text-3xl font-bold tracking-tighter relative z-10">05</span>
<div className="w-10 h-10 bg-surface-container-highest/50 backdrop-blur-sm rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary/40 transition-all relative z-10">
<span className="material-symbols-outlined text-xl" data-icon="palette">palette</span>
</div>
</div>
<div className="border-t border-outline-variant/20 pt-4 relative z-10">
<p className="font-headline-section text-lg group-hover:text-primary transition-colors mb-1">Midjourney</p>
<div className="flex items-center gap-3">
<p className="font-label-mono text-muted text-[10px] uppercase whitespace-nowrap">3.2k clicks</p>
<svg className="w-14 h-4 text-accent-emerald opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 40 12">
<path d="M0 10 C 8 10, 8 8, 16 9 C 24 10, 24 11, 32 7 C 36 5, 38 6, 40 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
</svg>
</div>
</div>
</div>
</div>
{/*  Comparative Insights Toggle  */}
<div className="mt-12 border-t border-outline-variant/20 pt-8">
<button className="flex items-center gap-2 font-label-mono text-[10px] text-muted hover:text-primary transition-all uppercase tracking-[0.2em] group" onClick={() => setShowInsights(!showInsights)}>
<span className="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform">expand_more</span>
                            View Comparative Insights
                        </button>
<div className={`${showInsights ? '' : 'hidden'} mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end`}>
<div className="space-y-4">
<h4 className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-[0.1em]">Daily Traffic Distribution (Last 7D)</h4>
<div className="flex items-end gap-3 h-24 border-l border-b border-outline-variant/20 px-4 py-2">
<div className="group relative flex-1 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{height: '85%'}}></div>
<div className="group relative flex-1 bg-outline-variant/30 hover:bg-primary transition-all rounded-t-sm" style={{height: '65%'}}></div>
<div className="group relative flex-1 bg-outline-variant/30 hover:bg-primary transition-all rounded-t-sm" style={{height: '52%'}}></div>
<div className="group relative flex-1 bg-outline-variant/30 hover:bg-primary transition-all rounded-t-sm" style={{height: '48%'}}></div>
<div className="group relative flex-1 bg-outline-variant/30 hover:bg-primary transition-all rounded-t-sm" style={{height: '32%'}}></div>
</div>
<div className="flex justify-between font-label-mono text-[9px] text-muted px-4 opacity-50 uppercase">
<span>FG</span><span>CR</span><span>PX</span><span>LN</span><span>MJ</span>
</div>
</div>
<div className="bg-surface-container-highest/20 p-4 rounded-lg border border-outline-variant/10">
<p className="font-body-muted text-[13px] leading-relaxed opacity-80">
<span className="text-accent-emerald font-bold">+12.4%</span> increase in aggregate traffic compared to previous cycle. 
                                    <span className="text-primary">Figma</span> maintains dominant lead with 24% market share.
                                </p>
</div>
</div>
</div>
</div>
</section>
{/*  AI Essentials Section  */}
<section className="mb-20">
<div className="flex items-baseline justify-between mb-8">
<h3 className="font-headline-section text-headline-section flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
                        AI Essentials
                    </h3>
<a className="font-label-mono text-primary text-[10px] hover:tracking-widest transition-all uppercase tracking-widest" href="#" onClick={() => {}}>View All 12</a>
</div>
<div className="bento-grid">
{/*  Cursor Card  */}
<div onClick={() => setActiveCategory?.('Tool Detail')} className="glass-card p-6 rounded-xl group cursor-pointer relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-surface-container-lowest/60 border border-outline-variant/30 rounded flex items-center justify-center text-muted group-hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="code_blocks">code_blocks</span>
</div>
<span className="px-2 py-0.5 bg-primary/10 text-primary font-label-mono text-[9px] rounded-sm border border-primary/20 uppercase tracking-wider">Popular</span>
</div>
<h4 className="font-headline-section text-xl mb-2">Cursor</h4>
<p className="font-body-base text-body-muted line-clamp-2 mb-6 opacity-70">The AI-first code editor designed for pair programming with an intelligent assistant.</p>
<div className="flex flex-wrap gap-2">
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">LLM</span>
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">VSCODE</span>
</div>
</div>
{/*  Perplexity Card  */}
<div onClick={() => setActiveCategory?.('Tool Detail')} className="glass-card p-6 rounded-xl group cursor-pointer relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-surface-container-lowest/60 border border-outline-variant/30 rounded flex items-center justify-center text-muted group-hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="travel_explore">travel_explore</span>
</div>
</div>
<h4 className="font-headline-section text-xl mb-2">Perplexity</h4>
<p className="font-body-base text-body-muted line-clamp-2 mb-6 opacity-70">Answer engine that delivers accurate, real-time information with cited sources.</p>
<div className="flex flex-wrap gap-2">
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">Search</span>
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">AI</span>
</div>
</div>
</div>
</section>
{/*  Developer Workflow Section  */}
<section className="mb-20">
<div className="flex items-baseline justify-between mb-8">
<h3 className="font-headline-section text-headline-section flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
                        Developer Workflow
                    </h3>
<a className="font-label-mono text-primary text-[10px] hover:tracking-widest transition-all uppercase tracking-widest" href="#" onClick={() => {}}>View All 42</a>
</div>
<div className="bento-grid">
{/*  Linear  */}
<div onClick={() => setActiveCategory?.('Tool Detail')} className="glass-card p-6 rounded-xl group cursor-pointer">
<div className="w-10 h-10 bg-surface-container-lowest/60 border border-outline-variant/30 rounded flex items-center justify-center text-muted group-hover:text-primary mb-6 transition-colors">
<span className="material-symbols-outlined" data-icon="rebase_edit">rebase_edit</span>
</div>
<h4 className="font-headline-section text-xl mb-2">Linear</h4>
<p className="font-body-base text-body-muted line-clamp-2 mb-6 opacity-70">Issue tracking that actually feels fast. The gold standard for modern dev teams.</p>
<div className="flex flex-wrap gap-2">
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">Agile</span>
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">Prod</span>
</div>
</div>
{/*  Raycast  */}
<div onClick={() => setActiveCategory?.('Tool Detail')} className="glass-card p-6 rounded-xl group cursor-pointer">
<div className="w-10 h-10 bg-surface-container-lowest/60 border border-outline-variant/30 rounded flex items-center justify-center text-muted group-hover:text-primary mb-6 transition-colors">
<span className="material-symbols-outlined" data-icon="keyboard_command_key">keyboard_command_key</span>
</div>
<h4 className="font-headline-section text-xl mb-2">Raycast</h4>
<p className="font-body-base text-body-muted line-clamp-2 mb-6 opacity-70">A supercharged, extensible launcher to replace macOS Spotlight.</p>
<div className="flex flex-wrap gap-2">
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">Utils</span>
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">OSX</span>
</div>
</div>
{/*  PostHog  */}
<div onClick={() => setActiveCategory?.('Tool Detail')} className="glass-card p-6 rounded-xl group cursor-pointer">
<div className="w-10 h-10 bg-surface-container-lowest/60 border border-outline-variant/30 rounded flex items-center justify-center text-muted group-hover:text-primary mb-6 transition-colors">
<span className="material-symbols-outlined" data-icon="query_stats">query_stats</span>
</div>
<h4 className="font-headline-section text-xl mb-2">PostHog</h4>
<p className="font-body-base text-body-muted line-clamp-2 mb-6 opacity-70">Open-source product analytics and session recording for builders.</p>
<div className="flex flex-wrap gap-2">
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">Data</span>
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">OSS</span>
</div>
</div>
{/*  Vercel  */}
<div onClick={() => setActiveCategory?.('Tool Detail')} className="glass-card p-6 rounded-xl group cursor-pointer">
<div className="w-10 h-10 bg-surface-container-lowest/60 border border-outline-variant/30 rounded flex items-center justify-center text-muted group-hover:text-primary mb-6 transition-colors">
<span className="material-symbols-outlined" data-icon="cloud_upload">cloud_upload</span>
</div>
<h4 className="font-headline-section text-xl mb-2">Vercel</h4>
<p className="font-body-base text-body-muted line-clamp-2 mb-6 opacity-70">Deployment platform for frontend frameworks and serverless functions.</p>
<div className="flex flex-wrap gap-2">
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">Cloud</span>
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">NextJS</span>
</div>
</div>
</div>
</section>
{/*  Design Systems Section  */}
<section className="mb-20">
<div className="flex items-baseline justify-between mb-8">
<h3 className="font-headline-section text-headline-section flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="potted_plant">potted_plant</span>
                        Design Systems
                    </h3>
<a className="font-label-mono text-primary text-[10px] hover:tracking-widest transition-all uppercase tracking-widest" href="#" onClick={() => {}}>View All 18</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
{/*  Figma Featured Card  */}
<div onClick={() => setActiveCategory?.('Tool Detail')} className="glass-card p-8 rounded-xl group cursor-pointer flex items-center gap-8 relative overflow-hidden">
<div className="absolute -right-8 -top-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity">
<span className="material-symbols-outlined text-[160px]" data-icon="token">token</span>
</div>
<div className="w-24 h-24 bg-surface-container-lowest/60 border border-outline-variant/30 rounded-lg flex items-center justify-center text-muted group-hover:text-primary transition-all group-hover:scale-105 shrink-0">
<span className="material-symbols-outlined text-4xl" data-icon="token">token</span>
</div>
<div>
<div className="flex items-center gap-3 mb-2">
<h4 className="font-headline-section text-2xl">Figma</h4>
<span className="px-2 py-0.5 bg-primary/10 text-primary font-label-mono text-[9px] rounded-sm border border-primary/20 tracking-wider">Core</span>
</div>
<p className="font-body-base text-body-muted mb-4 max-w-sm opacity-70">Collaborative design tool for digital products. Seamlessly bridge the gap between design and engineering with Dev Mode.</p>
<div className="flex flex-wrap gap-2">
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">UX/UI</span>
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">Prototyping</span>
</div>
</div>
</div>
{/*  Framer  */}
<div onClick={() => setActiveCategory?.('Tool Detail')} className="glass-card p-8 rounded-xl group cursor-pointer flex items-center gap-8 relative overflow-hidden">
<div className="w-24 h-24 bg-surface-container-lowest/60 border border-outline-variant/30 rounded-lg flex items-center justify-center text-muted group-hover:text-primary transition-all group-hover:scale-105 shrink-0">
<span className="material-symbols-outlined text-4xl" data-icon="web">web</span>
</div>
<div>
<h4 className="font-headline-section text-2xl mb-2">Framer</h4>
<p className="font-body-base text-body-muted mb-4 max-w-sm opacity-70">The internet's best site builder. Design your site and publish with the click of a button.</p>
<div className="flex flex-wrap gap-2">
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">CMS</span>
<span className="font-label-metadata text-label-metadata bg-surface-container-lowest/50 px-2 py-1 rounded border border-outline-variant/20 uppercase tracking-tighter">No-Code</span>
</div>
</div>
</div>
</div>
</section>
{/*  Bottom CTA  */}
<section className="mt-32 border-t border-outline-variant/20 pt-16 flex flex-col md:flex-row items-center justify-between gap-8 opacity-70">
<div>
<h5 className="font-headline-section text-lg mb-1">Suggest a Tool?</h5>
<p className="font-body-base text-muted">Contribute to the Kinetic Noir index via GitHub open source protocol.</p>
</div>
<div className="flex gap-4">
<button onClick={() => setActiveCategory('Submit Tool')} className="px-6 py-2.5 bg-primary text-background font-label-mono text-[11px] rounded font-bold hover:brightness-110 transition-all uppercase tracking-wider">Submit Tool</button>
<button onClick={() => {}} className="px-6 py-2.5 border border-outline-variant/40 font-label-mono text-[11px] rounded hover:bg-surface-container transition-all uppercase tracking-wider">View Repo</button>
</div>
</section>
</div>

    </>
  );
}
