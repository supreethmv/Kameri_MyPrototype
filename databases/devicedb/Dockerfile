FROM postgres:10
COPY ./postgresql_devicedb.conf /etc/postgresql/postgresql.conf
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]