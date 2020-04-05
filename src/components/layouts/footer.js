import React from 'react';

const ComponentFooter = () => {
    return (
        <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Code And Launch</h5>
              <p className="grey-text text-lighten-4">Nova Cafe is a platform for people who code startups.</p>
              <p className="grey-text text-lighten-4">Suggest how we can improve Nova Cafe, thanks! Tap the button below to suggest something.</p>
              <a class="waves-effect waves-light pink btn"  target="_blank" href="https://forms.gle/b4r9K5FkuRzuf15w6">button <i class="material-icons right">assignment</i></a>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="grey-text text-lighten-3"  target="_blank" href="https://github.com/digvijaysrathore">Github</a></li>
                <li><a className="grey-text text-lighten-3"  target="_blank" href="https://twitter.com/novadigvijay">Twitter</a></li>
                <li><a className="grey-text text-lighten-3" target="_blank" href="https://instagram.com/digvijaysrathore">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          &hearts; Nova
          <a className="grey-text text-lighten-4 right" target="_blank" href="https://github.com/digvijaysrathore/novacafe">Open Source</a>
          </div>
        </div>
      </footer>
    )
}

export default ComponentFooter;