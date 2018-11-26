import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
				  author="Sharon" 
				  timeAgo="Today at 4:30AM" 
				  avatar={faker.image.avatar()} 
				  content="Hello" 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
				  author="Martin" 
				  timeAgo="Today at 2:30AM" 
				  avatar={faker.image.avatar()} 
				  content="Cutie"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
				  author="John" 
				  timeAgo="Yesterday at 7:30AM" 
				  avatar={faker.image.avatar()} 
				  content="HAHA"
				/>
			</ApprovalCard>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);