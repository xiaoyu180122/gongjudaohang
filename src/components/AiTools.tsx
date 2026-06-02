import React, { useState } from 'react';

export default function AiTools({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allTools = [
    { id: 'nexus', name: 'NeuralNexus Pro', category: 'LLM', desc: 'Advanced conversational LLM with multi-modal reasoning capabilities. Optimized for technical documentation and complex architectural planning.', growth: 'M0,35 Q20,30 40,32 T80,25 T120,15 T160,20 T200,5', tags: ['API Available', 'Enterprise'], isFeatured: true, icon: 'psychology' },
    { id: 'forge', name: 'ForgeScript AI', category: 'Code Assistants', desc: 'Real-time code assistant that suggests entire modules based on context. Supports 45+ languages.', growth: 'M0,18 L10,15 L20,17 L30,10 L40,12 L50,5 L60,8 T70,3 T80,6 T100,2', tags: ['Open Source'], isFeatured: false, icon: 'code_blocks' },
    { id: 'prism', name: 'PrismGen v4', category: 'Image Generation', desc: 'High-fidelity image generation for UI prototypes and product mockups with consistent lighting.', growth: 'M0,10 L25,12 L50,8 L75,15 L100,5', tags: ['GPU Accelerated'], isFeatured: false, icon: 'image' },
    { id: 'echo', name: 'EchoVoice.io', category: 'Audio', desc: 'Low-latency text-to-speech engine with emotional tonal range and instant voice cloning.', growth: 'M0,15 L20,15 L40,10 L60,12 L80,5 L100,8', tags: ['Beta Access'], isFeatured: false, icon: 'mic' },
    { id: 'struct', name: 'Structurize', category: 'LLM', desc: 'Automatic unstructured data parsing into JSON schemas with 99.8% precision at scale.', growth: 'M0,18 L30,12 L60,14 L100,2', tags: ['REST API', 'Webhooks'], isFeatured: false, icon: 'data_object' }
  ];

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim() && setActiveCategory) {
      setActiveCategory('Search Results');
    }
  };

  const filteredTools = allTools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTool = filteredTools.find(t => t.isFeatured);
  const regularTools = filteredTools.filter(t => !t.isFeatured);
  return (
    <>
      
{/*  TopNavBar Anchor  */}
<header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant h-16 flex justify-between items-center px-grid-margin">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm">search</span>
<input className="w-full bg-background border border-border-subtle rounded-lg py-1.5 pl-10 pr-4 text-body-base focus:outline-none focus:border-primary transition-all" placeholder="Search AI models, APIs, and frameworks..." type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onKeyDown={handleSearchKeyDown}/>
</div>
</div>
<div className="flex items-center gap-4">
<button onClick={() => {}} className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden">
<img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLu6r6-1AqAXzKc9Rse9INn48RqkyyiqP-hGjD-AjOx-hp_NKf1jxDe40AmjfwWaYT8xGbcirmQDsJkW2soEbePQ1bvI_DPpGtQhpSpDqXgMwKLbcqFlt96UZa3H0BigPu7jMKFXsvR5YM_Wwck6fIvbGNCnWBMAdL1R_cUdiguLhzHfj--HHpDQqqV-5U7aVdiwYahLirBSdCP4PlNuM6P_DaSjxlfVYl-iZNe6VOHfzUF-JzRadQjBvz0"/>
</div>
</div>
</header>
{/*  Page Content  */}
<div className="mt-16 p-grid-margin max-w-container-max mx-auto w-full">
{/*  Hero Header Section  */}
<div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">Global Index</span>
</div>
<h2 className="font-display-hero text-display-hero text-on-surface">Artificial Intelligence</h2>
<p className="font-body-muted text-body-muted text-muted mt-2">Discover and integrate cutting-edge machine learning solutions. <span className="text-on-surface font-medium">128 Tools Indexing</span></p>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {['All', 'LLM', 'Image Generation', 'Code Assistants', 'Audio'].map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)} 
                className={`px-4 py-1.5 rounded-full font-label-mono text-label-mono border transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary text-on-primary border-primary' 
                    : 'bg-surface-container-low border-border-subtle text-on-surface-variant hover:border-primary'
                }`}
              >
                {cat === 'All' ? 'All Tools' : cat}
              </button>
            ))}
          </div>
