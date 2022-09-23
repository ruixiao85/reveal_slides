% Title
% Name
% yyyy/mm/dd

# Introduction

---

This work incorporated my personal preference and removed the need to serve markdown indirectly. Thanks to [theno](https://github.com/theno/revealjs_template)'s selection of tools and [jgm's pandoc](https://github.com/jgm/pandoc) for converting markdown to html.

# How to use it in Linux

---

### Download the release or Clone the repository

```sh
# download the latest release (recommended)
curl -s https://api.github.com/repos/ruixiao85/reveal_slides/releases/latest \
| grep "tarball_url" \
| cut -d \" -f 4 \
| xargs wget -qO - | tar zxvf -
```
```sh
# or clone the repo
git clone --branch main https://github.com/ruixiao85/reveal_slides.git
```

---

### install_pandoc.sh

```sh
apt update && apt intall pandoc # sudo if needed
```

---

### md_revealjs.sh [input markdown] [output html]

```sh
#!/usr/bin/env bash
echo "self, scpt=${0}"; scpt=${0}
FI=${1:-README.md}; echo "arg1, fille_input=$FI"
FO=${2:-${FI%.*}.html}; echo "arg2, file_output=$FO"

cat revealjs_before.html > ${FO}
pandoc -f markdown -t revealjs ${FI} >> ${FO}
cat revealjs_after.html >> ${FO}
```
You can pass other markdown files but default to README.md (this file) and output to README.html.


# Check the results

---

You should be able to directly open the output html in any browser. The subfolders [css, js, lib, plugin] are required for the html file to function properly.

"#" heading 1 may require the entire slide without any other content for the verticle movement to work (2-level hierachy).

Contact [Rui](mailto:ruixiao85@gmail.com) for any questions 😊
