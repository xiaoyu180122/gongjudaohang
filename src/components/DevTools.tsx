import React, { useState } from 'react';

export default function DevTools({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [formatterInput, setFormatterInput] = useState('');
  const [formatterOutput, setFormatterOutput] = useState('');
  const [jwtInput, setJwtInput] = useState('');
  const [jwtOutput, setJwtOutput] = useState('');
  const [generatedKey, setGeneratedKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(formatterInput);
      setFormatterOutput(JSON.stringify(parsed, null, 2));
    } catch (e: any) {
      setFormatterOutput('Invalid JSON: ' + e.message);
    }
  };

  const handleDecodeJwt = () => {
    try {
      const parts = jwtInput.split('.');
      if (parts.length !== 3) {
        setJwtOutput('Invalid JWT structure. Must have 3 parts separated by dots.');
        return;
      }
      
      const payloadBase64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      const decodedPayload = atob(payloadBase64);
      
      const headerBase64 = parts[0].replace(/-/g, '+').replace(/_/g, '/');
      const decodedHeader = atob(headerBase64);
      
      setJwtOutput(JSON.stringify({
        header: JSON.parse(decodedHeader),
        payload: JSON.parse(decodedPayload)
      }, null, 2));
    } catch (e: any) {
      setJwtOutput('JWT Decode Failed: ' + e.message);
    }
  };

  const handleGenerateKey = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = 'kn_dev_';
    for (let i = 0; i < 24; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedKey(result);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(generatedKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };
  return (
    <>
      
{/*  Header Section  */}
<section className="mb-10">
<h2 className="font-display-hero text-display-hero mb-2">Development Ecosystem</h2>
<p className="text-on-surface-variant max-w-2xl font-body-base">High-performance engineering utilities, CLI managers, and deployment pipelines optimized for technical precision.</p>
</section>
{/*  Bento Grid Categories  */}
<div className="grid grid-cols-12 gap-bento-gap">
{/*  Filter Bar / Chips  */}
<div className="col-span-12 flex items-center gap-2 mb-4 overflow-x-auto hide-scrollbar">
            {['All', 'IDE Extensions', 'Infrastructure', 'Debugging', 'Deployment'].map(cat => (
              <span 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-label-mono rounded uppercase tracking-wider cursor-pointer border transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-on-primary-fixed border-primary font-bold'
                    : 'bg-surface-container border-outline-variant text-on-surface-variant hover:border-primary'
                }`}
              >
                {cat === 'All' ? 'All Tools' : cat}
              </span>
            ))}
          </div>
{(selectedCategory === "All" || selectedCategory === "IDE Extensions") && (
<div className="col-span-12 lg:col-span-4 group tool-card relative bg-surface-container-low border border-border-subtle rounded-lg p-6 hover:bg-surface-container-high transition-all">
<div className="flex justify-between items-start mb-4">
<div className="h-10 w-10 bg-surface-container-highest rounded flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined" data-icon="code">code</span>
</div>
<span className="bg-primary/20 text-primary px-2 py-0.5 text-label-metadata rounded border border-primary/30 uppercase">Stable</span>
</div>
<h3 className="font-headline-section text-on-surface mb-1">V-Stack Intelligence</h3>
<p className="text-body-muted text-on-surface-variant mb-6 h-12 overflow-hidden">Low-latency language server providing real-time static analysis for Rust and Go projects.</p>
<div className="flex flex-wrap gap-3 mb-6">
<div className="flex items-center gap-1.5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined text-[16px]" data-icon="language">language</span>
<span className="text-label-mono text-on-surface-variant">Rust</span>
</div>
<div className="flex items-center gap-1.5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined text-[16px]" data-icon="javascript">javascript</span>
<span className="text-label-mono text-on-surface-variant">Go</span>
</div>
</div>
<div className="code-preview-overlay absolute inset-x-0 bottom-0 p-6 bg-surface-container-highest/95 backdrop-blur-sm border-t border-primary/20 rounded-b-lg">
<p className="text-label-mono text-primary mb-2 text-[10px] uppercase">CLI Preview</p>
<div className="bg-background/80 p-3 rounded font-label-mono text-label-mono text-on-surface-variant border border-outline-variant">
<span className="text-primary">$</span> vstack-init <span className="text-muted">--strict</span>
<br/>
<span className="text-muted">Analyzing local workspace...</span>
</div>
</div>
</div>
)}
{(selectedCategory === "All" || selectedCategory === "Infrastructure") && (
<div className="col-span-12 lg:col-span-8 group tool-card relative bg-surface-container-low border border-border-subtle rounded-lg p-6 hover:bg-surface-container-high transition-all overflow-hidden">
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="flex justify-between items-start mb-4">
<div className="h-10 w-10 bg-surface-container-highest rounded flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined" data-icon="dns">dns</span>
</div>
<span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 text-label-metadata rounded border border-outline-variant uppercase">LTS</span>
</div>
<h3 className="font-headline-section text-on-surface mb-1">Noir Engine Node</h3>
<p className="text-body-muted text-on-surface-variant mb-6">Distributed container orchestration engine for high-density edge deployments. Managed service with zero-downtime hot reloading capabilities.</p>
<div className="grid grid-cols-2 gap-4">
<div className="border-l border-primary/30 pl-4">
<span className="block text-label-metadata text-muted uppercase">Uptime</span>
<span className="text-headline-section font-bold text-on-surface">99.99%</span>
</div>
<div className="border-l border-primary/30 pl-4">
<span className="block text-label-metadata text-muted uppercase">Latency</span>
<span className="text-headline-section font-bold text-on-surface">14ms</span>
</div>
</div>
</div>
<div className="w-full md:w-64 bg-background border border-outline-variant rounded p-4 font-label-mono text-[11px] leading-relaxed relative">
<div className="absolute top-2 right-2 flex gap-1">
<div className="h-2 w-2 rounded-full bg-red-500/50"></div>
<div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
<div className="h-2 w-2 rounded-full bg-green-500/50"></div>
</div>
<p className="text-primary mb-2">// noir.config.js</p>
<p className="text-on-surface">export default &#123;</p>
<p className="pl-4 text-on-surface">region: 'us-east-1',</p>
<p className="pl-4 text-on-surface">replicas: 3,</p>
<p className="pl-4 text-on-surface">strategy: 'canary'</p>
<p className="text-on-surface">&#125;</p>
<div className="mt-4 pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-muted">Status: Running</span>
<span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
</div>
</div>
</div>
</div>
)}
{(selectedCategory === "All" || selectedCategory === "Debugging") && (
<div className="col-span-12 lg:col-span-5 group tool-card relative bg-surface-container-low border border-border-subtle rounded-lg p-6 hover:bg-surface-container-high transition-all">
<div className="flex justify-between items-start mb-4">
<div className="h-10 w-10 bg-surface-container-highest rounded flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined" data-icon="bug_report">bug_report</span>
</div>
<span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 text-label-metadata rounded border border-outline-variant uppercase">Beta</span>
</div>
<h3 className="font-headline-section text-on-surface mb-1">Deeptrace Debugger</h3>
<p className="text-body-muted text-on-surface-variant mb-4">Kernel-level trace analysis with automated stack-trace deobfuscation and visual memory leak mapping.</p>
<div className="flex items-center gap-4 text-label-metadata text-muted border-t border-outline-variant pt-4 mt-auto">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="memory">memory</span> x86/ARM64</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="history">history</span> V8 Snapshots</span>
</div>
</div>
)}
{(selectedCategory === "All" || selectedCategory === "Deployment") && (
<div className="col-span-12 lg:col-span-7 group tool-card relative bg-surface-container-low border border-border-subtle rounded-lg p-6 hover:bg-surface-container-high transition-all overflow-hidden">
<div className="relative h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-4 items-center">
<div className="h-10 w-10 bg-surface-container-highest rounded flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined" data-icon="rocket_launch">rocket_launch</span>
</div>
<div>
<h3 className="font-headline-section text-on-surface mb-0">GitOps Pipeline</h3>
<p className="text-label-metadata text-muted uppercase">Continuous Deployment Core</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="bg-primary/20 text-primary px-2 py-0.5 text-label-metadata rounded border border-primary/30 uppercase mb-1">Stable</span>
<span className="text-[10px] font-label-mono text-on-surface-variant">v2.4.1</span>
</div>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="bg-background border border-outline-variant p-3 rounded group-hover:border-primary/50 transition-colors">
<span className="material-symbols-outlined text-primary mb-2" data-icon="inventory_2">inventory_2</span>
<p className="text-label-mono text-on-surface">Build</p>
<p className="text-label-metadata text-muted mt-1">Docker Multi-stage</p>
</div>
<div className="bg-background border border-outline-variant p-3 rounded group-hover:border-primary/50 transition-colors">
<span className="material-symbols-outlined text-primary mb-2" data-icon="rule">rule</span>
<p className="text-label-mono text-on-surface">Test</p>
<p className="text-label-metadata text-muted mt-1">Jest / Playwright</p>
</div>
<div className="bg-background border border-outline-variant p-3 rounded group-hover:border-primary/50 transition-colors">
<span className="material-symbols-outlined text-primary mb-2" data-icon="cloud_done">cloud_done</span>
<p className="text-label-mono text-on-surface">Deploy</p>
<p className="text-label-metadata text-muted mt-1">AWS / GCP / Vercel</p>
</div>
</div>
</div>
</div>
)}
{/*  High-Density Quick Actions / Micro Tools  */}
<div className="col-span-12 mt-4">
<h4 className="text-label-metadata text-muted uppercase tracking-widest mb-4">Utility Micro-Services</h4>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-bento-gap-sm">
<div onClick={() => setActiveTool(activeTool === "Formatter" ? null : "Formatter")} className={`border p-3 rounded flex items-center gap-3 cursor-pointer transition-all group ${activeTool === "Formatter" ? "border-primary bg-primary/10" : "bg-surface-container-low border-border-subtle hover:border-primary"}`}>
<span className="material-symbols-outlined text-muted group-hover:text-primary transition-colors" data-icon="json">file_json</span>
<span className="text-label-mono text-on-surface-variant">Formatter</span>
</div>
<div onClick={() => setActiveTool(activeTool === "JWT Decr" ? null : "JWT Decr")} className={`border p-3 rounded flex items-center gap-3 cursor-pointer transition-all group ${activeTool === "JWT Decr" ? "border-primary bg-primary/10" : "bg-surface-container-low border-border-subtle hover:border-primary"}`}>
<span className="material-symbols-outlined text-muted group-hover:text-primary transition-colors" data-icon="lock_open">lock_open</span>
<span className="text-label-mono text-on-surface-variant">JWT Decr</span>
</div>
<div onClick={() => {}} className="bg-surface-container-low border border-border-subtle p-3 rounded flex items-center gap-3 hover:border-primary cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-muted group-hover:text-primary transition-colors" data-icon="difference">difference</span>
<span className="text-label-mono text-on-surface-variant">Diff Viewer</span>
</div>
<div onClick={() => setActiveTool(activeTool === "Key Gen" ? null : "Key Gen")} className={`border p-3 rounded flex items-center gap-3 cursor-pointer transition-all group ${activeTool === "Key Gen" ? "border-primary bg-primary/10" : "bg-surface-container-low border-border-subtle hover:border-primary"}`}>
<span className="material-symbols-outlined text-muted group-hover:text-primary transition-colors" data-icon="key">key</span>
<span className="text-label-mono text-on-surface-variant">Key Gen</span>
</div>
<div onClick={() => {}} className="bg-surface-container-low border border-border-subtle p-3 rounded flex items-center gap-3 hover:border-primary cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-muted group-hover:text-primary transition-colors" data-icon="speed">speed</span>
<span className="text-label-mono text-on-surface-variant">Regex Bench</span>
</div>
<div onClick={() => {}} className="bg-surface-container-low border border-border-subtle p-3 rounded flex items-center gap-3 hover:border-primary cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-muted group-hover:text-primary transition-colors" data-icon="query_stats">query_stats</span>
<span className="text-label-mono text-on-surface-variant">Load Test</span>
</div>
</div>
            
            {/* Active Micro-Tool Workspace */}
            {activeTool && (
              <div className="bg-surface-container border border-primary p-6 rounded-lg relative mt-6 animate-fadeIn">
                <button onClick={() => setActiveTool(null)} className="absolute top-4 right-4 text-muted hover:text-on-surface">
                  <span className="material-symbols-outlined">close</span>
                </button>
                
                {activeTool === 'Formatter' && (
                  <div className="space-y-4">
                    <h4 className="font-label-mono text-label-mono text-primary uppercase">JSON Formatter &amp; Validator</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <textarea 
                        value={formatterInput} 
                        onChange={e => setFormatterInput(e.target.value)} 
                        placeholder="Paste raw, unformatted JSON here..." 
                        className="w-full h-40 bg-background border border-outline-variant p-3 rounded font-label-mono text-xs text-on-surface focus:border-primary outline-none resize-none"
                      />
                      <div className="w-full h-40 bg-[#0e0e10] border border-outline-variant p-3 rounded font-label-mono text-xs text-[#f8f8f2] overflow-auto whitespace-pre">
                        {formatterOutput || '// Formatted output will appear here'}
                      </div>
                    </div>
                    <button onClick={handleFormat} className="bg-primary text-background font-label-mono text-xs font-bold py-2 px-6 rounded hover:opacity-90 transition-opacity">
                      FORMAT JSON
                    </button>
                  </div>
                )}
                
                {activeTool === 'JWT Decr' && (
                  <div className="space-y-4">
                    <h4 className="font-label-mono text-label-mono text-primary uppercase">JWT Decoder</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <textarea 
                        value={jwtInput} 
                        onChange={e => setJwtInput(e.target.value)} 
                        placeholder="Paste JWT (header.payload.signature) here..." 
                        className="w-full h-40 bg-background border border-outline-variant p-3 rounded font-label-mono text-xs text-on-surface focus:border-primary outline-none resize-none"
                      />
                      <div className="w-full h-40 bg-[#0e0e10] border border-outline-variant p-3 rounded font-label-mono text-xs text-[#f8f8f2] overflow-auto whitespace-pre">
                        {jwtOutput || '// Decoded payload JSON will appear here'}
                      </div>
                    </div>
                    <button onClick={handleDecodeJwt} className="bg-primary text-background font-label-mono text-xs font-bold py-2 px-6 rounded hover:opacity-90 transition-opacity">
                      DECODE JWT
                    </button>
                  </div>
                )}
                
                {activeTool === 'Key Gen' && (
                  <div className="space-y-4">
                    <h4 className="font-label-mono text-label-mono text-primary uppercase">API Key Generator</h4>
                    <p className="text-xs text-muted">Generate a cryptographically secure random API key locally.</p>
                    <div className="flex gap-4 items-center max-w-md">
                      <div className="flex-1 bg-[#0e0e10] border border-outline-variant px-4 py-2 rounded font-label-mono text-sm text-[#f8f8f2]">
                        {generatedKey || 'Click Generate...'}
                      </div>
                      <button onClick={handleGenerateKey} className="bg-primary text-background font-label-mono text-xs font-bold py-2 px-4 rounded hover:opacity-90">
                        GENERATE
                      </button>
                      {generatedKey && (
                        <button onClick={handleCopyKey} className="border border-outline-variant hover:border-primary py-2 px-4 text-on-surface font-label-mono text-xs font-bold flex items-center gap-2">
                          <span className="material-symbols-outlined text-xs">{copiedKey ? 'check' : 'content_copy'}</span>
                          {copiedKey ? 'COPIED!' : 'COPY'}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {/*  Promotional / Stats Banner  */}
<div className="col-span-12 mt-8 bg-surface-container-highest/30 border border-outline-variant rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none"></div>
<div className="flex-1">
<h2 className="font-headline-section text-on-surface mb-2">Integrated Monitoring Dashboard</h2>
<p className="text-body-muted text-on-surface-variant mb-6">Real-time telemetry for all local and remote development environments. Track builds, logs, and performance metrics in one unified terminal interface.</p>
<button onClick={() => { if (setActiveCategory) setActiveCategory("Analytics"); }} className="bg-primary text-on-primary-fixed px-6 py-2.5 font-label-mono text-label-mono uppercase tracking-widest hover:opacity-80 transition-opacity">Launch Dashboard</button>
</div>
<div className="w-full md:w-80 grid grid-cols-2 gap-4">
<div className="bg-background/60 p-4 border border-outline-variant rounded">
<p className="text-primary text-headline-section font-bold">4.2k</p>
<p className="text-label-metadata text-muted uppercase">Active Nodes</p>
</div>
<div className="bg-background/60 p-4 border border-outline-variant rounded">
<p className="text-primary text-headline-section font-bold">12ms</p>
<p className="text-label-metadata text-muted uppercase">Avg Latency</p>
</div>
<div className="bg-background/60 p-4 border border-outline-variant rounded">
<p className="text-primary text-headline-section font-bold">100%</p>
<p className="text-label-metadata text-muted uppercase">Security Auth</p>
</div>
<div className="bg-background/60 p-4 border border-outline-variant rounded">
<p className="text-primary text-headline-section font-bold">8.1M</p>
<p className="text-label-metadata text-muted uppercase">Req / Hour</p>
</div>
</div>
</div>
</div>

    </>
  );
}
