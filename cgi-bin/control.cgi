#!/bin/sh
echo "Content-type: text/html"
echo ""

key=$(echo "$QUERY_STRING" | tr -s "&" "\n")

for value in $key; do
	k=$(echo "$value" | tr -s "=" "\n" | sed -n '1p');
	v=$(echo "$value" | tr -s "=" "\n" | sed -n '2p');

	if [ "$k" = "q" ]; then
		node controls.js $v
	fi

done

