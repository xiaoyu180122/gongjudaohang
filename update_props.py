import glob
import re

for filename in glob.glob('src/components/*.tsx'):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if it already has setActiveCategory
    if 'setActiveCategory' not in content.split(') {')[0]:
        # Replace `export default function ComponentName() {`
        # with `export default function ComponentName({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {`
        new_content = re.sub(r'export default function ([A-Za-z0-9_]+)\(\) \{', r'export default function \1({ setActiveCategory }: { setActiveCategory?: (c: string) => void }) {', content)
        
        if new_content != content:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
