#!/usr/bin/env bash
echo "self, scpt=${0}"; scpt=${0}
FI=${1:-README.md}; echo "arg1, fille_input=$FI"
FO=${2:-${FI%.*}.html}; echo "arg2, file_output=$FO"

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cat ${SCRIPT_DIR}/revealjs_before.html > ${FO}
pandoc -f markdown -t revealjs --no-highlight ${FI} >> ${FO}
cat ${SCRIPT_DIR}/revealjs_after.html >> ${FO}
