import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video; //same thing for getting the video 
	//const onVideoSelect = props.onVideoSelect
	// console.log(video)
	const imageURL = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className='list-group-item'>
			<div className='video-list media'>
				<div classNam='media-left'>
					<img className='media-object' src={imageURL} />
				</div>
			</div>

			<div className='media-body'>
				<div className='media-heading'>{video.snippet.title}</div>
			</div>
			
		</li>
	);
};

export default VideoListItem;