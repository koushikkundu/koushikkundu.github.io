import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! <br />
          Hope you all are fine. <br />
          The app is under construction.
        </p>
        <a
          className="App-link"
          href="https://linkedin.com/in/koushikkundu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My LinkedIn Profile
        </a>
      </header>
      <footer class="App-footer">
    <div>
        <a href="https://www.leetcode.com/kouscodes">LeetCode</a>
        <a href="https://www.github.com/koushikkundu">GitHub</a>
        <a href="https://www.hackerrank.com/kouscodes">HackerRank</a>
    </div>
</footer>


    </div>
  );
}

export default App;
