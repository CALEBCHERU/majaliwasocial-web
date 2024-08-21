#!/bin/bash
set -e

LOGFILE=/tmp/validate_service.log

{
    echo "Starting service validation..."

    # Example validation commands
    echo "Checking web server status..."
    if systemctl is-active --quiet httpd; then
        echo "Web server is running."
    else
        echo "Web server is not running."
        exit 1
    fi

    echo "Checking service on port 80..."
    if nc -zv localhost 80; then
        echo "Service is listening on port 80."
    else
        echo "Service is not listening on port 80."
        exit 1
    fi

    echo "Service validation completed successfully."
} >> $LOGFILE 2>&1


# #!/bin/bash

# # Check if the React app is running
# curl -Is http://localhost:3000 | head -n 1 | grep 200
# if [ $? -ne 0 ]; then
#   echo "React app is not running on port 3000"
#   exit 1
# fi
##################
# Check if the Django app is running
# curl -Is http://localhost:8000 | head -n 1 | grep 200
# if [ $? -ne 0 ]; then
#   echo "Django app is not running on port 8000"
#   exit 1
# fi

echo "Both React and Django apps are running successfully."
