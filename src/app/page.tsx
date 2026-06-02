"use client";
import React, { useState, useEffect } from 'react';
import AiTools from '@/components/AiTools';
import DevTools from '@/components/DevTools';
import ProductivityTools from '@/components/ProductivityTools';
import Dashboard from '@/components/Dashboard';
import Analytics from '@/components/Analytics';
import SubmitTool from '@/components/SubmitTool';
import Settings from '@/components/Settings';
import Documentation from '@/components/Documentation';

import AnalyticsReport from '@/components/AnalyticsReport';
import ApiManagement from '@/components/ApiManagement';
import SearchResults from '@/components/SearchResults';
import ToolDetail from '@/components/ToolDetail';

export default function KineticNoirPage() {
  const [activeCategory, setActiveCategory] = useState('Home');
  
  const mainNav = [
    { name: 'Home', icon: 'dashboard', label: '首页' },
    { name: 'AI Tools', icon: 'smart_toy', label: 'AI Tools' },
    { name: 'Dev Tools', icon: 'terminal', label: 'Dev Tools' },
    { name: 'Productivity', icon: 'bolt', label: 'Productivity' }
  ];

  const renderComponent = () => {
    switch (activeCategory) {
      case 'AI Tools': return <AiTools setActiveCategory={setActiveCategory} />;
      case 'Dev Tools': return <DevTools setActiveCategory={setActiveCategory} />;
      case 'Productivity': return <ProductivityTools setActiveCategory={setActiveCategory} />;
      case 'Analytics': return <Analytics setActiveCategory={setActiveCategory} />;
      case 'Submit Tool': return <SubmitTool setActiveCategory={setActiveCategory} />;
      case 'Settings': return <Settings setActiveCategory={setActiveCategory} />;
      case 'Documentation': return <Documentation setActiveCategory={setActiveCategory} />;
      case 'Analytics Report': return <AnalyticsReport setActiveCategory={setActiveCategory} />;
      case 'API Management': return <ApiManagement setActiveCategory={setActiveCategory} />;
      case 'Search Results': return <SearchResults setActiveCategory={setActiveCategory} />;
      case 'Tool Detail': return <ToolDetail setActiveCategory={setActiveCategory} />;
      case 'Home':
      default:
        return <Dashboard setActiveCategory={setActiveCategory} />;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Include Google Material Symbols */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      {/*  SideNavBar  */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant/30 bg-surface flex flex-col py-8 z-[60] hidden md:flex">
        <div className="px-8 mb-12">
          <h1 className="font-headline-section text-headline-section text-primary uppercase tracking-tighter">Kinetic Noir</h1>
          <p className="text-[10px] font-label-mono text-on-surface-variant uppercase tracking-[0.2em]">Technical Directory</p>
        </div>
        
        <nav className="flex-1 space-y-1">
          <div className="px-6 py-2 text-[10px] font-label-mono text-muted uppercase tracking-widest opacity-50 mb-2">Main Categories</div>
          {mainNav.map((cat) => (
            <button 
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`w-full flex items-center gap-3 py-3 px-4 transition-all group relative ${
                activeCategory === cat.name 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
              }`}
            >
              {activeCategory === cat.name && (
                <>
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-primary active-glow"></div>
                  <div className="absolute inset-0 glow-accent opacity-100"></div>
                </>
              )}
              <span className="material-symbols-outlined relative z-10" data-icon={cat.icon}>{cat.icon}</span>
              <span className={`font-body-base text-body-base relative z-10 ${activeCategory === cat.name ? 'font-medium' : ''}`}>{cat.name}</span>
            </button>
          ))}
        </nav>
        
        <div className="mt-auto px-4 space-y-1">
          <button 
            onClick={() => setActiveCategory('Settings')}
            className={`w-full flex items-center gap-3 py-3 px-4 transition-all relative ${activeCategory === 'Settings' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'}`}
          >
            {activeCategory === 'Settings' && <div className="absolute left-0 top-0 h-full w-[3px] bg-primary"></div>}
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-body-base text-body-base">Settings</span>
          </button>
          <button 
            onClick={() => setActiveCategory('Documentation')}
            className={`w-full flex items-center gap-3 py-3 px-4 transition-all relative ${activeCategory === 'Documentation' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'}`}
          >
            {activeCategory === 'Documentation' && <div className="absolute left-0 top-0 h-full w-[3px] bg-primary"></div>}
            <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
            <span className="font-body-base text-body-base">Documentation</span>
          </button>
          <div className="pt-6 flex items-center gap-3 px-4 border-t border-outline-variant/30 mt-4 opacity-90 cursor-pointer" onClick={() => setActiveCategory('Settings')}>
            <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/50" src="https://lh3.googleusercontent.com/aida/AP1WRLvj6FVBv_56igSzSrpFjusBpXlbeYlZi0qG2j8UiRajhqBkmFJTEPm4hudwaXZCQviIesujU6-EusreyDJ9KlrUbNFPUp_ysWDMq1zC1vVLjibb7FQX5M1mGRK5JEpV88EpeSuv1Trzp7ablSHPfCk220PheludCubpt3hA5DWaqIFywZW0BdVCZExDSlV1RSvRkBcgjw842gjM9NY5obVck7lbKc06FK1mL3arhK7YCaD2pyfZghuDjA" />
            <div className="overflow-hidden text-left">
              <p className="font-body-base text-body-base truncate font-medium">Dev_Operator</p>
              <p className="text-[9px] font-label-mono text-primary/80 uppercase">Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/*  TopNavBar  */}
      <header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] h-16 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/20 z-50 flex justify-between items-center px-8 transition-colors duration-300">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-xl group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm group-focus-within:text-primary transition-colors" data-icon="search">search</span>
            <input className="w-full bg-surface-container-lowest/50 border border-outline-variant/30 rounded py-1.5 pl-10 pr-4 font-body-base text-body-base focus:outline-none focus:border-primary/50 focus:bg-surface-container-lowest transition-all" placeholder="Search tools (Press 'Cmd + K')..." type="text"/>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 opacity-30">
              <span className="px-1.5 py-0.5 border border-outline-variant rounded text-[10px] font-label-mono">⌘</span>
              <span className="px-1.5 py-0.5 border border-outline-variant rounded text-[10px] font-label-mono">K</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => setActiveCategory('Analytics')} className={`relative transition-colors ${activeCategory === 'Analytics' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
            <span className="material-symbols-outlined" data-icon="insights">insights</span>
          </button>
          <button onClick={() => setActiveCategory('Settings')} className={`relative transition-colors ${activeCategory === 'Settings' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
            <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          </button>
        </div>
      </header>
      
      {/*  Main Content Dynamic Rendering  */}
      <main className="md:ml-64 pt-16 min-h-screen">
        {renderComponent()}
      </main>
      
      {/*  Visual Overlays  */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[100]" id="noise-overlay" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida/AP1WRLt1ppWUIgx5aRArGcHYgplUVGoXQmqPx4v3qF7pMSXOExhmZ_oc5i3Tl1OSK6kHau5R2MEvBT9gPS-Db2mwU6gS7Pu0_yjVABo02TOW8uNkxVSVhP49Yb3n4FU-dQWgLQb2lGcRAub-DS_RuDh0eH3kJ9xmZ2Wx8kayN2CdoASc7RAYYOcF5leULbGCoCFhpPtJY9EZ81h0HSGq2llMGJlVVH4LNhNLfgPc9cfwzBZhdRIpQUT_ap26geI")'}}></div>
    </>
  );
}
