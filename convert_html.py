import re

def html_to_jsx(html):
    # Basic class to className
    jsx = html.replace('class=', 'className=')
    
    # Self-closing tags
    jsx = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', jsx)
    jsx = re.sub(r'<path([^>]*?)(?<!/)>', r'<path\1 />', jsx)
    
    # Inline styles to React style objects
    # Note: Very simple conversion, might need manual tweaking if complex
    def style_replacer(match):
        style_str = match.group(1)
        # e.g., background-image: url('...'); height: 85%;
        style_obj = []
        for prop in style_str.split(';'):
            if not prop.strip(): continue
            parts = prop.split(':', 1)
            if len(parts) == 2:
                key = parts[0].strip()
                val = parts[1].strip()
                # camelCase key
                key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
                # handle url('...') which is valid in JS string
                val = val.replace("'", '"')
                style_obj.append(f"{key}: '{val}'")
        return 'style={{' + ', '.join(style_obj) + '}}'
        
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    
    # onclick to onClick
    jsx = jsx.replace('onclick=', 'onClick=')
    # stroke-linecap etc
    jsx = jsx.replace('stroke-linecap', 'strokeLinecap')
    jsx = jsx.replace('stroke-linejoin', 'strokeLinejoin')
    jsx = jsx.replace('stroke-width', 'strokeWidth')
    jsx = jsx.replace('viewbox', 'viewBox')
    jsx = jsx.replace('xmlns:xlink', 'xmlnsXlink')
    
    # Comments: <!-- ... --> to {/* ... */}
    jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)

    return jsx

with open('stitch_page.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract body
body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
if body_match:
    body_content = body_match.group(1)
    
    # Remove the <script> block at the end
    body_content = re.sub(r'<script>.*?</script>', '', body_content, flags=re.DOTALL)
    
    jsx_content = html_to_jsx(body_content)
    
    # Add material symbols script or we can just use the provided font in layout
    # Wrap in standard page component
    page_tsx = f"""\"\"\"use client\"\"\";
import React, {{{{ useState, useEffect }}}} from 'react';

export default function KineticNoirPage() {{
  useEffect(() => {{
    const handleKeyDown = (e: KeyboardEvent) => {{
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {{
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }}
    }};
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }}, []);

  return (
    <>
      {{/* Include Google Material Symbols */}}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      {{/* The design from Stitch */}}
      {jsx_content}
    </>
  );
}}
"""
    # Replace triple quotes with single quotes for the output
    page_tsx = page_tsx.replace('\"\"\"use client\"\"\"', '"use client"')
    
    with open('src/app/page.tsx', 'w', encoding='utf-8') as out:
        out.write(page_tsx)
    print("Successfully converted to page.tsx")
else:
    print("Failed to find body content.")
