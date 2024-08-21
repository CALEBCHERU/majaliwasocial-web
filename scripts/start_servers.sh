#!/bin/bash

# Start Nginx service
sudo systemctl start nginx

# Start the React app using serve (if you're serving a static build)
cd /home/ec2-user/majaliwasocialtest/frontend
npm install -g serve
serve -s build -l 3000 &

# Start the Django server (or Gunicorn)
cd /home/ec2-user/majaliwasocialtest/backend
gunicorn --workers 3 --bind 0.0.0.0:8000 majaliwasocialtest.wsgi:application &

