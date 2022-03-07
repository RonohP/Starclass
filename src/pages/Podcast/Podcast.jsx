import React from 'react';
import AuthorImg from "../../images/profile.jpg";
import "../Podcast/Podcast.css";
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function Podcast() {
    return (
        <main className="podcast-container">
        <h3 className="podcasts-title">Podcasts</h3>
        <div className="podcast">
          <div className="podcast-card">
            <h3 className="podcast-title">Q&A: Web3, TypeScript, New Frameworks, and More!</h3>
            <div className="podcast-author">
              <div className="podcast-author-icon">
                <img src={AuthorImg} alt="Author" className="podcast-author-img" />
              </div>
              <span>HTML All The Things - Web Development, Web Design, Small Business</span>
            </div>
            <p className="podcast-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              ipsam quas iure sint, sapiente doloremque exercitationem corporis
              accusamus, itaque aliquid amet consequatur soluta! Aliquid
              repudiandae libero alias ab nostrum illum repellat minus, doloribus
              eaque, fuga numquam nesciunt! Assumenda animi debitis accusamus
              harum, nihil repellat? Eum qui soluta est esse nesciunt?
            </p>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9wb2RjYXN0Lmh0bWxhbGx0aGV0aGluZ3MuY29tL2ZlZWQueG1s/episode/aHRtbGFsbHRoZXRoaW5ncy5wb2RiZWFuLmNvbS9hNTBkNmYxOC05NmI3LTM4ZmEtYTM0Ni1jNDdhMzZiYjY1MzU?sa=X&ved=0CAQQ8qgGahcKEwjgiMPBrrL2AhUAAAAAHQAAAAAQAg"
              className="podcast-link" target="_blank" rel="noopener noreferrer"
            >
              Listen to the podcast <ReadMoreIcon/>
            </a>
          </div>  

          <div className="podcast-card">
            <h3 className="podcast-title">OAuth Explained</h3>
            <div className="podcast-author">
              <div className="podcast-author-icon">
                <img src={AuthorImg} alt="Author" className="podcast-author-img" />
              </div>
              <span>JavaScript Jabber</span>
            </div>
            <p className="podcast-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              ipsam quas iure sint, sapiente doloremque exercitationem corporis
              accusamus, itaque aliquid amet consequatur soluta! Aliquid
              repudiandae libero alias ab nostrum illum repellat minus, doloribus
              eaque, fuga numquam nesciunt! Assumenda animi debitis accusamus
              harum, nihil repellat? Eum qui soluta est esse nesciunt?
            </p>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5mZWVkd3JlbmNoLmNvbS9qcy1qYWJiZXIucnNz/episode/NDE5MGRjNGYtMTY5MS00YTcyLTlmZTItNmUzNWMzMTYyYzc3?sa=X&ved=0CAQQ8qgGahcKEwiAgpfDr7L2AhUAAAAAHQAAAAAQAg"
              className="podcast-link" target="_blank" rel="noopener noreferrer"
            >
              Listen to the podcast <ReadMoreIcon/>
            </a>
          </div>  

        </div>
      </main>
      );
}

export default Podcast;