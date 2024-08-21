#!/bin/bash

# Navigate to frontend and build the React app
cd /home/ec2-user/majaliwasocialtest/frontend
npm run build

# Navigate to backend and apply migrations
cd /home/ec2-user/majaliwasocialtest/backend
python3 manage.py migrate

# Collect static files for Django
python3 manage.py collectstatic --noinput

# Start Gunicorn server for Django
gunicorn --workers 3 --bind 0.0.0.0:8000 majaliwasocialtest.wsgi:application &
