import glob
import re

files = glob.glob('src/components/*.tsx') + ['src/app/page.tsx']

print("Analyzing unlinked buttons and links...")

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Find buttons without onClick or type="submit" in forms
        buttons = re.findall(r'<button([^>]*)>', content)
        for b in buttons:
            if 'onClick' not in b and 'type="submit"' not in b:
                print(f"[{filepath}] Unlinked button: <button{b}>")
                
        # Find links with href="#" or empty href
        links = re.findall(r'<a([^>]*)>', content)
        for l in links:
            if 'href="#"' in l or 'href=""' in l or 'href' not in l:
                if 'onClick' not in l:
                    print(f"[{filepath}] Unlinked anchor: <a{l}>")
                    
        # Find divs with cursor-pointer but no onClick
        divs = re.findall(r'<div([^>]*)>', content)
        for d in divs:
            if 'cursor-pointer' in d and 'onClick' not in d:
                print(f"[{filepath}] Unlinked cursor-pointer div: <div{d}>")
                
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
