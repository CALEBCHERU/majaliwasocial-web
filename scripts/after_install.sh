# #!/bin/bash
# set -e

# # Log file path
# LOGFILE=/tmp/deployment.log

# # Update package list and install Node.js and npm
# {
#     echo "Updating packages and installing Node.js and npm..."
#     sudo yum update -y
#     curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
#     sudo yum install -y nodejs
# } >> $LOGFILE 2>&1

# # Navigate to the frontend directory
# cd /frontend

# # Install frontend dependencies
# {
#     echo "Installing frontend dependencies..."
#     npm install
# } >> $LOGFILE 2>&1

# # Build the frontend application
# {
#     echo "Building frontend application..."
#     npm run build
# } >> $LOGFILE 2>&1

# # Copy build artifacts to the web server directory
# {
#     echo "Deploying frontend build to web server directory..."
#     sudo cp -r build/* /var/www/html/
# } >> $LOGFILE 2>&1

# !/bin/bash
# set -e

# # Log file path
# LOGFILE=/tmp/deployment.log

# # Update package list and install Python 3 and pip
# {
#     echo "Updating packages and installing Python 3 and pip..."
#     sudo yum update -y
#     sudo yum install -y python3 python3-pip
# } >> $LOGFILE 2>&1

# # Add the local bin to PATH if using --user
# export PATH=$PATH:/home/ec2-user/.local/bin

# # Navigate to the backend directory
# cd /backend

# # Install Python dependencies for the user
# {
#     echo "Installing Python dependencies..."
#     pip3 install --user -r requirements.txt
# } >> $LOGFILE 2>&1

# # Run Django migrations
# {
#     echo "Running Django migrations..."
#     python3 manage.py migrate
# } >> $LOGFILE 2>&1

# # Ensure the necessary directories exist and have the correct permissions
# {
#     echo "Creating staticfiles directory and setting permissions..."
#     mkdir -p /backend/staticfiles
#     chown -R ec2-user:ec2-user /backend
# } >> $LOGFILE 2>&1

# # Collect static files
# {
#     echo "Collecting static files..."
#     python3 manage.py collectstatic --noinput
# } >> $LOGFILE 2>&1
