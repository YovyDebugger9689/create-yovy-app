#!/usr/bin/env node
import prompts from 'prompts'
import path from 'node:path'
import fs from 'node:fs'

const bootstrap = async () => {
	const resultPromise = await prompts([
		{
			type: "text",
			name: "projectName",
			message: `project-name?:`
		},
		{
			type: "select",
			name: "frame",
			message: "Select a frame to code?:",
			choices: [
				{title: "Vue", value: "this is Vue frame"},
				{title: "React", value: "this is React frame"},
				{title: "Angular", value: "this is Angular frame"},
			]
		},
		{
			type: "confirm",
			name: "isJavascript",
			message: "Whether Typescript is required?",
			initial: false
		}
	])
	
	// 获取命令在执行时的目录路径
	const targetPath = path.resolve(process.cwd(), resultPromise.projectName)
	const sourcePath = path.resolve(__dirname, "../template")
	
	fs.cpSync(sourcePath, targetPath, {
		// 递归复制(因为文件夹下可能还有文件)
		recursive: true
	})
	fs.renameSync(
		path.resolve(targetPath, '_gitignore'),
		path.resolve(targetPath, '.gitignore')
	)

	console.log(`
	A simple ${resultPromise.frame} + ${resultPromise.isJavascript} template has been create!

	use 'cd ${resultPromise.projectName}' to enter your project!🧀
	use 'npm install' to install the dependencies that your project requires!🥫
	use 'npm run dev' to run your project!🥰
	
	Thanks for your using!😎
	`);
}
bootstrap()