import React, { useState } from 'react';

export default function ProductivityTools({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  const [slackConnected, setSlackConnected] = useState(true);
  const [discordConnected, setDiscordConnected] = useState(false);
  const [showIntegrationsModal, setShowIntegrationsModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleSlack = () => {
    setSlackConnected(!slackConnected);
    setToastMessage(slackConnected ? 'Slack Integration Deactivated' : 'Slack Integration Activated');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleDiscord = () => {
    setDiscordConnected(!discordConnected);
    setToastMessage(discordConnected ? 'Discord API Deactivated' : 'Discord API Activated');
    setTimeout(() => setToastMessage(null), 3000);
  };
  return (
    <>
      
<div className="max-w-container-max mx-auto relative">
      {toastMessage && (
        <div className="fixed top-20 right-8 bg-emerald-500 text-background px-6 py-3 rounded-lg shadow-lg font-label-mono text-sm z-50 animate-bounce">
          {toastMessage}
        </div>
      )}
{/*  Hero Section  */}
<section className="mb-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="h-[1px] w-8 bg-primary"></span>
<span className="text-label-mono text-primary uppercase tracking-widest">Efficiency Terminal</span>
</div>
<h2 className="font-display-hero text-display-hero text-on-surface">Engineering Workflow &amp; Productivity</h2>
<p className="text-body-muted text-muted max-w-2xl mt-3">Optimize your technical stack with precision-engineered management tools and automation workflows. High-density coordination for high-performance teams.</p>
</div>
<div className="flex gap-4">
<div className="bento-card p-4 flex flex-col items-center justify-center min-w-[120px]">
<span className="text-label-metadata text-muted uppercase">Avg. Save</span>
<span className="text-headline-section font-bold text-primary">12.4h</span>
<span className="text-label-metadata text-muted">Per Sprint</span>
</div>
<button onClick={() => setShowIntegrationsModal(!showIntegrationsModal)} className="bg-primary text-on-primary font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">add</span>
                            New Integration
                        </button>
</div>
</div>
{/*  Bento Grid Content  */}
            {showIntegrationsModal && (
              <div className="bg-surface-container border border-primary p-6 rounded-lg mb-6 max-w-md animate-fadeIn">
                <h4 className="font-label-mono text-label-mono text-primary mb-4 uppercase">Ecosystem Integrations</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-background p-3 border border-outline-variant">
                    <span className="font-bold text-sm">Slack Integration</span>
                    <button onClick={toggleSlack} className={`px-4 py-1.5 font-label-mono text-xs font-bold rounded ${slackConnected ? "bg-error text-white" : "bg-primary text-background"}`}>
                      {slackConnected ? "DEACTIVATE" : "ACTIVATE"}
                    </button>
                  </div>
                  <div className="flex justify-between items-center bg-background p-3 border border-outline-variant">
                    <span className="font-bold text-sm">Discord API</span>
                    <button onClick={toggleDiscord} className={`px-4 py-1.5 font-label-mono text-xs font-bold rounded ${discordConnected ? "bg-error text-white" : "bg-primary text-background"}`}>
                      {discordConnected ? "DEACTIVATE" : "ACTIVATE"}
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap">
{/*  Featured: Project Management (Large)  */}
<div className="md:col-span-8 bento-card p-6 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-headline-section text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">account_tree</span>
                                    Project Management
                                </h3>
<p className="text-body-muted text-muted">Agile task orchestration for technical roadmaps.</p>
</div>
<span className="bg-surface-container-high text-label-mono px-3 py-1 rounded-full border border-outline-variant">4 Active Tools</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
<div onClick={() => { if (setActiveCategory) setActiveCategory("Tool Detail"); }} className="p-4 border border-outline-variant bg-surface-container-lowest rounded hover:border-primary/50 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<span className="font-bold">Linear Hub</span>
<span className="text-label-mono text-accent-emerald text-[10px] bg-primary/10 px-2 py-0.5 rounded">SYNCED</span>
</div>
<p className="text-label-metadata text-muted mb-3 leading-relaxed">Streamlined issue tracking for high-velocity teams. 99% task completion rate.</p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-mono bg-zinc-800 px-2 py-0.5 text-zinc-400">Notion Native</span>
<span className="text-[10px] font-mono bg-zinc-800 px-2 py-0.5 text-zinc-400">SaaS</span>
</div>
</div>
<div onClick={() => { if (setActiveCategory) setActiveCategory("Tool Detail"); }} className="p-4 border border-outline-variant bg-surface-container-lowest rounded hover:border-primary/50 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="font-bold">Jira Enterprise</span>
<span className="material-symbols-outlined text-muted text-[16px]">open_in_new</span>
</div>
<p className="text-label-metadata text-muted mb-3 leading-relaxed">Complex workflow mapping with deep Bitbucket/GitHub hooks.</p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-mono bg-zinc-800 px-2 py-0.5 text-zinc-400">SSO Enabled</span>
<span className="text-[10px] font-mono bg-zinc-800 px-2 py-0.5 text-zinc-400">Legacy Sync</span>
</div>
</div>
</div>
</div>
{/*  Automation Widget  */}
<div className="md:col-span-4 bento-card p-6 bg-gradient-to-br from-surface to-surface-container-low overflow-hidden relative">
<div className="relative z-10">
<h3 className="font-headline-section text-on-surface mb-2">Automation</h3>
<div className="space-y-4 mt-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary">auto_fix_high</span>
</div>
<div className="flex-grow">
<div className="flex justify-between">
<span className="text-label-mono text-on-surface">Zapier Flow</span>
<span className="text-label-metadata text-primary">94% EFF</span>
</div>
<div className="w-full bg-zinc-800 h-1 mt-1">
<div className="bg-primary h-full w-[94%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-secondary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-muted">sync_alt</span>
</div>
<div className="flex-grow">
<div className="flex justify-between">
<span className="text-label-mono text-on-surface">n8n Self-Host</span>
<span className="text-label-metadata text-muted">68% EFF</span>
</div>
<div className="w-full bg-zinc-800 h-1 mt-1">
<div className="bg-zinc-600 h-full w-[68%]"></div>
</div>
</div>
</div>
</div>
</div>
{/*  Background Texture  */}
<div className="absolute -bottom-10 -right-10 opacity-10">
<span className="material-symbols-outlined text-[160px]" style={{fontVariationSettings: '"FILL" 1'}}>bolt</span>
</div>
</div>
{/*  Note-taking & Documentation  */}
<div className="md:col-span-4 bento-card p-6">
<h3 className="font-headline-section text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">edit_note</span>
                            Knowledge Base
                        </h3>
<div className="space-y-3">
<div onClick={() => setActiveCategory?.('Tool Detail')} className="p-3 border border-outline-variant bg-surface-container-lowest flex justify-between items-center group cursor-pointer">
<div className="flex flex-col">
<span className="font-bold text-sm">Obsidian Sync</span>
<span className="text-label-metadata text-muted">Local-first markdown</span>
</div>
<span className="material-symbols-outlined text-muted group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<div onClick={() => setActiveCategory?.('Tool Detail')} className="p-3 border border-outline-variant bg-surface-container-lowest flex justify-between items-center group cursor-pointer">
<div className="flex flex-col">
<span className="font-bold text-sm">Notion Workspace</span>
<span className="text-label-metadata text-muted">Collaborative docs</span>
</div>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
<div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
</div>
</div>
</div>
</div>
{/*  Communication Matrix  */}
<div className="md:col-span-5 bento-card p-6">
<h3 className="font-headline-section text-on-surface mb-1 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">forum</span>
                            Communication
                        </h3>
<p className="text-label-metadata text-muted mb-6">Unified protocol messaging.</p>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between p-4 bg-surface-container-low border border-outline-variant rounded">
                  <div className="flex items-center gap-3">
                    <img alt="Slack logo" className="w-8 h-8 rounded opacity-80" src="https://lh3.googleusercontent.com/aida/AP1WRLvrx4w6g77GgztYGL_FWci0ftOQUa07jV-wzdmV3C63Gf0mmDBUnnFE4DfVAEWdr4cKFvn7-WIuXCAretYcHJp8XkqJCf6Da58xf3Hk85FMqzjCSCeYO8I2oPHQHRZZAvGUFO63GsApwuXIJ-YREYstTCzad4XDxZvYWIhc9bapthNR-9NZRptdQiEgWahe2D8HZpnRJDPQB3pkCPAXGwsV0uEx2rZ0EREgqmkQR_RY1Kwa8HaL4BtNQrI"/>
                    <div>
                      <p className="text-body-base font-medium">Slack Integration</p>
                      <p className="text-label-metadata text-muted">{slackConnected ? "5 Connected Channels" : "Connection Deactivated"}</p>
                    </div>
                  </div>
                  {slackConnected ? (
                    <div className="flex items-center gap-2">
                      <span className="text-label-mono text-primary text-[10px]">ACTIVE</span>
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>
                  ) : (
                    <span className="text-label-mono text-muted text-[10px]">DEACTIVATED</span>
                  )}
                </div>
<div className="flex items-center justify-between p-4 bg-surface-container-low border border-outline-variant rounded">
                  <div className="flex items-center gap-3">
                    <img alt="Discord logo" className="w-8 h-8 rounded opacity-80" src="https://lh3.googleusercontent.com/aida/AP1WRLu2oPmXMiZ6nFU57Xig07wwAOuDZkhWQLE0I3vL1l7lPgYlGEAf8mItYeIqLnRTIABtkZOe-JrwnvbanWbGoZYcRLtafYWovl6Ah4NSANfVaYKXlxYUX2ewZ37FOW_RoBXmzBvoqEZeyl-NcUSTTc1ukrXy7PRtNeZUpdo-HbNbzpoatbQUvZov9P2hEGeZy_jadycB8Fve1zoGpSxnhLlygQNwMGWAU0hyq0NP0jrdoLTC-h2F_wocQRQ"/>
                    <div>
                      <p className="text-body-base font-medium">Discord API</p>
                      <p className="text-label-metadata text-muted">{discordConnected ? "Internal Dev Server Connected" : "Internal Dev Server"}</p>
                    </div>
                  </div>
                  {discordConnected ? (
                    <div className="flex items-center gap-2">
                      <span className="text-label-mono text-primary text-[10px]">ACTIVE</span>
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>
                  ) : (
                    <span className="text-label-mono text-muted text-[10px]">STANDBY</span>
                  )}
                </div>
</div>
</div>
{/*  Efficiency Metrics (The "Value" Card)  */}
<div className="md:col-span-3 bento-card p-6 bg-primary text-on-primary border-none">
<div className="h-full flex flex-col">
<span className="material-symbols-outlined text-[32px] mb-4">insights</span>
<h3 className="text-headline-section font-bold leading-tight">Workflow Efficiency</h3>
<div className="mt-auto">
<div className="text-[48px] font-extrabold leading-none tracking-tighter">+24%</div>
<p className="text-label-metadata font-bold mt-2 uppercase">Throughput this month</p>
<p className="text-label-metadata opacity-80 mt-1">Comparing to previous baseline: 24/7/365 data aggregation.</p>
</div>
</div>
</div>
{/*  Workflow Visualizer  */}
<div className="md:col-span-12 bento-card p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-section text-on-surface">Integrated Pipeline Visualization</h3>
<div className="flex gap-2">
<span className="text-label-mono text-muted border border-outline-variant px-3 py-1 rounded">Last Update: 2m ago</span>
</div>
</div>
<div className="relative w-full aspect-[21/9] md:aspect-[32/9] bg-surface-container-lowest border border-outline-variant overflow-hidden rounded">
{/*  Placeholder for a complex visualization  */}
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #4edea3 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-0 flex items-center justify-around px-12">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-background z-10">
<span className="material-symbols-outlined text-primary">data_object</span>
</div>
<span className="text-label-metadata font-bold">RAW INPUT</span>
</div>
<div className="h-[2px] flex-grow bg-gradient-to-r from-primary to-primary/20 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 px-3 py-1 border border-outline-variant text-[9px] font-mono">ENRICHING</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full border-2 border-muted flex items-center justify-center bg-background z-10">
<span className="material-symbols-outlined text-muted">hub</span>
</div>
<span className="text-label-metadata font-bold">CENTRAL NODE</span>
</div>
<div className="h-[2px] flex-grow bg-gradient-to-r from-primary/20 to-primary relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 px-3 py-1 border border-outline-variant text-[9px] font-mono">DISTRIBUTING</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-background z-10">
<span className="material-symbols-outlined text-primary">rocket_launch</span>
</div>
<span className="text-label-metadata font-bold">DEPLOYED</span>
</div>
</div>
{/*  Decorative background image prompt  */}
<img className="absolute top-0 left-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none" data-alt="A highly complex and detailed network visualization with glowing nodes and thin interconnected lines across a dark digital plane. The style is minimalist and technical, using deep zinc blacks and vibrant emerald green accents. The lighting is low-key, emphasizing the luminescent pathways of data flowing through the architectural grid. The mood is precise, calculated, and professional." src="https://lh3.googleusercontent.com/aida/AP1WRLvu-EFPzVC05Nzn0MbDZAVDbhWcLRxufve3F3WZ3MDpzRy6NcHUCmg0Fz3BjYATeOb7qoGtjlq2l3Gs1dD-yQBvT6T8UknfyZ4UBG2iTNKUBh0UcJJOE2TQ0XZ6BQdCF2KBZUNU6DQniFVjgONfkQpM3YjE1_yWACMx0Yk3JSVkHI9ssAbmzX9RSk8XahXHGla8g6jv9_JCzBLBH5XbuxkrYXTVOgBzYfKLmBUhO5Vah65oiYxaXxZl9JM"/>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
