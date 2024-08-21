#!/bin/bash

# Start the Gunicorn server for Django
cd /home/ec2-user/backend
gunicorn --workers 3 --bind 0.0.0.0:8000 majaliwasocialtest.wsgi:application &

# Serve the React frontend using Nginx
sudo systemctl start nginx
