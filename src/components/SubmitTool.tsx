import React, { useState } from 'react';

export default function SubmitTool({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('AI Tools');
  const [github, setGithub] = useState('');
  const [description, setDescription] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState(0); 
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSaveDraft = () => {
    localStorage.setItem('noir_draft_tool', JSON.stringify({ name, category, github, description }));
    setToastMessage('Draft Saved Successfully!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !github) {
      alert('Please fill out the Tool Name and Github URL.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStep(1);
    
    setTimeout(() => {
      setSubmitStep(2);
      setTimeout(() => {
        setSubmitStep(3);
      }, 1000);
    }, 1000);
  };

  const resetForm = () => {
    setName('');
    setCategory('AI Tools');
    setGithub('');
    setDescription('');
    setIsSubmitting(false);
    setSubmitStep(0);
  };
  return (
    <>
      
<div className="max-w-container-max mx-auto relative">
      {toastMessage && (
        <div className="fixed top-20 right-8 bg-emerald-500 text-background px-6 py-3 rounded-lg shadow-lg font-label-mono text-sm z-50 animate-bounce">
          {toastMessage}
        </div>
      )}
{/*  Breadcrumbs  */}
<div className="flex items-center space-x-2 mb-8 font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
<a className="hover:text-primary" href="#" onClick={(e) => { e.preventDefault(); if (setActiveCategory) setActiveCategory("Home"); }}>Directory</a>
<span className="material-symbols-outlined text-[10px]" data-icon="chevron_right">chevron_right</span>
<span className="text-primary">Contribute Tool</span>
</div>
{/*  Header Section  */}
<div className="mb-12">
<h2 className="font-display-hero text-display-hero mb-4">Contribute to the Index</h2>
<p className="text-on-surface-variant max-w-2xl font-body-base text-body-base">
                    Kinetic Noir is built by the community. Share high-performance technical tools, frameworks, and assets that define the modern developer stack.
                </p>
</div>
{/*  Bento Layout Content  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-bento-gap">
{/*  Form Column  */}
<div className="lg:col-span-7 space-y-bento-gap">
<section className="bg-surface-container-low border border-border-subtle p-6 rounded-lg">
<div className="mb-8 flex items-center justify-between">
<h3 className="font-headline-section text-headline-section">01. Metadata</h3>
<span className="font-label-mono text-label-mono text-primary px-2 py-1 bg-primary/10 rounded">Step 1 of 3</span>
</div>
{submitStep === 3 ? (
                  <div className="text-center py-10 space-y-6">
                    <span className="material-symbols-outlined text-emerald-500 text-6xl animate-pulse">check_circle</span>
                    <div>
                      <h4 className="font-headline-section text-on-surface">NODE REGISTRATION SUCCESSFUL</h4>
                      <p className="text-muted font-body-base mt-2">The model ingestion pipeline has completed. "{name}" is now in the queue. Position: #03.</p>
                    </div>
                    <button onClick={resetForm} className="px-6 py-2.5 bg-primary text-background font-label-mono text-xs rounded hover:opacity-90 transition-opacity">
                      REGISTER ANOTHER NODE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" id="submit-tool-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-mono text-label-mono text-on-surface-variant block">TOOL NAME</label>
<input className="w-full bg-surface-dim border border-border-subtle focus:border-primary focus:ring-0 transition-colors py-3 px-4 text-on-surface font-body-base" id="input-name" placeholder="e.g. NoirGraph" type="text" value={name} onChange={e => setName(e.target.value)}/>
</div>
<div className="space-y-2">
<label className="font-label-mono text-label-mono text-on-surface-variant block">CATEGORY</label>
<select className="w-full bg-surface-dim border border-border-subtle focus:border-primary focus:ring-0 transition-colors py-3 px-4 text-on-surface font-body-base appearance-none" id="input-category" value={category} onChange={e => setCategory(e.target.value)}>
<option value="AI Tools">AI Tools</option>
<option value="Dev Tools">Dev Tools</option>
<option value="Design">Design</option>
<option value="Productivity">Productivity</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="font-label-mono text-label-mono text-on-surface-variant block">GITHUB REPOSITORY URL</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="link">link</span>
<input className="w-full bg-surface-dim border border-border-subtle focus:border-primary focus:ring-0 transition-colors py-3 pl-10 pr-4 text-on-surface font-body-base" id="input-github" placeholder="https://github.com/username/repository" type="url" value={github} onChange={e => setGithub(e.target.value)}/>
</div>
</div>
<div className="space-y-2">
<label className="font-label-mono text-label-mono text-on-surface-variant block">TECHNICAL DESCRIPTION</label>
<textarea className="w-full bg-surface-dim border border-border-subtle focus:border-primary focus:ring-0 transition-colors py-3 px-4 text-on-surface font-body-base resize-none" id="input-desc" placeholder="Briefly describe the technical utility and stack..." rows={4} value={description} onChange={e => setDescription(e.target.value)}></textarea>
</div>
<div className="pt-4 flex items-center justify-between">
<button onClick={handleSaveDraft} className="text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors flex items-center space-x-2" type="button">
<span className="material-symbols-outlined text-sm" data-icon="save">save</span>
<span>SAVE AS DRAFT</span>
</button>
<button disabled={isSubmitting} className="bg-primary text-surface py-3 px-10 font-label-mono text-label-mono font-bold hover:opacity-90 transition-opacity flex items-center space-x-2 disabled:opacity-50" type="submit">
                          <span>
                            {submitStep === 0 && 'SUBMIT TOOL'}
                            {submitStep === 1 && 'VALIDATING GITHUB REPO...'}
                            {submitStep === 2 && 'INGESTING TO NODE INDEX...'}
                            {submitStep === 3 && 'SUBMITTED!'}
                          </span>
                          <span className={`material-symbols-outlined text-sm ${submitStep > 0 && submitStep < 3 ? 'animate-spin' : ''}`}>
                            {submitStep === 3 ? 'check_circle' : 'rocket_launch'}
                          </span>
                        </button>
</div>
</form>
                )}
</section>
{/*  Guidelines Card  */}
<div className="bg-surface-container-low border border-border-subtle p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col space-y-2">
<span className="material-symbols-outlined text-primary" data-icon="verified_user">verified_user</span>
<h4 className="font-label-mono text-label-mono text-on-surface">Verified Identity</h4>
<p className="font-body-muted text-body-muted text-on-surface-variant">All submissions require a verified GitHub account linked to the repository.</p>
</div>
<div className="flex flex-col space-y-2">
<span className="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
<h4 className="font-label-mono text-label-mono text-on-surface">Technical Stack</h4>
<p className="font-body-muted text-body-muted text-on-surface-variant">Prioritize tools with high performance and efficient memory management.</p>
</div>
<div className="flex flex-col space-y-2">
<span className="material-symbols-outlined text-primary" data-icon="copyright">copyright</span>
<h4 className="font-label-mono text-label-mono text-on-surface">Open Source</h4>
<p className="font-body-muted text-body-muted text-on-surface-variant">We only index tools that follow MIT, Apache, or similar permissive licenses.</p>
</div>
</div>
</div>
{/*  Preview Column  */}
<div className="lg:col-span-5 space-y-bento-gap">
<div className="sticky top-24">
<div className="mb-4 flex items-center justify-between">
<h3 className="font-label-mono text-label-mono text-on-surface-variant tracking-widest uppercase">Live Preview</h3>
<div className="flex space-x-1">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
</div>
</div>
{/*  Card Preview  */}
<div className="bg-surface-container border border-border-subtle rounded-lg overflow-hidden group hover:border-primary/50 transition-all duration-300">
<div className="h-48 bg-surface-container-highest relative overflow-hidden">
<img alt="Preview visual" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="A macro cinematic shot of a futuristic server room with emerald glowing data lines pulsing through dark obsidian panels. The lighting is dramatic and moody, with high contrast between deep shadows and sharp, neon-green highlights. The style is hyper-technical and minimalist, conveying advanced computational power and sleek, dark-tech industrial design." id="preview-img" src="https://lh3.googleusercontent.com/aida/AP1WRLsdI52kslwPE8OOH_3njfy2qiubTtyHpuD-wcR2pXPrMNorzW4sDK8wvj_kOJvON5CaZalJCousciy0C1cByKDwGkrXzFHCWeLcvY2fDdNTNgTnP4nMBQpTyuu5PNYlRmRmKDpswbXDksLQ_K7twuKyjtzPaC_cc_2uwS-RdQHay56ezAIWEagKS29XzbPIUCcUXZ0DSOs-zP_oVIGp0mGA-Ooqmv2h1DrjvxpeioyLqscrdzywwOHlykU"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="bg-surface-dim/80 backdrop-blur-sm border border-border-subtle px-3 py-1 rounded-full font-label-mono text-label-metadata text-on-surface" id="preview-tag">{category.toUpperCase()}</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-headline-section text-headline-section text-on-surface mb-1" id="preview-name">{name || "Tool Name"}</h4>
<p className="font-label-mono text-label-metadata text-primary">v1.0.4-alpha</p>
</div>
<div className="flex space-x-2">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="star">star</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="share">share</span>
</div>
</div>
<p className="font-body-base text-body-base text-on-surface-variant line-clamp-3 mb-6" id="preview-description">{description || "The technical description you provide will appear here. This preview updates in real-time to show how your tool will be presented to the technical community."}
                                </p>
<div className="flex items-center justify-between pt-4 border-t border-border-subtle">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-surface bg-surface-container-highest"></div>
<div className="w-6 h-6 rounded-full border border-surface bg-primary/20 flex items-center justify-center text-[10px] font-bold">+12</div>
</div>
<button onClick={() => github ? window.open(github, '_blank') : alert('Please provide a repository URL first.')} className="font-label-mono text-label-mono text-primary flex items-center space-x-1 group/btn">
<span>VIEW REPO</span>
<span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Info Card  */}
<div className="mt-bento-gap bg-surface-dim border border-primary/20 p-6 rounded-lg relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl" data-icon="info">info</span>
</div>
<h4 className="font-label-mono text-label-mono text-primary mb-3">CURATION POLICY</h4>
<p className="font-body-muted text-body-muted text-on-surface-variant leading-relaxed">
                                Our editorial team reviews submissions within 24-48 hours. Tools are ranked based on GitHub activity, code quality, and community utility. High-performance tools may be featured in our weekly "Technical Pulse" newsletter.
                            </p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
