#!/usr/bin/env groovy

node {
	stage 'Build'
	checkout scm
	sh 'git submodule update --init'

	stage 'Deploy'
	echo "My branch name is: ${env.BRANCH_NAME}"
}