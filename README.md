
# About the project

---

> 1.0 This work incorporated my personal preference and removed the need to serve markdown indirectly. Also relatively convenient and portable.

> 1.1 Now the repo is serving as a subfolder, which leaves your work directory (markdown and html) cleaner.

Thanks to [theno](https://github.com/theno/revealjs_template)'s selection of tools and [jgm's pandoc](https://github.com/jgm/pandoc) for converting markdown to html.

# How to use it in Linux

---

### install_requirement.sh

```sh
apt update && apt intall curl wget pandoc # sudo if needed
```

---

### Download the release

```sh
# download the latest release to subfolder [reveal_slides]
curl -s https://api.github.com/repos/ruixiao85/reveal_slides/releases/latest \
| grep "tarball_url" \
| cut -d \" -f 4 \
| xargs wget -qO - | tar zxvf - && \
mv `ls -td *reveal_slides*/ | head -1` reveal_slides
```

---

### Prepare your markdown

If you don't have any, you can copy the included example to your work directory:
```sh
cp reveal_slides/README.md . # template needed to create slides
cp reveal_slides/README*.html . # pre-rendered html slides
```

---

### md_revealjs.sh

```sh
bash reveal_slides/md_revealjs.sh # [input markdown] [output html]
```

Optional positional arguments allow you to pass other markdown file and output html.
If not provided, default to [README.md] and output to [README.html].
The script content is shown below:

```sh
#!/usr/bin/env bash
echo "self, scpt=${0}"; scpt=${0}
FI=${1:-README.md}; echo "arg1, fille_input=$FI"
FO=${2:-${FI%.*}.html}; echo "arg2, file_output=$FO"

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cat ${SCRIPT_DIR}/revealjs_before.html > ${FO}
pandoc -f markdown -t revealjs --no-highlight ${FI} >> ${FO}
cat ${SCRIPT_DIR}/revealjs_after.html >> ${FO}
```

# Check the results

---

You should be able to directly open the output html in any browser. The subfolders [css, js, lib, plugin] are required for the html file to function properly.

"#" heading 1 may require the entire slide without any other content for the verticle movement to work (2-level hierachy).

Contact [Rui](mailto:ruixiao85@gmail.com) for any questions 😊
