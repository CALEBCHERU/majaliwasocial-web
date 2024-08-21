#!/bin/bash

# Check if Gunicorn is running
if pgrep -f gunicorn > /dev/null
then
    echo "Gunicorn is running"
else
    echo "Gunicorn is NOT running"
    exit 1
fi

# Check if Nginx is running
if systemctl status nginx | grep "active (running)" > /dev/null
then
    echo "Nginx is running"
else
    echo "Nginx is NOT running"
    exit 1
fi
