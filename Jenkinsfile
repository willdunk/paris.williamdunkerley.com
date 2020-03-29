#!/usr/bin/env groovy

node {
	stage('Checkout') {
		checkout scm
		sh 'git submodule update --init'
		echo "Branch Name: ${env.BRANCH_NAME}"
	}
	stage('Build') {
		sh 'yarn install'
		sh 'yarn build'
	}
	stage('Deploy') {
		if (env.BRANCH_NAME == "master") {
			sh 'scp -r ./dist/* paris.williamdunkerley.com:/home/jenkins/paris.williamdunkerley.com'
			sh 'ssh paris.williamdunkerley.com \'sudo /usr/sbin/service nginx restart\''
		}
		if (env.BRANCH_NAME == "release") {
			sh 'scp -r ./dist/* paris.williamdunkerley.com:/home/jenkins/vienna.williamdunkerley.com'
			sh 'ssh paris.williamdunkerley.com \'sudo /usr/sbin/service nginx restart\''
		}
		if (env.BRANCH_NAME.contains("feature/")) {
			sh 'scp -r ./dist/* paris.williamdunkerley.com:/home/jenkins/perth.williamdunkerley.com'
			sh 'ssh paris.williamdunkerley.com \'sudo /usr/sbin/service nginx restart\''
		}
	}
}