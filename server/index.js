const youtubedl = require('youtube-dl-exec');

youtubedl('https://www.youtube.com/watch?v=-L0BSSQBWOI&t=881s', {
  output: 'video-1080p.mp4',
  format: 'bestvideo[height=1080]+bestaudio[ext=m4a]/best[height=1080]/best',
  mergeOutputFormat: 'mp4',
  forceOverwrites: true
}).then(output => console.log('✅ Video descargado correctamente')).catch(err => console.error(err));

