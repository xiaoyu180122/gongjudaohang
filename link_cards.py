import glob
import re

files = [
    'src/components/Dashboard.tsx',
    'src/components/AiTools.tsx',
    'src/components/DevTools.tsx',
    'src/components/ProductivityTools.tsx'
]

for filename in files:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # In Stitch output, tool cards often have 'group' and 'cursor-pointer'
        # Let's replace: <div className="group ... cursor-pointer ..."
        # with: <div onClick={() => setActiveCategory?.('Tool Detail')} className="group ... cursor-pointer ..."
        
        # Use regex to find div tags with className containing 'group' and 'cursor-pointer' that don't already have onClick
        def inject_onclick(match):
            div_start = match.group(0)
            if 'onClick=' in div_start:
                return div_start
            return div_start.replace('<div ', '<div onClick={() => setActiveCategory?.(\'Tool Detail\')} ')
        
        new_content = re.sub(r'<div [^>]*className="[^"]*group[^"]*cursor-pointer[^"]*"[^>]*>', inject_onclick, content)
        
        if new_content != content:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated Tool Cards in {filename}")
    except Exception as e:
        print(f"Error in {filename}: {e}")
