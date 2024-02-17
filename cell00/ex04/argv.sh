if [ $# -le 3 ];
then
	if [ $1 ];
	then
		for i in "$@"; do
			echo "$i"
		done
	else
		echo "No arguments supplied."
	fi
else
	echo $1
	echo $2
	echo $3
fi
