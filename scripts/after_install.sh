#!/bin/bash

# Update package list and install Python 3 and pip
sudo yum update -y
sudo yum install -y python3

# Install pip for Python 3
sudo yum install -y python3-pip

# Navigate to the backend directory
cd /backend

# Install Python dependencies for the user
pip3 install --user -r requirements.txt

# Run Django migrations
python3 manage.py migrate

# Collect static files
python3 manage.py collectstatic --noinput
