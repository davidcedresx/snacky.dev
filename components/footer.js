export default function Footer () {
  return (
        <footer>
            <div className="container">
                <div className="row center-xs">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/david-cedr%C3%A9s-39b458176/" className="footer-link">Linkedin</a></li>
                        <li><a href="https://github.com/davidcedresx" className="footer-link">Github</a></li>
                        <li><a href="https://dev.to/davidcedresx" className="footer-link">Dev</a></li>
                        <li><a href="http://twitter.com/davidcedresx" className="footer-link">Twitter</a></li>
                    </ul>
                </div>
                <div className="row center-xs copyright">
                    <p>Copyright © 2021 David Cedrés. All rights reserved.</p>
                </div>
            </div>

            <style jsx>{`
                
            footer {
          font-size: 14px;
          margin-top: 32px;
          background-color: #eef6ff;
        }

        ul {
          padding-left: 0;
          list-style: none;
        }

        ul li {
          display: inline-block;
          padding: 0 16px;
        }

        ul li a {
          margin-bottom: 10px;
          color: #444;
          text-decoration: none;
        }

                `}</style>
        </footer>
  )
}
