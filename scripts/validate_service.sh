#!/bin/bash
set -e

# Install netcat if not already installed
if ! command -v nc &> /dev/null; then
    echo "Netcat (nc) is not installed. Installing..."
    sudo yum install -y nmap-ncat
fi

# List of ports to check
PORTS=(3000 80 443)  # Add or remove ports as needed

for PORT in "${PORTS[@]}"; do
    echo "Checking if a service is running on port $PORT..."
    if nc -zv localhost $PORT; then
        echo "Service is running on port $PORT."
    else
        echo "Service is not running on port $PORT."
    fi
done

echo "Service validation completed."
