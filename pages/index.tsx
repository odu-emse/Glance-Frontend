// import LoadingSplash from '@/common'
import Head from 'next/head'

const Index = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<Head>
				<title>ALMP</title>
				<meta name="description" content="ALMP" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="container">
				<div>
					<h1>H1 - Title 1</h1>
					<br />
					<h2>H2 - Subtitle 1</h2>
					<br />
					<h3>H3 - Title 2</h3>
					<br />
					<h4>H4 - Subtitle 2</h4>
					<br />
					<h5>H5 - Bold Paragraph</h5>
					<br />
					<h6>H6 - Bold Paragraph</h6>
					<br />
					<p>
						This is a paragraph <a href="#">with a link in it</a>.
					</p>
					<br />
					<figcaption>
						This is a caption <a href="#">with a link in it</a>
					</figcaption>
				</div>
				<hr />
				<div>
					<p>
						Step 7: Clean up. After you're done using the concrete,
						be sure to clean up any tools or surfaces that came into
						contact with it. Concrete can be difficult to remove
						once it dries, so it's best to clean it up as soon as
						possible. Mixing concrete can be a messy and physically
						demanding process, so be sure to wear protective gear
						and take breaks as needed. With practice, you'll become
						more skilled at mixing concrete and be able to tackle a
						wide range of DIY and construction projects.
					</p>
					<p>
						Step 7: Clean up. After you're done using the concrete,
						be sure to clean up any tools or surfaces that came into
						contact with it. Concrete can be difficult to remove
						once it dries, so it's best to clean it up as soon as
						possible. Mixing concrete can be a messy and physically
						demanding process, so be sure to wear protective gear
						and take breaks as needed. With practice, you'll become
						more skilled at mixing concrete and be able to tackle a
						wide range of DIY and construction projects.
					</p>
				</div>
				<hr />
				<section>
					<header>
						<h1>This is a top level title for the section</h1>
						<h2>This is the subtitle for this section</h2>
					</header>
					<p>
						Step 7: Clean up. After you're done using the concrete,
						be sure to clean up any tools or surfaces that came into
						contact with it. Concrete can be difficult to remove
						once it dries, so it's best to clean it up as soon as
						possible. Mixing concrete can be a messy and physically
						demanding process, so be sure to wear protective gear
						and take breaks as needed. With practice, you'll become
						more skilled at mixing concrete and be able to tackle a
						wide range of DIY and construction projects.
					</p>
					<ul>
						<li>Hello there</li>
						<li>Hello there</li>
						<li>Hello there</li>
						<li>Hello there</li>
						<li>Hello there</li>
					</ul>
				</section>
			</div>
		</div>
	)
}

export default Index
