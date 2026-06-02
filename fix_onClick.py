import glob
import re

for filename in glob.glob('src/components/*.tsx'):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to replace onClick="something()" with onClick={() => {something()}}
    # Or simply remove the string-based onClick to avoid undefined variables
    # Since these are dummy functions like switchTab('profile'), let's just make them empty functions
    new_content = re.sub(r'onClick="[^"]+"', r'onClick={() => {}}', content)
    
    # Also handle the strokeLinecap and other things just in case
    # In Settings.tsx, there might be stroke-width instead of strokeWidth if my previous script missed something
    
    if new_content != content:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filename}")
