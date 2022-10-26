#!/usr/bin/env python
import sys
scpt=sys.argv[0]; narg=len(sys.argv)
fi=sys.argv[1] if narg>1 else "slide.md"; print(f"arg1: fi {fi}")
fo=sys.argv[2] if narg>2 else "README.md"; print(f"arg2: fo {fo}")

ifwt=True # if write
with open(fi, 'r') as fr:
  with open(fo, 'w') as fw:
    for ln in fr:
      l=ln.strip()
      if l.endswith("style>"):
        ifwt=not ifwt # revert write status
      else:
        if ifwt:
          if l.startswith("<img"): # img to markdown
            ls=l.split("\"") # line sections
            for si,s in enumerate(ls):
              if s.endswith("src="):
                fw.write(f"![]({ls[si+1]})\n")
          elif len(l)>2 and l[0]=='<' and l[-1]=='>':
            pass # omit other
          else:
            fw.write(f"{ln}")
