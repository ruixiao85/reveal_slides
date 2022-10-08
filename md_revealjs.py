#!/usr/bin/env python
import sys
import os
scpt=sys.argv[0]; narg=len(sys.argv)
fi=sys.argv[1] if narg>1 else "README.md"; print(f"arg1: file input [{fi}]")
fb="".join(os.path.splitext(fi)[0:-1])
fo=sys.argv[2] if narg>2 else fb+".html"; print(f"arg2: file output [{fo}]")
hs=int(sys.argv[3]) if narg>3 else 1; print(f"arg3: heading split [{hs}], 0-nosplit, 1-split@heading1")

scpt_dir=os.path.dirname(scpt)
print(f"dirname -> [{scpt_dir}]")

if hs<1:
  os.system(f"bash {scpt_dir}/md_revealjs.sh {fi} {fo}")
  exit()


sec_sep="".join(["\n"]+["#"]*hs+[" "])
print(f"[{sec_sep}] <- sec_sep")

def valid_path(s):
  return "".join(i for i in s if i not in "\/:*?<>| &")

ls=[]; lf=[]; pn=""; pi=1

with open(fi,'r') as fr:
  cont="\n"+fr.read()

ha=["#","##","###","####","#####","######"] # accepted header

for si,sc in enumerate(cont.split(sec_sep)):
  if si!=0:
    sv=valid_path(sc.split("\n")[0])
    fnb=f"{fb}_{si}_{sv}"
    print(fnb)
    with open(fnb+".md", 'w') as fw:
      fw.write(sec_sep)
      for s in sc.split("\n"):
        ss=s.lstrip()
        if ss.split(" ")[0] in ha:
          fw.write(f"{ss[hs:]}\n")
        else:
          fw.write(f"{ss}\n")
    os.system(f"bash {scpt_dir}/md_revealjs.sh {fnb}.md {fnb}.html")


