#!/usr/bin/env groovy

node {
	stage('Build') {
		checkout scm
		sh 'git submodule update --init'
		echo "My branch name is: ${env.BRANCH_NAME}"
	}
	stage('Deploy') {
		echo "My branch name is: ${env.BRANCH_NAME}"
	}
}