import glob
import re

# 1. Update page.tsx for Search
page_file = 'src/app/page.tsx'
with open(page_file, 'r', encoding='utf-8') as f:
    page_content = f.read()

page_content = page_content.replace(
    '<input type="text" placeholder="Search components, tools, docs... (Cmd+K)" className="w-full bg-[#1A1A1A] text-white pl-10 pr-4 py-2 rounded-lg border border-[#333333] focus:outline-none focus:border-[#4B83FF] transition-colors" />',
    '<input type="text" placeholder="Search components, tools, docs... (Cmd+K)" className="w-full bg-[#1A1A1A] text-white pl-10 pr-4 py-2 rounded-lg border border-[#333333] focus:outline-none focus:border-[#4B83FF] transition-colors" onKeyDown={(e) => { if (e.key === \'Enter\') setActiveCategory(\'Search Results\'); }} />'
)

# Fix API management button in Settings
settings_file = 'src/components/Settings.tsx'
try:
    with open(settings_file, 'r', encoding='utf-8') as f:
        settings_content = f.read()
    
    # We look for something like 'API Keys' or 'API Management'
    settings_content = settings_content.replace(
        '>API Keys<',
        ' onClick={() => setActiveCategory?.(\'API Management\')} className="cursor-pointer">API Keys<'
    )
    with open(settings_file, 'w', encoding='utf-8') as f:
        f.write(settings_content)
except Exception as e:
    pass

# Fix Analytics Report in Analytics
analytics_file = 'src/components/Analytics.tsx'
try:
    with open(analytics_file, 'r', encoding='utf-8') as f:
        analytics_content = f.read()
    
    analytics_content = analytics_content.replace(
        'Generate Report',
        'Generate Report</button><button className="hidden" onClick={() => setActiveCategory?.(\'Analytics Report\')} id="reportBtn">Generate Report'
    )
    # Just generic replace: find <button ... Generate Report
    analytics_content = re.sub(r'(<button[^>]*?)>([^<]*Generate Report[^<]*)</button>', r'\1 onClick={() => setActiveCategory?.(\'Analytics Report\')}>\2</button>', analytics_content)
    with open(analytics_file, 'w', encoding='utf-8') as f:
        f.write(analytics_content)
except Exception as e:
    pass

with open(page_file, 'w', encoding='utf-8') as f:
    f.write(page_content)
