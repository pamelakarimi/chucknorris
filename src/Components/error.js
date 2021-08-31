import React from 'react'
import {Link} from 'react-router-dom'
function ErrorPage(){
  return(
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>4<span>0</span>4</h1>
			</div>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<Link to="/chucknorris" className="nav_item"><h2>Home</h2></Link>
		</div>
	</div>
  )
}
export default ErrorPage