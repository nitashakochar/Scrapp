import React from 'react';
import { Component } from 'react';
import Entry from './entry';

// journal component renders multiple entries

const entries = [
  {
    people: ['Nitasha', 'Regina'],
    places: ['Spanos', 'Hitchcock'],
    journals: ['sad', 'major'],
    tags: ['stress', 'fun'],
    title: 'first entry',
    content: 'hello world',
    date: 'April 6, 2019',
  },
  {
    people: ['Nitasha', 'Regina'],
    places: ['Spanos', 'Hitchcock'],
    journals: ['sad', 'major'],
    tags: ['stress', 'fun'],
    title: 'second entry',
    content: 'hello world',
    date: 'April 6, 2019',
  },
];

console.log(entries);
class EntryList extends Component {
  render() {
    return (
      <div className="entry-list">
        {entries.map(entryDetail => {
          return(<Entry display="cover" entry={entryDetail} />)}
          )}
      </div>
    );
  }
}

export default EntryList;
