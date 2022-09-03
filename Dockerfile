FROM ubuntu:18.04

WORKDIR /garageoPIner-server
# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /garageoPIner-server/requirements.txt

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev rpi.gpio && \
	pip install -r requirements.txt && \
	rm -rf /var/lib/apt/lists/*

COPY ./garageoPIner-server /garageoPIner-server

ENTRYPOINT [ "python" ]

CMD [ "garageoPIner.py" ]
