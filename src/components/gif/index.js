// const gif = {
//     id: '4HrBfVJJveBNS9ytSk',
//     title: 'Nintendo Plotting GIF by Gaming GIFs',
//     uploadedDate: '2018-04-03 15:21:50',
//     url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
//     webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
//   }

// const GifInfo = ({ gifSrc, title, ratingGif }) => {
//   return(
//     <div class="Gif-Info">
//     <img className="gambar" alt="gambar" src={gifSrc} />
//     <p>{title}</p>
//     <p>{ratingGif}</p>
//   </div>
//   )
// };

// export default GifInfo;

const Gif = ({ source, title }) => {
  return <img src={source} alt={title} />;
};

export default Gif;
