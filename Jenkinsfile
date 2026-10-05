pipeline {
    agent any

    tools {
        nodejs 'Node22'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Build and all tests passed successfully!'
        }

        failure {
            echo 'Build or tests failed!'
        }
    }
}
