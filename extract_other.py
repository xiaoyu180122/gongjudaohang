import re

def html_to_jsx(html):
    jsx = html.replace('{', '&#123;').replace('}', '&#125;')
    jsx = jsx.replace('class=', 'className=')
    jsx = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', jsx)
    jsx = re.sub(r'<path([^>]*?)(?<!/)>', r'<path\1 />', jsx)
    
    def style_replacer(match):
        style_str = match.group(1)
        style_obj = []
        for prop in style_str.split(';'):
            if not prop.strip(): continue
            parts = prop.split(':', 1)
            if len(parts) == 2:
                key = parts[0].strip()
                val = parts[1].strip()
                key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
                val = val.replace("'", '"')
                style_obj.append(f"{key}: '{val}'")
        return 'style={{' + ', '.join(style_obj) + '}}'
        
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    jsx = jsx.replace('onclick=', 'onClick=')
    jsx = jsx.replace('stroke-linecap', 'strokeLinecap')
    jsx = jsx.replace('stroke-linejoin', 'strokeLinejoin')
    jsx = jsx.replace('stroke-width', 'strokeWidth')
    jsx = jsx.replace('viewbox', 'viewBox')
    jsx = jsx.replace('xmlns:xlink', 'xmlnsXlink')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)
    # Ensure any stray </path> or </img> or </input> is removed
    jsx = jsx.replace('</path>', '')
    jsx = jsx.replace('</img>', '')
    jsx = jsx.replace('</input>', '')
    return jsx

files = {
    'analytics.html': 'Analytics',
    'submit_tool.html': 'SubmitTool',
    'settings.html': 'Settings',
    'documentation.html': 'Documentation'
}

for filename, comp_name in files.items():
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract everything inside <main>
        match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
        if match:
            inner_html = match.group(1)
            jsx_content = html_to_jsx(inner_html)
            
            tsx = f"""import React from 'react';

export default function {comp_name}() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
            with open(f'src/components/{comp_name}.tsx', 'w', encoding='utf-8') as out:
                out.write(tsx)
            print(f"Generated {comp_name}.tsx")
        else:
            print(f"Failed to find <main> in {filename}")
    except Exception as e:
        print(f"Error reading {filename}: {e}")
