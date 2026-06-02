import glob
import re

for filename in glob.glob('src/components/*.tsx'):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = re.sub(r'(checked|required|disabled|readonly)=""', r'\1', content)
    
    if new_content != content:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filename}")
