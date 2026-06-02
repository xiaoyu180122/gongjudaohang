import React from 'react';

export default function SearchResults({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  return (
    <>
      
<div className="h-full flex flex-col p-8 max-w-5xl mx-auto">
{/*  Search Header & Stats  */}
<div className="flex items-end justify-between mb-8 border-b border-outline-variant pb-6">
<div>
<h2 className="font-headline-section text-headline-section text-on-surface">Search Results</h2>
<p className="font-body-base text-on-surface-variant mt-1">Showing 12 results for <span className="text-primary font-label-mono">"Deployment"</span></p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-surface-container border border-outline-variant rounded font-label-mono text-[10px] text-on-surface-variant uppercase">Esc to close</span>
<span className="px-2 py-1 bg-surface-container border border-outline-variant rounded font-label-mono text-[10px] text-on-surface-variant uppercase">Tab to navigate</span>
</div>
</div>
{/*  Bento Grid Style Results Scroll Area  */}
<div className="flex-1 overflow-y-auto pr-4 space-y-10 pb-20">
{/*  Category: Tools  */}
<section>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary text-[18px]">construction</span>
<h3 className="font-label-mono text-label-mono text-primary tracking-widest uppercase">Tools</h3>
<div className="h-[1px] flex-1 bg-outline-variant/30 ml-2"></div>
</div>
<div className="grid grid-cols-1 gap-2">
{/*  Active/Hovered Item  */}
<div className="group bg-surface-container-high border border-primary/40 rounded p-3 flex items-center justify-between search-glow transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-primary">rocket_launch</span>
</div>
<div>
<h4 className="font-body-base font-bold text-on-surface">Vercel Edge Deployment</h4>
<p className="font-label-metadata text-on-surface-variant">Global infrastructure for low-latency web apps.</p>
</div>
</div>
<div className="flex gap-2 opacity-100 transition-opacity">
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="bg-primary text-background font-label-mono px-3 py-1.5 rounded text-[11px] font-bold hover:opacity-90 active:scale-95 transition-all">LAUNCH</button>
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="border border-outline-variant hover:border-primary/50 text-on-surface font-label-mono px-3 py-1.5 rounded text-[11px] transition-all">DOCS</button>
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="text-on-surface-variant hover:text-primary p-1.5">
<span className="material-symbols-outlined text-[18px]">share</span>
</button>
</div>
</div>
{/*  Regular Item  */}
<div className="group bg-surface-container-low border border-outline-variant/50 hover:border-outline hover:bg-surface-container-high rounded p-3 flex items-center justify-between transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center rounded">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">cloud_sync</span>
</div>
<div>
<h4 className="font-body-base text-on-surface group-hover:text-primary transition-colors">CI/CD Pipeline Manager</h4>
<p className="font-label-metadata text-on-surface-variant">Automated testing and multi-cloud deployment orchestrator.</p>
</div>
</div>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="bg-primary text-background font-label-mono px-3 py-1.5 rounded text-[11px] font-bold transition-all">LAUNCH</button>
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="border border-outline-variant hover:border-primary/50 text-on-surface font-label-mono px-3 py-1.5 rounded text-[11px] transition-all">DOCS</button>
<button onClick={() => alert("此功能尚未接入 API (WIP)")} className="text-on-surface-variant hover:text-primary p-1.5">
<span className="material-symbols-outlined text-[18px]">share</span>
</button>
</div>
</div>
</div>
</section>
{/*  Category: Documentation  */}
<section>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary text-[18px]">description</span>
<h3 className="font-label-mono text-label-mono text-primary tracking-widest uppercase">Docs</h3>
<div className="h-[1px] flex-1 bg-outline-variant/30 ml-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
{/*  Doc Card 1  */}
<div onClick={() => alert("页面内容开发中 (WIP)")} className="bg-surface border border-outline-variant/50 hover:border-primary/40 p-4 rounded-lg flex flex-col gap-3 group transition-all cursor-pointer">
<div className="flex justify-between items-start">
<div className="bg-secondary-container px-2 py-0.5 rounded text-[10px] font-label-mono text-secondary">GUIDE</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">open_in_new</span>
</div>
<div>
<h4 className="font-body-base font-bold text-on-surface group-hover:text-primary transition-colors">Zero-Downtime Deployment Strategies</h4>
<p className="font-body-muted text-on-surface-variant mt-1 line-clamp-2">Learn how to implement blue-green and canary deployments using our internal CLI tools.</p>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] font-label-mono text-on-surface-variant">REVISED: 2D AGO</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="text-[10px] font-label-mono text-on-surface-variant">8 MIN READ</span>
</div>
</div>
{/*  Doc Card 2  */}
<div onClick={() => alert("页面内容开发中 (WIP)")} className="bg-surface border border-outline-variant/50 hover:border-primary/40 p-4 rounded-lg flex flex-col gap-3 group transition-all cursor-pointer">
<div className="flex justify-between items-start">
<div className="bg-secondary-container px-2 py-0.5 rounded text-[10px] font-label-mono text-secondary">API REF</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">open_in_new</span>
</div>
<div>
<h4 className="font-body-base font-bold text-on-surface group-hover:text-primary transition-colors">REST API: /deployments/v2</h4>
<p className="font-body-muted text-on-surface-variant mt-1 line-clamp-2">Specification for managing application lifecycles and environment rollbacks programmatically.</p>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] font-label-mono text-on-surface-variant">VERSION: 2.4.1</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="text-[10px] font-label-mono text-on-surface-variant text-primary">STABLE</span>
</div>
</div>
</div>
</section>
{/*  Category: Assets  */}
<section>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary text-[18px]">inventory_2</span>
<h3 className="font-label-mono text-label-mono text-primary tracking-widest uppercase">Assets</h3>
<div className="h-[1px] flex-1 bg-outline-variant/30 ml-2"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{/*  Asset 1  */}
<div onClick={() => alert("页面内容开发中 (WIP)")} className="bg-surface border border-outline-variant/50 p-2 rounded group cursor-pointer hover:bg-surface-container-high transition-all">
<div className="aspect-square bg-surface-container-highest rounded mb-2 overflow-hidden flex items-center justify-center border border-outline-variant">
<img alt="Deployment Illustration" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" data-alt="A highly detailed 3D abstract rendering of a server cluster interconnected by glowing emerald green fiber optic lines. The scene is set in a dark, infinite void with a shallow depth of field. The lighting is focused on the crystalline structures of the nodes, reflecting a sleek, futuristic tech aesthetic in deep blacks and vibrant greens." src="https://lh3.googleusercontent.com/aida/AP1WRLu3fuwjYmSxMLmLrfTliV2hyFPlUN5TER_s-_D7ajrA7xEzcLSJJw1DoPk65xZ1fmZSXgN4DZxuGI6l8KiksX-GS2yiQqHK7I8uYvwjdP-9NQmSvHL0OJ5NuifAeMw6zmOsTpaIThvbZRiDVpajb7T6lmBRrz37p8hfw5AANL920iT4BGvHkBOxRNfxDySsnrO2Ru60T-tQT94p66xRFotsuqv_ipGl-T3yqjBAMPe6BffSe23mpmHzNj4"/>
</div>
<div className="flex justify-between items-center">
<span className="font-label-mono text-[10px] text-on-surface truncate">deploy_hero_3d.png</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-primary">download</span>
</div>
</div>
{/*  Asset 2  */}
<div onClick={() => alert("页面内容开发中 (WIP)")} className="bg-surface border border-outline-variant/50 p-2 rounded group cursor-pointer hover:bg-surface-container-high transition-all">
<div className="aspect-square bg-surface-container-highest rounded mb-2 overflow-hidden flex items-center justify-center border border-outline-variant">
<img alt="Workflow Diagram" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" data-alt="A minimalist architectural blueprint of a software deployment workflow, featuring clean white lines and vector symbols on a deep charcoal background. The design is schematic and precise, with emerald green accents highlighting the path from code commit to production. The mood is clinical, professional, and organized." src="https://lh3.googleusercontent.com/aida/AP1WRLu96nftZ-nVgw61GwhaacnioRhj8G86ZYw4xNKH2Y2G84umGIF6To5yq5yJhyy6baq9YgKoANUbxA9Is7nzUz9zB6CTKwggvIBAoHtSf15_umVoFBte_xln92DgNXhIsDl9IBZGRjdV1MRfw1gfN6-eEcj4tqkFokUkAQT9ePFMxl_q4KhQj-Rd5qqKuRiG4LEHcKhYUzrcAymKjEUBFpODJODCBuuWRVOlzDXQ-pLtBbe0tOk2YtKihfY"/>
</div>
<div className="flex justify-between items-center">
<span className="font-label-mono text-[10px] text-on-surface truncate">flow_schema.svg</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-primary">download</span>
</div>
</div>
{/*  Asset 3  */}
<div onClick={() => alert("页面内容开发中 (WIP)")} className="bg-surface border border-outline-variant/50 p-2 rounded group cursor-pointer hover:bg-surface-container-high transition-all">
<div className="aspect-square bg-surface-container-highest rounded mb-2 overflow-hidden flex items-center justify-center border border-outline-variant">
<img alt="Hardware Icon" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" data-alt="Macro photography of a sleek, dark-toned circuit board with tiny LED indicators glowing in soft emerald green. The lighting is moody and directional, casting long shadows across the technological components. The aesthetic is extremely high-density and precise, conveying a sense of advanced computational power and security." src="https://lh3.googleusercontent.com/aida/ADBb0uhzRx6vYFcY7EYOSJh9TPVAVecGfSKiRNirY3ZGOPntg8KOzJ4nGYhIB1uObfHq-bou_OSXK-9wrx2-t_9bZKcfzPoI4V0OiaNeCWDfQyj8zfp_YJG2ewk0y8kKRBflxLaAvQr76L9kPRq2qkmxQhhsW1uSM4YwcVftu7-WoABCdxqPhDAgEqR53q6TV3Q1sNI879Je_buWg4i9EZoTXkWyBP0O-QzHqMxQtghjluJdeC3w15n5US5pvg"/>
</div>
<div className="flex justify-between items-center">
<span className="font-label-mono text-[10px] text-on-surface truncate">edge_node_icon.pkg</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-primary">download</span>
</div>
</div>
{/*  Asset 4  */}
<div onClick={() => alert("页面内容开发中 (WIP)")} className="bg-surface border border-outline-variant/50 p-2 rounded group cursor-pointer hover:bg-surface-container-high transition-all">
<div className="aspect-square bg-surface-container-highest rounded mb-2 overflow-hidden flex items-center justify-center border border-outline-variant">
<div className="flex flex-col items-center">
<span className="material-symbols-outlined text-[48px] text-on-surface-variant/30">video_library</span>
<span className="font-label-metadata text-[10px] text-on-surface-variant">Preview Unavailable</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="font-label-mono text-[10px] text-on-surface truncate">release_reel.mp4</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-primary">download</span>
</div>
</div>
</div>
</section>
</div>
</div>

    </>
  );
}
