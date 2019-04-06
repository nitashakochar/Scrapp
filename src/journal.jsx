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
  },
  {
    people: ['Nitasha', 'Regina'],
    places: ['Spanos', 'Hitchcock'],
    journals: ['sad', 'major'],
    tags: ['stress', 'fun'],
    title: 'first entry',
    content: 'hello world',
  },
];

console.log(entries);
class Journal extends Component {
  render() {
    return (
      <div>
        {entries.map(entryDetail => {
          return(<Entry display="full" entry={entryDetail} />)}
          )}
      </div>
    );
  }
}

export default Journal;
