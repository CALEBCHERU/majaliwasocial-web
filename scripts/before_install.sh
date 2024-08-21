#!/bin/bash

# Stop the existing Node.js and Django services, if running
sudo systemctl stop nginx || true
sudo pkill -f node || true
sudo pkill -f gunicorn || true

# Install necessary dependencies (Node.js, npm, Python, pip)
sudo yum update -y
sudo yum install -y nodejs npm
sudo yum install -y python3-pip

# Debug: List contents of the project directory and subdirectories
echo "Listing contents of /home/ec2-user"
ls -la /home/ec2-user

echo "Listing contents of /home/ec2-user/frontend (if exists)"
ls -la /home/ec2-user/frontend || echo "Frontend directory not found!"

echo "Listing contents of /home/ec2-user/backend (if exists)"
ls -la /home/ec2-user/backend || echo "Backend directory not found!"

# Ensure the deployment directories exist
if [ ! -d "/home/ec2-user/frontend" ]; then
  echo "Frontend directory does not exist!"
  exit 1
fi

if [ ! -d "/home/ec2-user/backend" ]; then
  echo "Backend directory does not exist!"
  exit 1
fi

# Navigate to frontend and install npm packages
cd /home/ec2-user/frontend
npm cache clean --force
npm install

# Navigate to backend and install Python packages
cd /home/ec2-user/backend
if [ ! -f "requirements.txt" ]; then
  echo "requirements.txt not found!"
  exit 1
fi
pip3 install -r requirements.txt
