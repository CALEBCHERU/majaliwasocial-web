#!/bin/bash

# Build the React frontend
cd /frontend
npm run build

# Apply Django migrations and collect static files
cd /backend
python3 manage.py migrate
python3 manage.py collectstatic --noinput
