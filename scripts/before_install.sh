#!/bin/bash

# Stop the existing Node.js and Django services, if running
sudo systemctl stop nginx
sudo pkill -f node
sudo pkill -f gunicorn

# Install necessary dependencies (Node.js, npm, Python, pip)
sudo yum update -y
sudo yum install -y nodejs npm
sudo yum install -y python3-pip

# Navigate to frontend and install npm packages
cd /home/ec2-user/frontend
npm install

# Navigate to backend and install Python packages
cd /home/ec2-user/backend
pip3 install -r requirements.txt
