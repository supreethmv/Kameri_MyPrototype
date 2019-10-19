FROM python:3.7-slim
RUN apt-get update && apt-get install -y dos2unix
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN pip install --no-cache-dir -r requirements.txt
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN mkdir /code
WORKDIR /code
COPY . /code

ADD ./prod_start.sh /usr/local/bin/prod_start.sh
RUN dos2unix /usr/local/bin/prod_start.sh && apt-get --purge remove -y dos2unix && rm -rf /var/lib/apt/lists/*
RUN chmod u+x /usr/local/bin/prod_start.sh
ENTRYPOINT /usr/local/bin/prod_start.sh