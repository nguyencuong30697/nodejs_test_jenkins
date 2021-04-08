pipeline {
    environment {
        registry = "cuongnm3061997/jenkins-demo-1"
        registryCredential = "docker-keys"
        dockerImage = ''
        scannerHome = tool 'sonarscan'
    }
    agent { label 'dev2' }
    stages {
        stage('Clone stage') {
            steps {
                git branch: 'dev', url: 'https://github.com/nguyencuong30697/nodejs_test_jenkins.git'
            }
        }
        stage('Check Project stage') {
            steps{
                withSonarQubeEnv('nodejs_demo') { sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('waitForQualityGate stage') {
            steps{
                waitForQualityGate abortPipeline: true
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
        // stage('Build stage') {
        //     steps{
        //         script {
        //             dockerImage = docker.build registry + ":$BUILD_NUMBER"
        //         }
        //     }
        // }
        // stage('Push Image stage') {
        //     steps {
        //         script {
        //             docker.withRegistry( '', registryCredential ) {
        //                 dockerImage.push()
        //             }
        //         }
        //     }
        // }
    }
    post {
        always {
            junit 'test.xml'
            emailext body: '${DEFAULT_CONTENT}', subject: '${DEFAULT_SUBJECT}', to: 'tuananh091299@gmail.com'
        }
    }
}