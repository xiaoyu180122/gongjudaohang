import React, { useState } from 'react';

export default function Settings({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <>
      
{/*  TopNavBar Component  */}
<header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-grid-margin h-16">
<div className="flex items-center bg-surface-container-lowest border border-border-subtle px-3 py-1.5 rounded w-96 group focus-within:border-primary transition-all">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none p-0 text-body-base focus:ring-0 w-full placeholder:text-on-surface-variant/50" placeholder="Search preferences..." type="text"/>
<span className="text-[10px] font-label-mono text-on-surface-variant opacity-50 px-1.5 py-0.5 border border-outline-variant rounded">⌘K</span>
</div>
<div className="flex items-center space-x-6">
<button onClick={() => {}} className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button onClick={() => {}} className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>
<div className="pt-24 px-grid-margin pb-12 settings-container">
<header className="mb-10">
<h2 className="font-display-hero text-display-hero text-on-surface mb-2">System Preferences</h2>
<p className="text-on-surface-variant font-body-base">Configure your technical environment and operational parameters.</p>
</header>
<div className="flex gap-10">
{/*  Vertical Settings Navigation  */}
<aside className="w-48 shrink-0">
<nav className="space-y-1 sticky top-32">
<button id="btn-profile" onClick={() => setActiveTab("profile")} className={`settings-tab-btn w-full flex items-center px-4 py-2.5 transition-all text-left font-bold ${activeTab === "profile" ? "text-primary border-l-2 border-primary" : "text-on-surface-variant hover:text-primary"}`}>
<span className="material-symbols-outlined mr-3 text-lg" data-icon="person">person</span>
<span className="font-label-mono">Profile</span>
</button>
<button id="btn-interface" onClick={() => setActiveTab("interface")} className={`settings-tab-btn w-full flex items-center px-4 py-2.5 transition-all text-left font-bold ${activeTab === "interface" ? "text-primary border-l-2 border-primary" : "text-on-surface-variant hover:text-primary"}`}>
<span className="material-symbols-outlined mr-3 text-lg" data-icon="layers">layers</span>
<span className="font-label-mono">Interface</span>
</button>
<button id="btn-notifications" onClick={() => setActiveTab("notifications")} className={`settings-tab-btn w-full flex items-center px-4 py-2.5 transition-all text-left font-bold ${activeTab === "notifications" ? "text-primary border-l-2 border-primary" : "text-on-surface-variant hover:text-primary"}`}>
<span className="material-symbols-outlined mr-3 text-lg" data-icon="notifications_active">notifications_active</span>
<span className="font-label-mono">Alerts</span>
</button>
<button id="btn-advanced" onClick={() => setActiveTab("advanced")} className={`settings-tab-btn w-full flex items-center px-4 py-2.5 transition-all text-left font-bold ${activeTab === "advanced" ? "text-primary border-l-2 border-primary" : "text-on-surface-variant hover:text-primary"}`}>
<span className="material-symbols-outlined mr-3 text-lg" data-icon="terminal">terminal</span>
<span className="font-label-mono">Advanced</span>
</button>
</nav>
</aside>
{/*  Settings Panes  */}
<div className="flex-grow max-w-3xl space-y-8">
{/*  Profile Section  */}
<section className={`settings-pane space-y-6 ${activeTab === "profile" ? "block" : "hidden"}`} id="pane-profile">
<div className="glass-card p-6 rounded-lg">
<h3 className="font-headline-section text-on-surface mb-6 flex items-center">
<span className="material-symbols-outlined mr-2 text-primary" data-icon="account_circle">account_circle</span>
                                Identity &amp; Access
                            </h3>
<div className="space-y-6">
<div className="flex items-center space-x-6 pb-6 border-b border-border-subtle">
<div onClick={() => {}} className="relative group cursor-pointer">
<img alt="User Large" className="w-24 h-24 rounded-lg border-2 border-border-subtle group-hover:border-primary transition-colors" data-alt="A close-up, sharp professional profile picture in a high-tech setting. The lighting is cinematic, utilizing a teal and black color palette. The subject is a modern developer, and the overall mood is technical, focused, and minimal." src="https://lh3.googleusercontent.com/aida/AP1WRLv6dp2d4vc3nocLcgo5eXRuD0emvUEydFnFhV6C6No0kvqQ14iOz6C_1zksvWXCFIELE0nuWzwklY4pa5fDDT6fEnX9HzFn0HBhcpHyIpYPR9S9ZsFD5t_10IikKPyHkzA04lpzU2F_fLdVCtF0PYeETpxdAGX-op5HBn1sonjHr7OVi2GTHnBAelcq_9LvHEyQ2CG7tb_hOjAuZll5ldB_NvAVIMHf_7_yxKa_7me4piOFTgUnoFCxjdA"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
<span className="material-symbols-outlined text-white" data-icon="edit">edit</span>
</div>
</div>
<div className="flex-grow">
<label className="block font-label-mono text-xs text-on-surface-variant mb-1 uppercase tracking-wider">Display Name</label>
<input className="w-full bg-surface-container-lowest border border-border-subtle focus:border-primary focus:ring-0 rounded py-2 px-3 text-on-surface font-body-base" type="text" value="Kinetic Admin"/>
<p className="mt-2 text-on-surface-variant text-xs font-body-muted italic opacity-60">This is how you will be identified in peer-to-peer deployments.</p>
</div>
</div>
<div>
<label className="block font-label-mono text-xs text-on-surface-variant mb-3 uppercase tracking-wider">Active API Keys</label>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-surface-container-lowest border border-border-subtle rounded">
<div className="flex items-center space-x-3">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="key">key</span>
<div>
<p className="font-label-mono text-sm">PROD_ENV_NODE_01</p>
<p className="text-[10px] text-on-surface-variant font-label-metadata opacity-50">Created Oct 12, 2023</p>
</div>
</div>
<div className="flex space-x-2">
<button onClick={() => {}} className="p-1.5 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span></button>
<button onClick={() => {}} className="p-1.5 hover:text-error transition-colors"><span className="material-symbols-outlined text-sm" data-icon="delete">delete</span></button>
</div>
</div>
<button onClick={() => {}} className="w-full py-2 border border-dashed border-border-subtle hover:border-primary hover:text-primary transition-all text-sm font-label-mono rounded flex items-center justify-center">
<span className="material-symbols-outlined mr-2 text-sm" data-icon="add">add</span> Generate New API Key
                                        </button>
</div>
</div>
</div>
</div>
</section>
{/*  Interface Section  */}
<section className={`settings-pane space-y-6 ${activeTab === "interface" ? "block" : "hidden"}`} id="pane-interface">
<div className="glass-card p-6 rounded-lg">
<h3 className="font-headline-section text-on-surface mb-6 flex items-center">
<span className="material-symbols-outlined mr-2 text-primary" data-icon="palette">palette</span>
                                Visual Matrix
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block font-label-mono text-xs text-on-surface-variant mb-4 uppercase tracking-wider">Information Density</label>
<div className="space-y-3">
<label className="flex items-center p-3 border border-border-subtle rounded cursor-pointer hover:bg-surface-container-high transition-colors">
<input className="w-4 h-4 bg-transparent border-border-subtle text-primary focus:ring-0 mr-3" name="density" type="radio"/>
<div>
<p className="text-sm font-medium">Standard</p>
<p className="text-xs text-on-surface-variant opacity-60">Balanced spacing for general use.</p>
</div>
</label>
<label className="flex items-center p-3 border border-primary/40 bg-primary/5 rounded cursor-pointer hover:bg-surface-container-high transition-colors">
<input checked className="w-4 h-4 bg-transparent border-border-subtle text-primary focus:ring-0 mr-3" name="density" type="radio"/>
<div>
<p className="text-sm font-medium">Technical (High)</p>
<p className="text-xs text-on-surface-variant opacity-60">Optimized for high-density data views.</p>
</div>
</label>
</div>
</div>
<div>
<label className="block font-label-mono text-xs text-on-surface-variant mb-4 uppercase tracking-wider">Primary Accent</label>
<div className="grid grid-cols-4 gap-3">
<button onClick={() => {}} className="w-full aspect-square bg-primary rounded border border-white/20 flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-sm" data-icon="check" data-weight="fill">check</span>
</button>
<button onClick={() => {}} className="w-full aspect-square bg-sky-500 rounded border border-transparent hover:border-white/20 transition-all"></button>
<button onClick={() => {}} className="w-full aspect-square bg-amber-500 rounded border border-transparent hover:border-white/20 transition-all"></button>
<button onClick={() => {}} className="w-full aspect-square bg-rose-500 rounded border border-transparent hover:border-white/20 transition-all"></button>
</div>
<p className="mt-4 text-xs text-on-surface-variant font-body-muted">System-wide highlights will adapt to this color.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-border-subtle">
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium">Motion &amp; Animation</h4>
<p className="text-xs text-on-surface-variant">Reduce parallax and hover effects for performance.</p>
</div>
<div onClick={() => {}} className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Notifications Section  */}
<section className={`settings-pane space-y-6 ${activeTab === "notifications" ? "block" : "hidden"}`} id="pane-notifications">
<div className="glass-card p-6 rounded-lg">
<h3 className="font-headline-section text-on-surface mb-6 flex items-center">
<span className="material-symbols-outlined mr-2 text-primary" data-icon="notifications">notifications</span>
                                Event Logging
                            </h3>
<div className="space-y-5">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="dns">dns</span>
<div>
<p className="text-sm font-medium">System Alert Critical</p>
<p className="text-xs text-on-surface-variant">Browser and desktop notifications for server downtime.</p>
</div>
</div>
<input checked className="w-5 h-5 bg-transparent border-border-subtle rounded text-primary focus:ring-0" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="terminal">terminal</span>
<div>
<p className="text-sm font-medium">Deployment Success</p>
<p className="text-xs text-on-surface-variant">Notify when CI/CD pipelines complete successfully.</p>
</div>
</div>
<input className="w-5 h-5 bg-transparent border-border-subtle rounded text-primary focus:ring-0" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="update">update</span>
<div>
<p className="text-sm font-medium">Tool Updates</p>
<p className="text-xs text-on-surface-variant">Release notes for new versions of activated modules.</p>
</div>
</div>
<input checked className="w-5 h-5 bg-transparent border-border-subtle rounded text-primary focus:ring-0" type="checkbox"/>
</div>
</div>
</div>
</section>
{/*  Advanced Section  */}
<section className={`settings-pane space-y-6 ${activeTab === "advanced" ? "block" : "hidden"}`} id="pane-advanced">
<div className="glass-card p-6 rounded-lg">
<h3 className="font-headline-section text-on-surface mb-6 flex items-center">
<span className="material-symbols-outlined mr-2 text-primary" data-icon="code">code</span>
                                Terminal Preferences
                            </h3>
<div className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block font-label-mono text-xs text-on-surface-variant mb-2 uppercase tracking-wider">Font Family</label>
<select className="w-full bg-surface-container-lowest border border-border-subtle text-on-surface rounded font-label-mono text-sm focus:border-primary focus:ring-0">
<option>JetBrains Mono</option>
<option>Fira Code</option>
<option>Source Code Pro</option>
<option>Cascadia Code</option>
</select>
</div>
<div>
<label className="block font-label-mono text-xs text-on-surface-variant mb-2 uppercase tracking-wider">Cursor Style</label>
<select className="w-full bg-surface-container-lowest border border-border-subtle text-on-surface rounded font-label-mono text-sm focus:border-primary focus:ring-0">
<option>Block (Steady)</option>
<option>Block (Blink)</option>
<option>Underline</option>
<option>Bar</option>
</select>
</div>
</div>
<div className="bg-surface-container-lowest p-4 rounded border border-border-subtle font-label-mono text-xs text-emerald-500 overflow-hidden relative">
<div className="absolute top-2 right-2 flex space-x-1">
<div className="w-2 h-2 rounded-full bg-error"></div>
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<p className="text-on-surface-variant mb-2"># Terminal Preview</p>
<p className="mb-1"><span className="text-primary">kinetic-noir</span> <span className="text-secondary">git:(main)</span> <span className="text-on-surface">npm run dev</span></p>
<p className="text-on-surface-variant opacity-60">&gt; Starting technical directory...</p>
<p className="text-on-surface-variant opacity-60">&gt; Hot Reload Enabled.</p>
<div className="mt-2 w-2 h-4 bg-primary inline-block animate-pulse"></div>
</div>
<div className="pt-4">
<button onClick={() => {}} className="px-6 py-2 bg-error-container text-error font-label-mono text-xs rounded hover:opacity-80 transition-opacity">
                                        PURGE SYSTEM CACHE
                                    </button>
</div>
</div>
</div>
</section>
<div className="flex items-center justify-end space-x-4 pt-10">
<button onClick={() => {}} className="px-6 py-2 border border-border-subtle text-on-surface-variant font-label-mono text-sm rounded hover:bg-surface-container-high transition-colors">Discard Changes</button>
<button onClick={() => {}} className="px-8 py-2 bg-primary text-on-primary font-label-mono text-sm rounded hover:opacity-90 transition-all shadow-lg shadow-primary/10">Apply Configuration</button>
</div>
</div>
</div>
</div>

    </>
  );
}
