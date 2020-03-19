#!/usr/bin/env groovy

pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				echo 'Building...'
				sh 'yarn install'
				sh 'yarn build'
			}
		}
		stage('Deploy') {
			steps {
				echo 'Logging in...'
				sh 'scp -r ./dist/* paris.williamdunkerley.com:/home/jenkins/paris.williamdunkerley.com'
				sh 'ssh paris.williamdunkerley.com \'sudo /usr/sbin/service nginx restart\''
			}
		}
	}
}