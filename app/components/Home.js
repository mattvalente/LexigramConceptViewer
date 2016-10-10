var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');

function Home () {
  return (
    <MainContainer>
      <h1>Lexigram Concept Viewer</h1>
      <p className='lead'>Compare two medical concepts</p>
      <Link to='/conceptOne'>
        <button type='button' className='btn btn-lg btn-success'>Search for Terms</button>
      </Link>
    </MainContainer>
  )
}

module.exports = Home;
