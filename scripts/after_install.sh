#!/bin/bash

# Navigate to the backend directory
cd /majaliwasocial/backend

# Install Python dependencies for the user
pip install --user -r requirements.txt

# Run Django migrations
python3 manage.py migrate

# Collect static files
python3 manage.py collectstatic --noinput
