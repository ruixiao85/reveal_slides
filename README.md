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
mv revealjs_template/slides.md slides_rt.md
mv revealjs_template/index.html index_rt.md

# re-hardlink with rx
ln -snf ../index_rx.html revealjs_template/index.html
ln -snf ../OmicsImageSeq.md revealjs_template/slides.md
ln -snf ../resource revealjs_template/resource
```


### npm preparation and localhost serving

```sh
sudo apt update
sudo apt install npm
#sudo apt install node-grunt-cli
npm update  # only required once
npm start
```
vscode liveserver should now work on the relinked index.html under **revealjs_template**