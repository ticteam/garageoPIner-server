this is a fork of https://github.com/wirthual/garageoPIner-server

I added 2 more relays and not only wanna you this for my garage.

I also added a Dockerfile and a docker-compose.yaml  
so it's not needed to install python flask and all the stuff

there is everything needed in the Docker container image,  
but if you wanna mount the file to the docker,  
you need to uncomment line 11 in the docker-compose.yaml


- to build the docker container image
$> docker build -t garagepi:ubuntu18.04

- to run it 
$> docker-compose up -d 

