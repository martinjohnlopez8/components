import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail 
			  author="Sharon" 
			  timeAgo="Today at 4:30AM" 
			  avatar={faker.image.avatar()} 
			  content="Hello" 
			/>
			<CommentDetail 
			  author="Martin" 
			  timeAgo="Today at 2:30AM" 
			  avatar={faker.image.avatar()} 
			  content="Cutie"
			/>
			<CommentDetail 
			  author="John" 
			  timeAgo="Yesterday at 7:30AM" 
			  avatar={faker.image.avatar()} 
			  content="HAHA"
			/>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);