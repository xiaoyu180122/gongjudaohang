import React, { useState, useEffect } from 'react';

export default function ToolDetail({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  const [stars, setStars] = useState(14200);
  const [isStarred, setIsStarred] = useState(false);
  const [installStatus, setInstallStatus] = useState('idle'); // 'idle' | 'downloading' | 'installed'
  const [progress, setProgress] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleStar = () => {
    if (isStarred) {
      setStars(prev => prev - 1);
      setIsStarred(false);
    } else {
      setStars(prev => prev + 1);
      setIsStarred(true);
    }
  };

  const handleInstall = () => {
    if (installStatus === 'installed') {
      if (setActiveCategory) setActiveCategory('AI Tools');
      return;
    }
    if (installStatus === 'downloading') return;
    
    setInstallStatus('downloading');
    setProgress(0);
  };

  useEffect(() => {
    if (installStatus === 'downloading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setInstallStatus('installed');
            return 100;
          }
          return prev + 10;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [installStatus]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  return (
    <>
      
<div className="max-w-container-max mx-auto px-grid-margin py-10">
{/*  Hero Section  */}
<div className="mb-12">
<div className="flex items-start justify-between">
<div className="flex gap-6 items-center">
<div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center glow-emerald">
<span className="material-symbols-outlined text-primary text-5xl" style={{fontVariationSettings: '"FILL" 1'}}>network_intelligence</span>
</div>
<div>
<div className="flex items-center gap-3">
<h2 className="font-display-hero text-display-hero text-on-surface">NeuralNexus Pro</h2>
<span className="bg-primary/20 text-primary font-label-mono text-label-mono px-2 py-0.5 rounded border border-primary/30">v4.2.0-stable</span>
</div>
<p className="font-body-base text-muted max-w-2xl mt-2">The industry-standard engine for high-density neural computation and real-time inference optimization. Designed for sub-millisecond latency in production environments.</p>
</div>
</div>
<div className="flex flex-col gap-2">
<button onClick={handleInstall} className={`font-label-mono py-2 px-6 rounded-lg font-bold transition-all flex items-center gap-2 ${
      installStatus === 'installed' ? 'bg-emerald-500 text-background hover:bg-emerald-600' : 'bg-primary text-background hover:opacity-90'
    }`}>
      <span className="material-symbols-outlined text-[18px]">
        {installStatus === 'installed' ? 'check_circle' : (installStatus === 'downloading' ? 'sync' : 'download')}
      </span>
      {installStatus === 'idle' && 'Install Package'}
      {installStatus === 'downloading' && `Installing... ${progress}%`}
      {installStatus === 'installed' && 'Launch Environment'}
    </button>
<button onClick={handleStar} className={`border py-2 px-6 rounded-lg transition-all flex items-center gap-2 font-label-mono ${
      isStarred ? 'bg-primary/10 border-primary text-primary glow-emerald' : 'bg-transparent border-border-subtle text-on-surface hover:bg-surface-container-high'
    }`}>
      <span className={`material-symbols-outlined text-[18px] ${isStarred ? 'fill-1' : ''}`} style={isStarred ? {fontVariationSettings: '"FILL" 1'} : {}}>star</span>
      {isStarred ? 'Starred' : 'Star'} ({(stars / 1000).toFixed(1)}k)
    </button>
</div>
</div>
</div>
{/*  Bento Layout Content  */}
<div className="grid grid-cols-12 gap-6">
{/*  Main Narrative Column  */}
<div className="col-span-12 lg:col-span-8 space-y-6">
{/*  Performance Chart  */}
<div className="bg-surface-container-low border border-border-subtle rounded-xl p-6">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-headline-section text-headline-section text-on-surface">Usage Statistics</h3>
<p className="font-label-metadata text-label-metadata text-muted">Node activity vs. Latency (Last 30 Days)</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-primary rounded-full"></div>
<span className="font-label-metadata text-label-metadata text-on-surface">Nodes</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-muted rounded-full"></div>
<span className="font-label-metadata text-label-metadata text-on-surface">Requests</span>
</div>
</div>
</div>
<div className="h-48 flex items-end justify-between gap-1">
{/*  Simulated Chart  */}
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '40%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '35%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '55%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '45%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '70%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '60%'}}></div>
<div className="flex-1 bg-primary/60 rounded-t-sm transition-all hover:bg-primary/80" style={{height: '85%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '50%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '65%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '40%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '30%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '55%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '75%'}}></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm transition-all hover:bg-primary/40" style={{height: '90%'}}></div>
<div className="flex-1 bg-primary/60 rounded-t-sm transition-all hover:bg-primary/80" style={{height: '100%'}}></div>
</div>
</div>
{/*  Technical Overview  */}
<div className="bg-surface border border-border-subtle rounded-xl p-6">
<h3 className="font-headline-section text-headline-section text-on-surface mb-4">Technical Overview</h3>
<div className="prose prose-invert max-w-none font-body-base text-on-surface-variant leading-relaxed">
<p className="mb-4">NeuralNexus Pro implements a sophisticated multi-headed attention mechanism specifically optimized for Edge Computing. Unlike standard implementations, it utilizes a proprietary <span className="text-primary">Quantized Tensor Architecture (QTA)</span> to reduce memory footprint by 64% without compromising on precision.</p>
<div className="grid grid-cols-2 gap-4 my-6">
<div className="bg-surface-container-high p-4 rounded-lg border border-border-subtle">
<p className="font-label-mono text-label-mono text-primary uppercase mb-1">Architecture</p>
<p className="text-on-surface">Sparse-Attention Layered Core</p>
</div>
<div className="bg-surface-container-high p-4 rounded-lg border border-border-subtle">
<p className="font-label-mono text-label-mono text-primary uppercase mb-1">Latency</p>
<p className="text-on-surface">&lt; 0.4ms @ 4096 tokens</p>
</div>
</div>
<p>For developers building large-scale distributed systems, the Nexus core offers native support for gRPC and WebSockets, ensuring seamless data flow across heterogenous clusters.</p>
</div>
</div>
{/*  Code Section  */}
<div className="bg-surface border border-border-subtle rounded-xl overflow-hidden">
<div className="bg-surface-container-high px-4 py-2 border-b border-border-subtle flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
<div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
</div>
<span className="font-label-mono text-label-mono text-muted">main.py</span>
</div>
<div className="p-6 font-label-mono text-label-mono overflow-x-auto">
<pre className="text-[#f8f8f2]"><span className="text-primary">import</span> neural_nexus <span className="text-primary">as</span> nx

<span className="text-muted"># Initialize the high-density compute engine</span>
engine = nx.<span className="text-accent-emerald">NexusCore</span>(
    precision=<span className="text-[#ae81ff]">"fp16"</span>, 
    threads=<span className="text-[#ae81ff]">12</span>,
    cache_policy=<span className="text-[#ae81ff]">"aggressive"</span>
)

<span className="text-muted"># Load weights from the distributed cluster</span>
engine.<span className="text-accent-emerald">load_cluster</span>(<span className="text-[#e6db74]">"nexus://node-04-production"</span>)

<span className="text-muted"># Perform a sub-millisecond inference</span>
results = engine.<span className="text-accent-emerald">compute</span>(data_stream)

<span className="text-primary">print</span>(f<span className="text-[#e6db74]">"Inference complete: &#123;results.latency&#125;ms"</span>)</pre>
</div>
</div>
</div>
{/*  Sidebar  */}
<aside className="col-span-12 lg:col-span-4 space-y-6">
{/*  Maintainer Info  */}
<div className="bg-surface-container-low border border-border-subtle rounded-xl p-6">
<h4 className="font-label-mono text-label-mono text-muted uppercase tracking-widest mb-4">Maintainer</h4>
<div className="flex items-center gap-4 mb-6">
<img alt="Maintainer organization" className="w-12 h-12 rounded bg-surface-container-highest p-1 border border-border-subtle" data-alt="A minimalist tech logo for a fictional software organization named 'Nexus Systems'. The logo is a stylized, geometric 'N' made of glowing emerald green fiber-optic lines on a black matte cube background. The image is clean, corporate-modern, and highly technical in appearance." src="https://lh3.googleusercontent.com/aida/ADBb0ujoYRHNl82_K_t2eKmuj6bUlSQc3HCvmyaThhHi1Y8RRu1UmDVxeuvZ8wFiJ03TnvpH8yU5wS5cTlGH10AxS3ElVbd-kGuhLOL0AYjVYH0DqwT0UQITyKfOjJFIwRPCgUogWSs_osuHbpKHhx9i4iPQJFxZCkEDfPmZO1ViTCbyCMxL6Rvo852Y8imKf3HvcMMieJID9Q3lxv01SEwiiJ0U_g9v9cq1emR24nTEy3RaK71PagxKXegxKAY"/>
<div>
<p className="font-body-base text-on-surface font-bold">Nexus Systems Corp</p>
<p className="font-label-metadata text-label-metadata text-muted">Verified Enterprise Contributor</p>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-label-metadata">
<span className="text-muted">License</span>
<span className="text-on-surface">Apache 2.0</span>
</div>
<div className="flex justify-between text-label-metadata">
<span className="text-muted">Last Commit</span>
<span className="text-on-surface">2 hours ago</span>
</div>
<div className="flex justify-between text-label-metadata">
<span className="text-muted">Downloads/Mo</span>
<span className="text-on-surface">2.4M</span>
</div>
</div>
</div>
{/*  Installation  */}
<div className="bg-surface border border-border-subtle rounded-xl p-6">
<h4 className="font-label-mono text-label-mono text-muted uppercase tracking-widest mb-4">Installation</h4>
<div className="bg-surface-container-lowest border border-border-subtle rounded p-3 flex items-center justify-between mb-3">
<code className="font-label-mono text-label-mono text-primary">pip install neural-nexus-pro</code>
<button onClick={() => copyToClipboard("pip install neural-nexus-pro", 1)} className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">{copiedIndex === 1 ? "check" : "content_copy"}</span></button>
</div>
<div className="bg-surface-container-lowest border border-border-subtle rounded p-3 flex items-center justify-between">
<code className="font-label-mono text-label-mono text-primary">npm install @nexus/core-pro</code>
<button onClick={() => copyToClipboard("npm install @nexus/core-pro", 2)} className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">{copiedIndex === 2 ? "check" : "content_copy"}</span></button>
</div>
</div>
{/*  Related Tools  */}
<div className="bg-surface border border-border-subtle rounded-xl p-6">
<h4 className="font-label-mono text-label-mono text-muted uppercase tracking-widest mb-4">Related Tools</h4>
<div className="space-y-4">
<a className="group flex items-center gap-3 p-2 hover:bg-surface-container-high rounded-lg transition-colors border border-transparent hover:border-border-subtle" href="#" onClick={(e) => { e.preventDefault(); if (setActiveCategory) setActiveCategory("Dev Tools"); }}>
<div className="w-10 h-10 bg-secondary-container rounded flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined scale-75">database</span>
</div>
<div className="flex-1 overflow-hidden">
<p className="font-label-mono text-label-mono text-on-surface group-hover:text-primary transition-colors">NexusDB</p>
<p className="text-[10px] text-muted truncate">Vectorized storage for nexus nodes</p>
</div>
</a>
<a className="group flex items-center gap-3 p-2 hover:bg-surface-container-high rounded-lg transition-colors border border-transparent hover:border-border-subtle" href="#" onClick={(e) => { e.preventDefault(); if (setActiveCategory) setActiveCategory("Dev Tools"); }}>
<div className="w-10 h-10 bg-secondary-container rounded flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined scale-75">monitoring</span>
</div>
<div className="flex-1 overflow-hidden">
<p className="font-label-mono text-label-mono text-on-surface group-hover:text-primary transition-colors">InsightFlow</p>
<p className="text-[10px] text-muted truncate">Real-time inference monitoring</p>
</div>
</a>
<a className="group flex items-center gap-3 p-2 hover:bg-surface-container-high rounded-lg transition-colors border border-transparent hover:border-border-subtle" href="#" onClick={(e) => { e.preventDefault(); if (setActiveCategory) setActiveCategory("Dev Tools"); }}>
<div className="w-10 h-10 bg-secondary-container rounded flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined scale-75">security</span>
</div>
<div className="flex-1 overflow-hidden">
<p className="font-label-mono text-label-mono text-on-surface group-hover:text-primary transition-colors">GuardRail AI</p>
<p className="text-[10px] text-muted truncate">Security wrapper for neural models</p>
</div>
</a>
</div>
</div>
</aside>
</div>
</div>

    </>
  );
}
