
apt update && apt install curl wget pandoc # sudo if needed


github_release() { # user / repo rename to newname
  echo "Parameters required: #1 user-name is [$1], #2 repo-name is [$2], #3 new-name is [$3]"
  curl -s https://api.github.com/repos/${1}/${2}/releases/latest \
  | grep "tarball_url" \
  | cut -d \" -f4 \
  | xargs wget -qO - | tar zxvf - && mv `ls -td *${2}*/ | head -1` ${3}
}

github_clone_sub() {
  echo "Parameters required: #1 user-name is [$1], #2 repo-name is [$2], #3 sub-folder-name is [$3], #4 new-destination is [$4]"
  git clone https://github.com/${1}/${2}.git && \
    cp -r ${2}/${3}/* ${4} && rm -rf ${2}
}

git clone https://github.com/theno/revealjs_template
mv revealjs_template/reveal.js/css .
mv revealjs_template/reveal.js/js .
mv revealjs_template/reveal.js/lib .
mv revealjs_template/reveal.js/plugin .

# github_release rajgoel reveal.js-plugins plugin # plugin collection

## legacy plugin
# github_clone_sub e-gor Reveal.js-TOC-Progress plugin plugin/
# github_clone_sub e-gor Reveal.js-Title-Footer plugin plugin/

## more to explore
# github_release hakimel reveal.js reveal.js # main framework, may not be compatible to toc progress
# github_release rajgoel reveal.js-plugins plugin # plugin collection
# github_release denehyg reveal.js-menu menu && mv menu plugin/ # menu is the missing piece

# git clone -b Thus-fork-revealjs-4x https://github.com/Thus0/Reveal.js-TOC-Progress.git && cp -r Reveal.js-TOC-Progress/plugin/* reveal.js/plugin/ && rm -rf Reveal.js-TOC-Progress

