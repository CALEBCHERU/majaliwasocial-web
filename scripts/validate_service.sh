#!/bin/bash
set -e

# List of ports to check
PORTS=(3000 80 443)  # Add or remove ports as needed

for PORT in "${PORTS[@]}"; do
    echo "Checking if a service is running on port $PORT..."
    if nc -zv localhost $PORT; then
        echo "Service is running on port $PORT."
    else
        echo "Service is not running on port $PORT."
        exit 1
    fi
done

echo "Service validation completed successfully."




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
