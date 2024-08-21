#!/bin/bash

# Navigate to the frontend directory
cd /frontend

# Install Node.js dependencies
npm install

# Build the React frontend
npm run build

# Navigate to the backend directory
cd /backend

# Activate the virtual environment
source /backend/venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Run Django migrations
python manage.py migrate

# Collect static files
python manage.py collectstatic --noinput

# Deactivate the virtual environment
deactivate
