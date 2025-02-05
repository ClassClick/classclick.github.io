import * as childproc from "child_process";

const commitHash = childproc
	.execSync('git log --pretty=format:"%h" -n1')
	.toString()
	.trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	env: {
		COMMIT_HASH: commitHash,
	},
};

export default nextConfig;
