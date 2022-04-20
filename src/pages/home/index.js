import GifInfo from "../../components/gif";
import data from "../../data/gif/index";
import Button from '@mui/material/Button';

const Gif = () => {
  return (
    <div>
      <h1>Search Your Favorite Gif</h1>
      <input type="text" placeholder="Type here"></input>
      <Button type="submit" value="search" variant="contained" color="success">
        Search
      </Button>
      <Button variant="contained">Hello World</Button>
      <br></br>
      {/* <img src="https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g"></img> */}
      <div className="Gif-Info">
        <GifInfo
          gifSrc="https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g"
          title="Nintendo Plotting GIF by Gaming GIFs"
        />

        {data.map((e) => {
          return (
            <GifInfo ratingGif={e.rating} gifSrc={e.url} title={e.title} />
          );
        })}
      </div>
    </div>
  );
};

export default Gif;
