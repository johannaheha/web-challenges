for branch in $(git branch -vv | awk '/: gone]/ {print $1}');
do git branch -d "$branch"
done