import { defineConfig } from 'tsup'
export default defineConfig({
	target: 'node18', // 指定编译js代码的目标版本
	entry: ['src/index.ts'], // 打包入口
	minify: true, // 开启文件压缩
	platform: 'node', // 代码的运行平台
	outDir: 'dist', // 打包后的文件夹的名称
	format: ["cjs"], // 代码的模块规范
	clean: true,
})