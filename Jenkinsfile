pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'creative-fullstack-app'
        DOCKER_TAG = 'latest'
        REGISTRY = 'docker.io'  // Update this if using a different registry
        DOCKER_CREDENTIALS = credentials('dockerhub-credentials')  // Optional if using Docker Hub credentials
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ashishlaheri/devopproject.git'  // Use your repo URL
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
                }
            }
        }

        stage('Test Docker Image') {
            steps {
                script {
                    sh 'docker run --rm $DOCKER_IMAGE:$DOCKER_TAG'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD $REGISTRY'
                    sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
                }
            }
        }

        stage('Deploy to Docker Swarm or Cloud') {
            steps {
                script {
                    // Example: Deploy using Docker Swarm
                    sh 'docker stack deploy -c docker-compose.yml creativeapp'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Something went wrong with the build or deployment!'
        }
    }
}
