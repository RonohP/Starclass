import React from "react";
import YouTube from "react-youtube";
import AuthorImg from "../../images/profile.jpg";
import "../../pages/Course/Course.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import ArticleIcon from '@mui/icons-material/Article';

function Course() {
  const opts = {
    height: "600",
    width: "1200",
    playerVars: {
      autoplay: 1,
    },
  };

  function videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target);
  }

  return (
    <main>
      <div className="youtube-container">
        <h3>HTML Course</h3>
        <YouTube videoId="pQN-pnXPaVg" opts={opts} onReady={videoOnReady} />
      </div>
      <div className="youtube-card">
        <h3>Course Description</h3>
        <div className="author">
          <div className="author-icon">
            <img src={AuthorImg} alt="Author" className="author-img" />
          </div>
          <span>Traversy Media</span>
        </div>
        <div className="course-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            recusandae a quam iusto, delectus neque, fugiat autem deleniti
            architecto harum ullam numquam omnis accusantium maiores ad soluta.
            Doloremque obcaecati id alias? Maiores nesciunt aut molestiae sunt
            inventore molestias iusto? Ducimus enim quaerat similique unde?
            Aspernatur recusandae quo eius alias voluptatum?
          </p>
        </div>
        <div className="study-files">
          <button className="pdf-link"><PictureAsPdfIcon/>File.pdf</button>  
          <button className="zip-link"><FolderZipIcon/>File.zip</button>  
          <button className="css-link"><ArticleIcon/>File.css</button>  
        </div>
      </div>
    </main>
  );
}

export default Course;
