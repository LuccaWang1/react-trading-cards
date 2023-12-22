'use strict';

function Homepage() {
  return (
  <React.Fragment>
    <p>Hello, lovely visitor of ours!</p>
    <img src="/static/img/balloonicorn.jpg"/>
    <p><a href="/cards">cards page</a></p>
  </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));