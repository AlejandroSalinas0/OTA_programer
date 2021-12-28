#!/bin/bash
exec 3< <(node main.js);
lines=();
while read -r; do lines+=("$REPLY"); done <&3;
exec 3<&-;
echo "lineas ${lines[@]}";
