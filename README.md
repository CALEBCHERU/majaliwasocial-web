# Majaliwa Social

Majaliwa Social is a full-stack social networking web application built using **ReactJS** for the frontend and **Django** for the backend. It allows users to connect, share posts, chat in real-time, and authenticate using traditional and social login methods.

## Features
- **User Authentication**: Register and login using JWT authentication, Google, and Facebook.
- **User Profiles**: Update profile pictures and personal details.
- **Posts & Feeds**: Users can create, like, and comment on posts.
- **Real-time Chat**: WebSocket-powered chat system.
- **Responsive UI**: Built with Bootstrap and Sass.
- **Secure & Scalable**: Follows best practices in security and deployment.

## Tech Stack
### Frontend
- **ReactJS (Create React App)**
- **React Bootstrap & Sass**
- **React Router**
- **Axios**
- **FontAwesome & MUI**

### Backend
- **Django & Django REST Framework**
- **Django Channels (WebSockets for chat)**
- **PostgreSQL (Database)**
- **Simple JWT for authentication**

### Deployment
- **AWS EC2** (Backend & Frontend hosted)
- **AWS S3** (Media storage)
- **AWS CodeDeploy** (CI/CD pipeline)
- **AWS Lambda** (Additional serverless functions)

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- Python 3.x
- PostgreSQL
- AWS CLI (for deployment)

### Setup Instructions
#### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/majaliwa-social.git
   cd majaliwa-social/backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Apply migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

#### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables
Create a `.env` file in the backend and frontend folders with the necessary environment variables:

#### Backend `.env`
```
SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
```

#### Frontend `.env`
```
REACT_APP_API_URL=http://127.0.0.1:8000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/majaliwasocial/token/` | POST | Obtain JWT token |
| `/majaliwasocial/token/refresh/` | POST | Refresh JWT token |
| `/majaliwasocial/profile/` | GET | Fetch user profile |
| `/majaliwasocial/posts/` | GET, POST | Fetch or create posts |
| `/majaliwasocial/chat/` | WebSocket | Real-time chat |

## Deployment
### Backend Deployment
1. Push changes to GitHub
2. Deploy using AWS CodeDeploy:
   ```bash
   aws deploy create-deployment --application-name majaliwa-social-backend --deployment-group-name backend-group --github-location repository=yourrepo,commitId=yourcommitid
   ```

### Frontend Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload to S3:
   ```bash
   aws s3 sync build/ s3://your-bucket-name --delete
   ```
3. Invalidate CloudFront cache (if applicable):
   ```bash
   aws cloudfront create-invalidation --distribution-id your_distribution_id --paths "/*"
   ```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch
3. Make your changes and push
4. Submit a pull request

## License
This project is licensed under the **MIT License**.

## Contact
For inquiries, reach out to **Caleb Kipkoech Cheruiyot**
- Email: calebcheruyoit@gmail.com
- Phone: +254718015950
- Location: Nairobi, Langata

