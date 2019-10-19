#!/bin/sh -e

export FLASK_APP=run.py

# flask db init
# flask db migrate
# flask db upgrade

## Development
python run.py

## Production
# exec gunicorn -w 1 --bind 0.0.0.0:5001 run:app