import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-gray-900">
			<nav className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-4 text-white">
				<div className="container mx-auto flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<img alt="ClassClick Logo" className="h-8 w-auto" src="/icon.svg" />
						<a className="text-2xl font-bold" href="#">
							ClassClick
						</a>
					</div>
					<div className="flex items-center space-x-6">
						<a className="hover:underline" href="https://github.com/ClassClick">
							GitHub
						</a>
					</div>
				</div>
			</nav>
			<header className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex flex-col md:flex-row items-center justify-center py-16 flex-grow">
				<div className="md:w-1/2 text-center md:text-left">
					<h1 className="text-4xl font-bold text-white max-w-xl mx-auto mb-4">
						Introducing the ClassClicker
					</h1>
					<p className="text-lg text-gray-200 max-w-xl mx-auto mb-8">
						Introducing ClassClicker, a dynamic and engaging educational tool
						designed to revolutionize classroom interaction. ClassClicker
						seamlessly integrates technology with the tactile experience of a
						clicker, creating an interactive learning environment that
						captivates students and enhances overall participation.
					</p>
				</div>
				<div className="md:w-1/2">
					<img
						alt="Product Image"
						className="mx-auto w-80 object-cover rounded-lg shadow-lg backgrou"
						height="2880"
						width="1620"
						src="/exploded.png"
						style={{
							aspectRatio: "9/16",
							objectFit: "cover",
						}}
					/>
				</div>
			</header>
			<footer className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white p-6 text-center mt-auto">
				<p>
					© {new Date().getFullYear()} ClassClick. All rights reserved.{" "}
					{process.env.COMMIT_HASH}
				</p>
			</footer>
		</div>
	);
}
