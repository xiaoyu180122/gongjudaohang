import urllib.request
import re
import os

urls = {
    'api_management.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MzQwMzZmYzdhNzgwNzc5YmI2ZmMwMzY0NWY0EgsSBxDe3ujiihIYAZIBIwoKcHJvamVjdF9pZBIVQhM0ODM4Mzc3Mjg0MDEwNjU4MjU5&filename=&opi=89354086',
    'search_results.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MzQwMzZlYTdkMmIwOTI1YzJmYWMwMDQwMjliEgsSBxDe3ujiihIYAZIBIwoKcHJvamVjdF9pZBIVQhM0ODM4Mzc3Mjg0MDEwNjU4MjU5&filename=&opi=89354086',
    'analytics_report.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MzQwMzc0ZWU4NjEwMzM4NDlmMzI5MzhmOGFiEgsSBxDe3ujiihIYAZIBIwoKcHJvamVjdF9pZBIVQhM0ODM4Mzc3Mjg0MDEwNjU4MjU5&filename=&opi=89354086',
    'tool_detail.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MzQwMzczZWViODYwODlhZjcyYzM2MjkyMjliEgsSBxDe3ujiihIYAZIBIwoKcHJvamVjdF9pZBIVQhM0ODM4Mzc3Mjg0MDEwNjU4MjU5&filename=&opi=89354086'
}

for filename, url in urls.items():
    print(f"Downloading {filename}...")
    urllib.request.urlretrieve(url, filename)

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
    
    # Fix inline string event handlers
    jsx = re.sub(r'onClick="[^"]+"', r'onClick={() => {}}', jsx)
    # Fix boolean attributes
    jsx = re.sub(r'(checked|required|disabled|readonly)=""', r'\1', jsx)
    # Fix string integer attributes like rows="4" -> rows={4}
    jsx = re.sub(r'rows="(\d+)"', r'rows={\1}', jsx)

    # Ensure any stray closing tags for self-closing elements are removed
    jsx = jsx.replace('</path>', '')
    jsx = jsx.replace('</img>', '')
    jsx = jsx.replace('</input>', '')
    return jsx

files = {
    'api_management.html': 'ApiManagement',
    'search_results.html': 'SearchResults',
    'analytics_report.html': 'AnalyticsReport',
    'tool_detail.html': 'ToolDetail'
}

for filename, comp_name in files.items():
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
        if match:
            inner_html = match.group(1)
            jsx_content = html_to_jsx(inner_html)
            
            # Use specific active category setter if passed, or just ignore
            tsx = f"""import React from 'react';

export default function {comp_name}({{ setActiveCategory }}: {{ setActiveCategory?: (c: string) => void }}) {{
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
        print(f"Error processing {filename}: {e}")
