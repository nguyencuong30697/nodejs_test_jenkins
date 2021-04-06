pipeline {
    environment {
        registry = "cuongnm3061997/jenkins-demo-1"
        registryCredential = "docker-keys"
        dockerImage = ''
    }
    agent { label 'dev2' }
    stages {
        stage('Clone stage') {
            steps {
                git 'https://github.com/nguyencuong30697/nodejs_test_jenkins.git'
            }
        }
        stage('Install Lib stage') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run App stage') {
            steps {
                sh 'nohup node index.jsx &'
            }
        }
        stage('Test stage') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        always {
            junit 'test.xml'
            emailext body: '${DEFAULT_CONTENT}', subject: '${DEFAULT_SUBJECT}', to: 'nguyencuong.3061997@gmail.com'
        }
    }
}