#!/bin/bash

# Update package list and install Python 3 and pip
sudo yum update -y >> /tmp/deployment.log 2>&1
sudo yum install -y python3 >> /tmp/deployment.log 2>&1

# Install pip for Python 3
sudo yum install -y python3-pip >> /tmp/deployment.log 2>&1

# Navigate to the backend directory
cd /backend >> /tmp/deployment.log 2>&1

# Install Python dependencies for the user
pip3 install --user -r requirements.txt >> /tmp/deployment.log 2>&1

# Run Django migrations
python3 manage.py migrate >> /tmp/deployment.log 2>&1

# Ensure the necessary directories exist and have the correct permissions
mkdir -p /backend/staticfiles >> /tmp/deployment.log 2>&1
chown -R ec2-user:ec2-user /backend >> /tmp/deployment.log 2>&1

# Collect static files
python3 manage.py collectstatic --noinput >> /tmp/deployment.log 2>&1
