import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES =
	[{
		src: "journal.jpg",
		thumbnail: "journal.jpg",
		thumbnailWidth: 120,
		thumbnailHeight: 174,
		isSelected: true,
		caption: "Journal"
	}]

class journalGallery extends React.Component {
	renderGallery(i) {
		return (
			<Journal
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}
}