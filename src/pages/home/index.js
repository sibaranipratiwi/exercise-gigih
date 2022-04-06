import GifInfo from "../../components/gif";

const Gif = () => {
  return (
    <div>
      <h1>Search Your Favorite Gif</h1>
      <input type="text" placeholder="Type here"></input>
      <button type="submit" value="search">
        Search
      </button>
      <br></br>
      {/* <img src="https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g"></img> */}
      <div className="Gif-Info">
        <GifInfo
            gifSrc="https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g"
            title="Nintendo Plotting GIF by Gaming GIFs"
        />
      </div>
    </div>
  );
};

export default Gif;
