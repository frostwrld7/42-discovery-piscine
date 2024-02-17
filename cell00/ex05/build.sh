if [ $1 ]
then
	for i in "$@"; do
		mkdir -p -- "ex$i"
	done
else
	echo "No arguments supplied."
fi
