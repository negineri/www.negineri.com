#!/bin/sh
rsync -rtDcvz --delete -e "ssh negineri@ops.negineri.com ssh" ./public/ negineri@docker.negineri.com:/var/www/html/