</div>
{/*  Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap">
            {featuredTool && (
              <div className="md:col-span-8 group bg-surface-container-low border border-border-subtle rounded-xl p-6 hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6">
                  <span className="material-symbols-outlined text-primary/20 group-hover:text-primary transition-colors text-6xl opacity-10">neurology</span>
                </div>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-background border border-border-subtle flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">{featuredTool.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-headline-section text-on-surface">{featuredTool.name}</h3>
                        <div className="flex gap-2 mt-1">
                          {featuredTool.tags.map(t => (
                            <span key={t} className="font-label-metadata text-label-metadata bg-primary/10 text-primary px-2 py-0.5 border border-primary/20 rounded-sm">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="font-body-base text-body-base text-muted max-w-lg">{featuredTool.desc}</p>
                  </div>
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <span className="font-label-metadata text-label-metadata text-muted block mb-2 uppercase tracking-tighter">Usage Growth (30d)</span>
                      <div className="w-48 h-10">
                        <svg className="w-full h-full" viewBox="0 0 200 40">
                          <path className="sparkline-svg" d={featuredTool.growth} />
                        </svg>
                      </div>
                    </div>
                    <button onClick={() => { if (setActiveCategory) setActiveCategory('Tool Detail'); }} className="bg-primary hover:bg-primary-container text-on-primary font-label-mono text-label-mono px-6 py-2 rounded-lg flex items-center gap-2 transition-all">
                      Launch Tool <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {regularTools.map(tool => (
              <div key={tool.id} className={`group bg-surface-container-low border border-border-subtle rounded-xl p-6 hover:bg-surface-container-high transition-all duration-300 ${featuredTool ? 'md:col-span-4' : 'md:col-span-6'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-background border border-border-subtle flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{tool.icon}</span>
                  </div>
                  <h3 className="font-body-base font-semibold text-on-surface">{tool.name}</h3>
                </div>
                <p className="font-body-muted text-body-muted text-muted mb-4 h-12 overflow-hidden">{tool.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map(t => (
                    <span key={t} className="font-label-metadata text-label-metadata bg-surface-variant text-muted px-2 py-0.5 rounded-sm">{t}</span>
                  ))}
                </div>
                <div>
                  <span className="font-label-metadata text-label-metadata text-muted block mb-2 uppercase">Usage / Growth</span>
                  <div className="w-full h-8">
                    <svg className="w-full h-full" viewBox="0 0 100 20">
                      <path className="sparkline-svg" d={tool.growth} />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            {filteredTools.length === 0 && (
              <div className="md:col-span-12 py-20 text-center text-on-surface-variant font-body-base">
                <span className="material-symbols-outlined text-muted text-5xl mb-4 block">search_off</span>
                No tools matching your selection.
              </div>
            )}

            {/*  Row 3: Image-based Feature Card  */}
            <div className="md:col-span-12 group bg-surface-container-low border border-border-subtle rounded-xl overflow-hidden flex flex-col md:flex-row h-72 hover:border-primary transition-all duration-300">
<div className="md:w-1/3 relative h-full bg-background overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" data-alt="A highly detailed close-up of a futuristic neural network core glowing with emerald green filaments of light. The structure is composed of geometric crystal-like nodes pulsing with data energy. Deep shadows and high-contrast dark-mode aesthetics dominate the scene, creating a sense of immense processing power and technical complexity in a minimalist dark workspace environment." src="https://lh3.googleusercontent.com/aida/AP1WRLsIlkX44tP9nzgLvbwxEoMzONXi7aUXEIiGl_kdSkAPqLhnXy1QrabHrHI680niAy_TMEpv87pOhSukQcZkMu33e8Na6WmRoPyhfbJoo3SnUz3dLYwqyqoXBRV4peHhIRgELTLnwJxHORwA99CBkbMBHUKCLylZsw3jCjuoxIcQa-aJmLZNLChrmr9_Iyp5CUkVTCHCtOf4-ctQNmjFmqEXIF_7xGYxwV4kBO_OcV6043FUgOlzIt1jCE4"/>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-low md:to-surface-container-low"></div>
</div>
<div className="md:w-2/3 p-8 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 bg-primary text-on-primary text-[10px] font-label-mono uppercase rounded">Featured Release</span>
</div>
<h3 className="font-display-hero-mobile text-display-hero-mobile text-on-surface mb-4">OmniModel Unified Framework</h3>
<p className="font-body-base text-body-base text-muted max-w-xl mb-6">The first universal wrapper for orchestration across GPT-4, Claude 3, and Gemini. Automatically switches models based on latency and cost optimization thresholds.</p>
<div className="flex items-center gap-8">
<div className="flex flex-col">
<span className="font-label-mono text-[18px] text-primary">94k+</span>
<span className="font-label-metadata text-label-metadata text-muted">Weekly Pulls</span>
</div>
<div className="flex flex-col">
<span className="font-label-mono text-[18px] text-primary">12ms</span>
<span className="font-label-metadata text-label-metadata text-muted">Avg. Latency</span>
</div>
<div className="flex flex-col">
<span className="font-label-mono text-[18px] text-primary">MIT</span>
<span className="font-label-metadata text-label-metadata text-muted">Licensing</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Footer Activity Feed (Atmospheric)  */}
<footer className="mt-auto border-t border-outline-variant bg-surface-container-lowest py-4 px-grid-margin">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse"></span>
<span className="font-label-metadata text-label-metadata text-muted uppercase">System Status: Optimal</span>
</div>
<div className="h-4 w-[1px] bg-border-subtle"></div>
<div className="flex items-center gap-2">
<span className="font-label-metadata text-label-metadata text-muted uppercase">Global Registry:</span>
<span className="font-label-mono text-label-mono text-primary">v2.4.9-Stable</span>
</div>
</div>
<div className="flex gap-4">
<span className="font-label-metadata text-label-metadata text-muted">© 2024 Kinetic Noir</span>
</div>
</div>
</footer>

    </>
  );
}
