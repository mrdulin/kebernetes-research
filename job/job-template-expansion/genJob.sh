#!/bin/sh

mkdir -p ./jobs

for i in apple banana cherry
do
    cat job.yaml | sed "s/\$ITEM/$i/" > ./jobs/job-$i.yaml
done
