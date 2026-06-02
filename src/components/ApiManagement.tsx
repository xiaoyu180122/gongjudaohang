import React, { useState } from 'react';

export default function ApiManagement({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  const [activeScope, setActiveScope] = useState('readwrite'); 
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [ipWhitelist, setIpWhitelist] = useState(['192.168.1.0/24', '10.0.4.15']);
  const [newIp, setNewIp] = useState('');
  const [showIpInput, setShowIpInput] = useState(false);
  const [keyStatus, setKeyStatus] = useState('Active'); 
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('Save Changes');

  const handleCopy = () => {
    navigator.clipboard.writeText('kn_live_7x8h2k9s1j4n6m3f9a');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddIp = (e: React.FormEvent) => {
    e.preventDefault();
    if (newIp.trim()) {
      setIpWhitelist(prev => [...prev, newIp.trim()]);
      setNewIp('');
      setShowIpInput(false);
    }
  };

  const handleRemoveIp = (ipToRemove: string) => {
    setIpWhitelist(prev => prev.filter(ip => ip !== ipToRemove));
  };

  const handleRevoke = () => {
    if (confirm('Are you sure you want to revoke this production vault key? This action is irreversible.')) {
      setKeyStatus('Revoked');
      setToast('API Key Revoked successfully.');
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    setSaveStatus('Saving Changes...');
    setTimeout(() => {
      setIsSaving(false);
      setSaveStatus('✔ Changes Saved');
      setToast('Configurations saved to Production Vault.');
      setTimeout(() => {
        setSaveStatus('Save Changes');
        setToast(null);
      }, 2000);
    }, 1200);
  };
  return (
    <>
      
{/*  Top Bar  */}
<header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-grid-margin h-16">
<div className="flex items-center gap-4">
<div className="md:hidden">
<span className="material-symbols-outlined text-on-surface">menu</span>
</div>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm">search</span>
<input className="bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-4 py-1.5 text-body-base focus:border-primary outline-none transition-all w-64" placeholder="Search parameters..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button onClick={() => {}} className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button onClick={() => {}} className="flex items-center gap-2 group">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a software engineer in a dark, moody studio environment with soft rim lighting emphasizing technical focus. The background is a deep charcoal, matching the kinetic noir aesthetic. The subject wears a dark turtleneck, looking slightly away from the camera with a look of calm precision." src="https://lh3.googleusercontent.com/aida/AP1WRLur0FPn58gHUt01LhgN8uJK3lkIQXC3qSnjW5TljVv_KyI281Pz9MSbD_UvE0zm3NxQYjEFJszzcnzW7rvboN7c47OJ8WlLbJjHjZeKy--_vj2jocNGy6-v5uCULcN7t9jrt_2_5xMWusN3LQLctbivpF4UzOtIsmQPqqMrCW53ld38OnFIOC1tHm3hPrWT8Xr7AZkEYlxfP-TqnzStxGxYlxV_iZGrexyAl8KLHwKbgwVdQXeF5DGE-dQ"/>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">account_circle</span>
</button>
</div>
</header>
{/*  Page Content  */}
<div className="pt-24 pb-12 px-grid-margin max-w-container-max mx-auto relative">
      {toast && (
        <div className="fixed top-20 right-8 bg-emerald-500 text-background px-6 py-3 rounded-lg shadow-lg font-label-mono text-sm z-50 animate-bounce">
          {toast}
        </div>
      )}
{/*  Back Link  */}
<nav className="mb-8">
<a className="inline-flex items-center text-muted hover:text-primary transition-colors group" href="#" onClick={(e) => { e.preventDefault(); if (setActiveCategory) setActiveCategory("Settings"); }}>
<span className="material-symbols-outlined text-sm mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
<span className="font-body-base text-body-base">Back to Security Settings</span>
</a>
</nav>
{/*  Key Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<div className="flex items-center gap-3 mb-2">
<span className={`text-[10px] px-2 py-0.5 rounded border font-label-mono uppercase tracking-widest ${keyStatus === "Active" ? "bg-primary/10 border-primary/20 text-primary" : "bg-error/10 border-error/20 text-error"}`}>{keyStatus}</span>
<h2 className="font-display-hero text-display-hero text-on-surface">Production-Vault-Key</h2>
</div>
<p className="text-muted font-body-base max-w-xl">Created on Oct 24, 2023. Currently used for primary infrastructure orchestration and automated CI/CD pipeline deployments.</p>
</div>
<div className="flex gap-3">
<button disabled={keyStatus === "Revoked"} onClick={handleRevoke} className="px-6 py-2 border border-outline-variant text-on-surface font-body-base hover:bg-surface-container-high transition-all disabled:opacity-30">
            Revoke Key
          </button>
<button disabled={isSaving} onClick={handleSave} className="px-6 py-2 bg-primary text-on-primary font-body-base hover:opacity-90 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">{isSaving ? "sync" : "save"}</span> {saveStatus}
          </button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap">
{/*  API Token Card (Glass)  */}
<div className="md:col-span-8 glass-panel p-6 rounded-xl flex flex-col justify-between">
<div>
<h3 className="font-headline-section text-headline-section text-on-surface mb-6">Token Configuration</h3>
{/*  Permissions Section  */}
<div className="mb-8">
<label className="block font-label-mono text-label-mono text-muted mb-3 uppercase tracking-tighter">Access Scope</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<button onClick={() => setActiveScope("readonly")} className={`flex flex-col p-4 border transition-all text-left relative ${activeScope === "readonly" ? "border-primary bg-primary/5" : "border-outline-variant bg-surface-container-low hover:border-primary"}`}>
{activeScope === "readonly" && <span className="material-symbols-outlined absolute top-3 right-3 text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>}
<span className="font-body-base text-on-surface font-bold">Read-Only</span>
<span className="font-body-muted text-body-muted mt-1">GET requests only. No state mutation.</span>
</button>
<button onClick={() => setActiveScope("readwrite")} className={`flex flex-col p-4 border transition-all text-left relative ${activeScope === "readwrite" ? "border-primary bg-primary/5" : "border-outline-variant bg-surface-container-low hover:border-primary"}`}>
{activeScope === "readwrite" && <span className="material-symbols-outlined absolute top-3 right-3 text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>}
<span className={`font-body-base font-bold ${activeScope === "readwrite" ? "text-primary" : "text-on-surface"}`}>Read/Write</span>
<span className="font-body-muted text-body-muted mt-1">Full access to modify records and data.</span>
</button>
<button onClick={() => setActiveScope("admin")} className={`flex flex-col p-4 border transition-all text-left relative ${activeScope === "admin" ? "border-primary bg-primary/5" : "border-outline-variant bg-surface-container-low hover:border-primary"}`}>
{activeScope === "admin" && <span className="material-symbols-outlined absolute top-3 right-3 text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>}
<span className="font-body-base text-on-surface font-bold">Admin</span>
<span className="font-body-muted text-body-muted mt-1">User management and key rotation powers.</span>
</button>
</div>
</div>
{/*  Expiration  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
<div className="space-y-2">
<label className="block font-label-mono text-label-mono text-muted uppercase">Expiration Date</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-outline-variant p-2.5 rounded text-body-base focus:border-primary outline-none" type="date" value="2024-12-31"/>
</div>
</div>
<div className="space-y-2">
<label className="block font-label-mono text-label-mono text-muted uppercase">Rate Limit (Req/s)</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant p-2.5 rounded text-body-base focus:border-primary outline-none">
<option>100 req/s</option>
<option selected>500 req/s (Standard)</option>
<option>Unlimited</option>
</select>
</div>
</div>
</div>
<div className="mt-10 p-4 bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
<div className="font-label-mono text-label-mono truncate pr-4">
<span className="text-muted">SECRET_KEY:</span>
<span className="text-on-surface ml-2">kn_live_************************3f9a</span>
</div>
<button onClick={handleCopy} className="text-primary font-label-mono text-label-mono hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-xs">{copied ? "check" : "content_copy"}</span> {copied ? "Copied!" : "Copy"}
            </button>
</div>
</div>
{/*  Terminal Logs Card  */}
<div className="md:col-span-4 bg-[#0e0e10] border border-outline-variant rounded-xl flex flex-col h-[500px] md:h-auto overflow-hidden">
<div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-error"></div>
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="ml-2 font-label-mono text-label-mono text-muted">usage_logs.sh</span>
</div>
<span className="material-symbols-outlined text-muted text-sm">terminal</span>
</div>
<div className="p-4 flex-1 overflow-y-auto terminal-scroll font-label-mono text-label-mono leading-relaxed">
<div className="mb-3">
<span className="text-primary opacity-50">14:02:11</span>
<span className="text-on-tertiary-container ml-2">[AUTH]</span>
<span className="text-on-surface ml-2">Handshake success - IP: 192.168.1.45</span>
</div>
<div className="mb-3">
<span className="text-primary opacity-50">14:02:12</span>
<span className="text-primary ml-2">[GET]</span>
<span className="text-on-surface ml-2">/v1/vault/secret_path... 200 OK</span>
</div>
<div className="mb-3">
<span className="text-primary opacity-50">14:05:44</span>
<span className="text-primary ml-2">[GET]</span>
<span className="text-on-surface ml-2">/v1/vault/keys/rotation... 200 OK</span>
</div>
<div className="mb-3">
<span className="text-primary opacity-50">14:10:01</span>
<span className="text-primary ml-2">[POST]</span>
<span className="text-on-surface ml-2">/v1/ingest/telemetry... 201 Created</span>
</div>
<div className="mb-3">
<span className="text-primary opacity-50">15:22:10</span>
<span className="text-on-tertiary-container ml-2">[AUTH]</span>
<span className="text-on-surface ml-2">Token refreshed for session #442</span>
</div>
<div className="mb-3">
<span className="text-primary opacity-50">15:24:00</span>
<span className="text-error ml-2">[ERR]</span>
<span className="text-error ml-2">Rate limit exceeded for path /v1/batch</span>
</div>
<div className="mb-3">
<span className="text-primary opacity-50">15:24:05</span>
<span className="text-primary ml-2">[POST]</span>
<span className="text-on-surface ml-2">/v1/ingest/telemetry... 201 Created</span>
</div>
<div className="mb-3">
<span className="text-primary opacity-50">15:28:19</span>
<span className="text-primary ml-2">[GET]</span>
<span className="text-on-surface ml-2">/v1/system/status... 200 OK</span>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="text-primary">kinetic-noir@root:~$</span>
<span className="w-2 h-4 bg-primary animate-pulse"></span>
</div>
</div>
</div>
{/*  IP Whitelist (Small Bento Cell)  */}
<div className="md:col-span-4 glass-panel p-6 rounded-xl">
<h4 className="font-label-mono text-label-mono text-muted mb-4 uppercase">Network Restrictions</h4>
<div className="space-y-3">
            {ipWhitelist.map(ip => (
              <div key={ip} className="flex items-center justify-between p-2 bg-surface-container-lowest border border-outline-variant">
                <span className="font-label-mono text-label-mono">{ip}</span>
                <span onClick={() => handleRemoveIp(ip)} className="material-symbols-outlined text-muted text-sm hover:text-error cursor-pointer">close</span>
              </div>
            ))}
            
            {showIpInput ? (
              <form onSubmit={handleAddIp} className="flex gap-2">
                <input 
                  type="text" 
                  value={newIp} 
                  onChange={e => setNewIp(e.target.value)} 
                  placeholder="e.g. 192.168.1.1" 
                  className="flex-1 bg-surface-container-lowest border border-outline-variant p-1 rounded font-label-mono text-xs text-on-surface focus:border-primary outline-none" 
                  autoFocus
                />
                <button type="submit" className="bg-primary text-background px-3 py-1 font-label-mono text-xs font-bold hover:opacity-90">ADD</button>
                <button type="button" onClick={() => setShowIpInput(false)} className="border border-outline-variant px-2 py-1 font-label-mono text-xs hover:bg-surface-container-high">CANCEL</button>
              </form>
            ) : (
              <button onClick={() => setShowIpInput(true)} className="w-full py-2 border border-dashed border-outline-variant text-muted font-label-mono text-label-mono hover:border-primary hover:text-primary transition-all">
                + Add IP Range
              </button>
            )}
          </div>
</div>
{/*  Metric Visualization (Large Bento Cell)  */}
<div className="md:col-span-8 glass-panel p-6 rounded-xl relative overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h4 className="font-label-mono text-label-mono text-muted uppercase">Latency Spectrum (Last 24h)</h4>
<div className="flex gap-4">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="text-[10px] font-label-mono text-muted">avg: 42ms</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-accent-emerald"></span>
<span className="text-[10px] font-label-mono text-muted">p99: 112ms</span>
</div>
</div>
</div>
{/*  Mock Chart  */}
<div className="h-32 flex items-end gap-1 px-2">
{/*  Simplified Bar Chart Representation  */}
<div className="bg-primary/20 w-full h-[60%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[45%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[80%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[30%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[55%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[90%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[40%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[65%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[25%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[75%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[50%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[85%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[35%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[60%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[15%] border-t border-primary/40"></div>
<div className="bg-primary/20 w-full h-[45%] border-t border-primary/40"></div>
</div>
<div className="mt-4 flex justify-between font-label-mono text-[9px] text-muted">
<span>00:00</span>
<span>04:00</span>
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
<span>20:00</span>
<span>23:59</span>
</div>
</div>
</div>
</div>

    </>
  );
}
