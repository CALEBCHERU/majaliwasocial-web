#!/bin/bash

# Listing contents of the majaliwasocial directory
echo "Listing contents of /"
ls -al /

# Listing contents of the frontend directory
if [ -d "/frontend" ]; then
  echo "Listing contents of /frontend"
  ls -al /frontend/
else
  echo "Frontend directory does not exist!"
fi

# Listing contents of the backend directory
if [ -d "/backend" ]; then
  echo "Listing contents of /backend"
  ls -al /backend/
else
  echo "Backend directory does not exist!"
fi
