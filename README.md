# AI-Editor

A proof of concept for a Image and Video Editor using AI tools built with Next.js for the frontend and Cloudinary for backend image and asset management.

## Features
Leverage AI tools for intuitive text and image editing.
Get instant feedback on your edits.
Store and manage images and media efficiently in the cloud.
Optimized for desktop, tablet, and mobile views.
Easily deploy and run using Docker containers.

## Technologies Used

### Frontend

- [Next.js](https://nextjs.org/)

### Backend

- [Cloudinary](https://cloudinary.com/)

### Prerequisites

- [npm](https://www.npmjs.com/) 
- [Docker](https://www.docker.com/)
- Access to **Cloudinary** credentials

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ai-editor.git
   cd ai-editor
   ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

### Configuration

1. **Create a `.env.local` file in the backend directory with the following content:**

    ```env
      CLOUDINARY_NAME=your-cloud-name
      CLOUDINARY_KEY=your-api-key
      CLOUDINARY_SECRET=your-api-secret
      CLOUDINARY_PRESET=your-ai-preset
    ```

### Running the Application with Docker

1. **Build the Docker image:**
   ```bash
   docker-compose build
   ```

2. **Run the container:
   ```bash
   docker-compose up
   ```

3. **Visit the application in your browser at:**
   ```
   http://localhost:3000
   ```

### Running the Application locally:

1. **Start the development server:**

    ```sh
    cd ai-editor
    npm run dev
    ```

2. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```