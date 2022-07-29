DIR = revealjs_template
MD = OmicsImageSeq.md
IDX = index_rx.html
backup:
	mv $(DIR)/slides.md slides_rt.md
	mv $(DIR)/index.html index_rt.md
link:
	@echo "Linking IDX=$(IDX) MD=$(MD)"
	ln -snf ../$(IDX) $(DIR)/index.html
	ln -snf ../$(MD) $(DIR)/slides.md