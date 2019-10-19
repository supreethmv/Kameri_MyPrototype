#!/bin/sh -e

export FLASK_APP=run.py

## Production
exec gunicorn -w 1 --bind 0.0.0.0:5003 run:app