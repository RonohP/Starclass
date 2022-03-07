import React from "react";
import AuthorImg from "../../images/profile.jpg";
import "../Blog/Blog.css";
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function Blog() {
  return (
    <main className="blog-container">
      <h3 className="blogs-title">Blogs</h3>
      <div className="blog">
        <div className="blog-card">
          <h3 className="blog-title">Learn basic HTML</h3>
          <div className="blog-author">
            <div className="blog-author-icon">
              <img src={AuthorImg} alt="Author" className="blog-author-img" />
            </div>
            <span>Traversy Media</span>
          </div>
          <p className="blog-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            ipsam quas iure sint, sapiente doloremque exercitationem corporis
            accusamus, itaque aliquid amet consequatur soluta! Aliquid
            repudiandae libero alias ab nostrum illum repellat minus, doloribus
            eaque, fuga numquam nesciunt! Assumenda animi debitis accusamus
            harum, nihil repellat? Eum qui soluta est esse nesciunt?
          </p>
          <a
            href="https://medium.com/hackernoon/learn-basic-html-be230361457"
            className="blog-link" target="_blank" rel="noopener noreferrer"
          >
            Read the full article <ReadMoreIcon/>
          </a>
        </div>

        <div className="blog-card">
          <h3 className="blog-title">Using WordPress</h3>
          <div className="blog-author">
            <div className="blog-author-icon">
              <img src={AuthorImg} alt="Author" className="blog-author-img" />
            </div>
            <span>Traversy Media</span>
          </div>
          <p className="blog-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            ipsam quas iure sint, sapiente doloremque exercitationem corporis
            accusamus, itaque aliquid amet consequatur soluta! Aliquid
            repudiandae libero alias ab nostrum illum repellat minus, doloribus
            eaque, fuga numquam nesciunt! Assumenda animi debitis accusamus
            harum, nihil repellat? Eum qui soluta est esse nesciunt?
          </p>
          <a
            href="https://codex.wordpress.org/Technical_Articles"
            className="blog-link" target="_blank" rel="noopener noreferrer"
          >
            Read the full article <ReadMoreIcon/>
          </a>
        </div>

        <div className="blog-card">
          <h3 className="blog-title">A Guide To Getting Started With The Graph</h3>
          <div className="blog-author">
            <div className="blog-author-icon">
              <img src={AuthorImg} alt="Author" className="blog-author-img" />
            </div>
            <span>Traversy Media</span>
          </div>
          <p className="blog-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            ipsam quas iure sint, sapiente doloremque exercitationem corporis
            accusamus, itaque aliquid amet consequatur soluta! Aliquid
            repudiandae libero alias ab nostrum illum repellat minus, doloribus
            eaque, fuga numquam nesciunt! Assumenda animi debitis accusamus
            harum, nihil repellat? Eum qui soluta est esse nesciunt?
          </p>
          <a
            href="https://camiinthisthang.hashnode.dev/the-complete-guide-to-getting-started-with-the-graph"
            className="blog-link" target="_blank" rel="noopener noreferrer"
          >
            Read the full article <ReadMoreIcon/>
          </a>
        </div>

        <div className="blog-card">
          <h3 className="blog-title">IoT Deployment – How to Secure and Deploy Internet of Things Devices</h3>
          <div className="blog-author">
            <div className="blog-author-icon">
              <img src={AuthorImg} alt="Author" className="blog-author-img" />
            </div>
            <span>Traversy Media</span>
          </div>
          <p className="blog-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            ipsam quas iure sint, sapiente doloremque exercitationem corporis
            accusamus, itaque aliquid amet consequatur soluta! Aliquid
            repudiandae libero alias ab nostrum illum repellat minus, doloribus
            eaque, fuga numquam nesciunt! Assumenda animi debitis accusamus
            harum, nihil repellat? Eum qui soluta est esse nesciunt?
          </p>
          <a
            href="https://www.freecodecamp.org/news/internet-of-things-deployments-getting-it-right/"
            className="blog-link" target="_blank" rel="noopener noreferrer"
          >
            Read the full article <ReadMoreIcon/>
          </a>
        </div>

      </div>
    </main>
  );
}

export default Blog;
