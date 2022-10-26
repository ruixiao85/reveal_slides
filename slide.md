
# About the project

## Update history

> 1.0 This work incorporated my personal preference and removed the need to serve markdown indirectly. Also relatively convenient and portable.

> 1.1 Now the repo is serving as a subfolder, which leaves your work directory (markdown and html) cleaner.

Thanks to [theno](https://github.com/theno/revealjs_template)'s selection of tools and [jgm's pandoc](https://github.com/jgm/pandoc) for converting markdown to html.

## Testing

plain text

* 1
  * 1.1
    * 1.1.1
      * 1.1.1.1
        * 1.1.1.1.1
* formula
  * $e^{ \pm i\theta } = \cos \theta \pm i\sin \theta$
  * $\displaystyle F1=\frac{2*Precision*Recall}{Precision+Recall} = \frac{2*TP}{2*TP+FP+FN}$

1. d1
   1. d2
      1. d3
         1. d4
            1. d5


## Contact

Contact [Rui](mailto:ruixiao85@gmail.com) for any questions 😊


# Documentation


## Installation

### install_requirement.sh

```sh
apt update && apt intall curl wget pandoc # sudo if needed
```

### Download the release

```sh
# download the latest release to subfolder [reveal_slides]
curl -s https://api.github.com/repos/ruixiao85/reveal_slides/releases/latest \
| grep "tarball_url" \
| cut -d \" -f 4 \
| xargs wget -qO - | tar zxvf - && \
mv `ls -td *reveal_slides*/ | head -1` reveal_slides
```


## Prepare your markdown

If you don't have any, you can copy the included example to your work directory:
```sh
cp reveal_slides/slide.md . # template needed to create slides
cp reveal_slides/slide*.html . # pre-rendered html slides
```

---

## Make one single revealjs slidedeck

### md_revealjs.sh

```sh
bash reveal_slides/md_revealjs.sh # [input markdown] [output html]
```

Optional positional arguments allow you to pass other markdown file and output html.
If not provided, default to [slide.md] and output to [slide.html].
The script content is shown below:

```sh
#!/usr/bin/env bash
echo "self, scpt=${0}"; scpt=${0}
FI=${1:-slide.md}; echo "arg1, fille_input=$FI"
FO=${2:-${FI%.*}.html}; echo "arg2, file_output=$FO"

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cat ${SCRIPT_DIR}/revealjs_before.html > ${FO}
pandoc -f markdown -t revealjs --no-highlight --number-sections --slide-level 3 ${FI} >> ${FO}
cat ${SCRIPT_DIR}/revealjs_after.html >> ${FO}
```

## Make multiple revealjs slidedecks

### md_revealjs.py

```sh
bash reveal_slides/md_revealjs.py # [input markdown] [output html] [heading split level, 0-nosplit, 1-split@heading1 '#']
```

This allows you to further split at high heading levels, for example, "#". As a result, the input markdown file will be split into multiple markdown files and lower-level headings will move up accordingly.

<div class="grid"><div class="gc12">

* main.md
```md
# topic 1
## section 1.1
## section 1.2
# topic 2
## section 2.1
```

</div><div class="gc23">

* main_topic1.md
```md
# section 1.1
# section 1.2
```

* main_topic2.md
```md
# section 2.1
```

</div></div>

## Strip html tags for plain markdown

### md_strip_html.py

```sh
python3 reveal_slides/md_strip_html.py # [input markdown with html] [output markdown without html]
```

This removes all style blocks, any line starts or ends with '<' or '>', and convert img tag src="pic.jpg" to markdown styled \!\[\](pic.jpg).


## Check the results

* You should be able to directly open the output html in any browser. The subfolders [css, js, lib, plugin] are required for the html file to function properly.

* "#" heading 1 may require the entire slide without any other content for the verticle movement to work (2-level hierachy).
