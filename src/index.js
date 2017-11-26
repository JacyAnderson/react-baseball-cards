import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const players = [
  {
    name: 'Charlie Blackmon',
    position: 'Outfield',
    frontImageUrl: 'https://storage.googleapis.com/afs-prod/media/media:0830ad02492c417496c3d68ee89ca99f/800.jpeg'
  },
  {
    name: 'Nolan Arenado',
    position: '3rd Base',
    frontImageUrl: 'https://usatftw.files.wordpress.com/2016/07/sw22_nolan_arenado_0714_83195442.jpg?w=1000&h=633'
  },
  {
    name: 'Jon Gray',
    position: 'Starting Pitcher',
    frontImageUrl: 'https://cdn2.newsok.biz/cache/r960-69cbee4790223cb8ca637649cfc7a347.jpg'
  },
  {
  	name: 'Raimel Tapia',
  	position: 'Outfield',
  	frontImageUrl: 'https://roxpile.com/wp-content/blogs.dir/113/files/2017/01/9524396-raimel-tapia-mlb-san-francisco-giants-colorado-rockies.jpg'
  },  
  {
  	name: 'Kyle Freeland',
  	position: 'Starting Pitcher',
  	frontImageUrl: 'https://pbs.twimg.com/media/DOjfYfXUMAE8w_o.jpg:large'
  }
];

ReactDOM.render(<App players={players}/>, document.getElementById('root'));
registerServiceWorker();
