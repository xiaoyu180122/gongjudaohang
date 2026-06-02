import React from 'react';

export default function Documentation({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  return (
    <div className="flex w-full">
      
{/*  Article Navigation Sidebar (Secondary Sticky)  */}
<nav className="w-64 h-[calc(100vh-4rem)] sticky top-16 border-r border-border-subtle p-6 overflow-y-auto custom-scrollbar">
<div className="space-y-8">
<div>
<h3 className="font-label-mono text-label-mono text-on-surface-variant/60 uppercase tracking-[0.2em] mb-4">Introduction</h3>
<ul className="space-y-3">
<li><a className="text-primary font-bold border-l-2 border-primary pl-3 block text-body-base" href="#getting-started">Getting Started</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors pl-3 block text-body-base" href="#core-concepts">Core Concepts</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors pl-3 block text-body-base" href="#architecture">Architecture</a></li>
</ul>
</div>
<div>
<h3 className="font-label-mono text-label-mono text-on-surface-variant/60 uppercase tracking-[0.2em] mb-4">Development</h3>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-primary transition-colors pl-3 block text-body-base" href="#installation">Installation</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors pl-3 block text-body-base" href="#contribution">Contribution Guide</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors pl-3 block text-body-base" href="#testing">Testing Protocols</a></li>
</ul>
</div>
<div>
<h3 className="font-label-mono text-label-mono text-on-surface-variant/60 uppercase tracking-[0.2em] mb-4">Reference</h3>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-primary transition-colors pl-3 block text-body-base" href="#api-docs">API Reference</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors pl-3 block text-body-base" href="#cli">CLI Commands</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors pl-3 block text-body-base" href="#troubleshooting">Troubleshooting</a></li>
</ul>
</div>
</div>
</nav>
<div className="flex-1 overflow-x-hidden">
{/*  Article Content  */}
<article className="flex-1 max-w-4xl px-12 py-10 pb-32">
<nav className="flex items-center gap-2 text-label-metadata text-on-surface-variant/50 mb-6">
<span>Docs</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span>Introduction</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-primary/70">Getting Started</span>
</nav>
<header className="mb-12">
<h1 className="font-display-hero text-display-hero mb-4">Getting Started with Kinetic Noir</h1>
<p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                    Welcome to the Technical Directory. This guide will help you navigate the architecture, set up your development environment, and start contributing to the core toolkit.
                </p>
</header>
<section className="mb-16" id="introduction">
<h2 className="font-headline-section text-headline-section mb-6 pb-2 border-b border-border-subtle">Core Principles</h2>
<div className="grid grid-cols-2 gap-bento-gap">
<div className="bg-surface-container p-6 border border-border-subtle rounded-lg">
<span className="material-symbols-outlined text-primary mb-4">speed</span>
<h4 className="font-bold mb-2">Operational Speed</h4>
<p className="text-body-muted text-on-surface-variant">Low-latency interactions and optimized data structures for maximum performance.</p>
</div>
<div className="bg-surface-container p-6 border border-border-subtle rounded-lg">
<span className="material-symbols-outlined text-primary mb-4">visibility</span>
<h4 className="font-bold mb-2">High Density</h4>
<p className="text-body-muted text-on-surface-variant">Maximized information display without compromising visual hierarchy or clarity.</p>
</div>
</div>
</section>
<section className="mb-16" id="installation">
<h2 className="font-headline-section text-headline-section mb-6 pb-2 border-b border-border-subtle">Quick Installation</h2>
<p className="mb-4 text-on-surface-variant">Bootstrap the Kinetic Noir environment using our CLI tool. Ensure you have Node.js 18+ installed.</p>
<div className="bg-surface-container-lowest border border-border-subtle rounded-xl overflow-hidden mb-6">
<div className="flex items-center justify-between px-4 py-2 bg-surface-container border-b border-border-subtle">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container/40"></div>
</div>
<span className="text-[10px] font-label-mono text-on-surface-variant/40">bash</span>
</div>
<pre className="p-5 font-label-mono text-sm leading-relaxed text-primary/90 overflow-x-auto"><code><span className="text-on-surface-variant/40">$</span> npm install -g @kinetic-noir/cli
<span className="text-on-surface-variant/40">$</span> kinetic init my-directory
<span className="text-on-surface-variant/40">$</span> cd my-directory &amp;&amp; kinetic serve</code></pre>
</div>
<div className="bg-surface-container-low border-l-4 border-primary p-4 rounded-r-lg mb-8">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-primary text-sm">info</span>
<span className="font-bold text-sm">Note</span>
</div>
<p className="text-body-muted text-on-surface-variant">
                        The initialization process will automatically configure the Bento grid layout and Dark Mode tokens based on your system preferences.
                    </p>
</div>
</section>
<section className="mb-16" id="architecture">
<h2 className="font-headline-section text-headline-section mb-6 pb-2 border-b border-border-subtle">Technical Architecture</h2>
<p className="mb-8 text-on-surface-variant">Kinetic Noir is built on a modular atomic design system. Every tool in the directory is treated as an isolated "cell" within the larger bento-grid ecosystem.</p>
<div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border-subtle mb-8">
<img alt="Server infrastructure" className="w-full h-full object-cover grayscale opacity-40" data-alt="A macro photograph of high-tech server circuit boards illuminated by neon emerald and cyan lights in a dark data center. The perspective is shallow-focus, emphasizing intricate wiring and glowing status LEDs. The overall mood is cold, professional, and technically advanced, aligning with a dark-tech aesthetic." src="https://lh3.googleusercontent.com/aida/AP1WRLtN3D0X3px3kaKQpiSaDwezMuGpPxsN2hsiyLUCNm--pc_saWzQX2irTooiZqTcYVQ57S90VjyaNQno04lWQBosu0Mn7_1Zs-zFPoIOOiVWJi4ULaAtuKcJ9kH1HbKQoNkcvjxmq7bfHTCOCcb5BuxJhHeDh4GEvkI5ubplzg37TKc0RFGaOz_UzsCUJ_0nmG-1S9Z_DmNGiwcTqKUGETtbMMH34dkKAUFqUDYrQfiGNCiXGkb1NmxurQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="px-2 py-1 bg-primary text-on-primary font-label-mono text-[10px] rounded mb-2 inline-block">SYSTEM SCHEMATIC</span>
<p className="text-on-surface font-bold">Node-based cell rendering engine v2.4</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
<div className="border border-border-subtle p-4 rounded bg-surface/50">
<h5 className="text-primary font-bold text-xs uppercase tracking-wider mb-2">Layer 0</h5>
<p className="text-sm text-on-surface-variant">Core Kernel: Handles state management and global theme tokens.</p>
</div>
<div className="border border-border-subtle p-4 rounded bg-surface/50">
<h5 className="text-primary font-bold text-xs uppercase tracking-wider mb-2">Layer 1</h5>
<p className="text-sm text-on-surface-variant">Service Mesh: Orchestrates inter-tool communication and data flow.</p>
</div>
<div className="border border-border-subtle p-4 rounded bg-surface/50">
<h5 className="text-primary font-bold text-xs uppercase tracking-wider mb-2">Layer 2</h5>
<p className="text-sm text-on-surface-variant">UI Canvas: Reactive Bento grid rendering and animation hooks.</p>
</div>
</div>
</section>
<footer className="pt-10 border-t border-border-subtle flex justify-between items-center text-on-surface-variant">
<div className="flex flex-col">
<span className="text-xs opacity-50 mb-1">Last updated</span>
<span className="text-sm">October 24, 2023</span>
</div>
<div className="flex gap-4">
<button onClick={() => {}} className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm">thumb_up</span>
<span className="text-sm font-bold">Helpful</span>
</button>
<button onClick={() => {}} className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm">edit</span>
<span className="text-sm font-bold">Edit this page</span>
</button>
</div>
</footer>
</article>
</div>
{/*  On this page secondary nav  */}
<aside className="w-48 h-[calc(100vh-4rem)] sticky top-16 p-8 hidden xl:block">
<h4 className="font-label-mono text-[10px] text-on-surface-variant/40 uppercase tracking-[0.2em] mb-4">On this page</h4>
<ul className="space-y-3 text-xs border-l border-border-subtle pl-4">
<li><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#introduction">Core Principles</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#installation">Quick Installation</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#architecture">Technical Architecture</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#system-schematic">System Schematic</a></li>
</ul>
</aside>

    </div>
  );
}
