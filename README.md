# reveal_slides

## work with vscode-reveal plugin.

## compatible with [theno's reveal.js template](https://github.com/theno/revealjs_template).


### download or clone revealjs_template

```sh
unzip revealjs_template-master.zip
# OR
git clone https://github.com/theno/revealjs_template.git
```

### use template files

```sh
# backup rt
mv realjs_template/slides.md slides_rt.md
mv realjs_template/index.html index_rt.md

# re-hardlink with rx
cd revealjs_template/reveal.js
rm -f slides.md index.html
ln -s ../../index_rx.html index.html
ln -s ../../OmicsImagingSeq.md slides.md
cd ../..
```


### npm preparation and localhost serving

```sh
sudo apt update
sudo apt install npm
#sudo apt install node-grunt-cli
npm update  # only required once
npm start
```
vscode liveserver should now work on the relinked index.html