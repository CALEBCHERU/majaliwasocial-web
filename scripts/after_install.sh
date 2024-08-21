#!/bin/bash

# Build the React frontend
cd /home/ec2-user/frontend
npm run build

# Apply Django migrations and collect static files
cd /home/ec2-user/backend
python3 manage.py migrate
python3 manage.py collectstatic --noinput
