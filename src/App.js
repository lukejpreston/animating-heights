import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import $ from 'jquery'


const NoAnimCard = ({ title, first }) => {
  const [active, setActive] = useState(false)
  return (
    <div className={`card ${active ? 'is-active' : 'is-inactive'} is-no-anim ${first ? 'is-first' : 'is-not-first'}`}>
      <header className="card-header" onClick={() => setActive(!active)}>
        <p className="card-header-title">
          {title}
        </p>
        <a href='#' className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      {active
        ? <>
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href='#'>@bulmaio</a>. <a href='#'>#css</a> <a href='#'>#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer className="card-footer">
            <a href='#' className="card-footer-item">Save</a>
            <a href='#' className="card-footer-item">Edit</a>
            <a href='#' className="card-footer-item">Delete</a>
          </footer>
        </>
        : null
      }
    </div>
  )
}

const JSCard = ({ id, title, first }) => {
  const [active, setActive] = useState(false)
  return (
    <div className={`card ${active ? 'is-active' : 'is-inactive'} is-js ${first ? 'is-first' : 'is-not-first'}`}>
      <header className="card-header" onClick={() => {
        if (!active) $(`#${id}`).show('fast')
        else $(`#${id}`).hide('fast')
        setActive(!active)
      }}>
        <p className="card-header-title">
          {title}
        </p>
        <a href='#' className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div id={id} style={{ display: 'none' }}>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href='#'>@bulmaio</a>. <a href='#'>#css</a> <a href='#'>#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
        <footer className="card-footer">
          <a href='#' className="card-footer-item">Save</a>
          <a href='#' className="card-footer-item">Edit</a>
          <a href='#' className="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>
  )
}


const PaddingAndMarginCard = ({ title, first = false }) => {
  const [active, setActive] = useState(false)
  return (
    <div className={`card ${active ? 'is-active' : 'is-inactive'} is-padding-and-margin ${first ? 'is-first' : 'is-not-first'}`}>
      <header className="card-header" onClick={() => setActive(!active)}>
        <p className="card-header-title">
          {title}
        </p>
        <a href='#' className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        {active
          ? <>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href='#'>@bulmaio</a>. <a href='#'>#css</a> <a href='#'>#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </>
          : null
        }
      </div>
      <footer className="card-footer">
        {active
          ? <>
            <a href='#' className="card-footer-item">Save</a>
            <a href='#' className="card-footer-item">Edit</a>
            <a href='#' className="card-footer-item">Delete</a>
          </>
          : null
        }
      </footer>
    </div>
  )
}

const Accessibility = () => <div>
  <p className='content has-text-danger has-text-centered'><b>WARNING</b>
    <br />This page is intentially broken.
  <br />I appologies in adavnce for any accessibility issues.
  <br />I am highlighting this behaviour for an article.</p>
  <div>
    <ul>
      <li>card that things which can be focused even though they are not present</li>
      <li>card that hides an important button</li>
      <li>card that animates so you can not toggle it</li>
      <li>card that moves important button off the screen</li>
    </ul>
  </div>
</div>

const Animation = () => <div>
  <div>
    <ul>
      <li>Slow animation vs fast animation</li>
      <li>Linear animation vs ease animation</li>
      <li>Ease and fast animation together</li>
    </ul>
  </div>
</div>

const Solutions = () => <div className='columns'>
  <div className='column'>
    <h2 className='subtitle'>Solution 1 - No animation</h2>
    <NoAnimCard title='No animation 1' first />
    <NoAnimCard title='No animation 2' />
    <NoAnimCard title='No animation 3' />
    <NoAnimCard title='No animation 4' />
  </div>
  <div className='column'>
    <h2 className='subtitle'>Solution 2 - JavaScript animation (using jQuery)</h2>
    <JSCard title='JavaScript animation 1' first id='card-1' />
    <JSCard title='JavaScript animation 2' id='card-2' />
    <JSCard title='JavaScript animation 3' id='card-3' />
    <JSCard title='JavaScript animation 4' id='card-4' />
  </div>
  <div className='column'>
    <h2 className='subtitle'>Solution 3 - Animate something else</h2>
    <PaddingAndMarginCard title='Padding and Margin animation 1' first />
    <PaddingAndMarginCard title='Padding and Margin animation 2' />
    <PaddingAndMarginCard title='Padding and Margin animation 3' />
    <PaddingAndMarginCard title='Padding and Margin animation 4' />
  </div>
</div>

const About = () => <div>
  <p className='content'>
    Something Something Something
  </p>
</div>

const Hero = () => <header>
  <section className="hero is-dark is-medium">
    <div className="hero-foot">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li className="is-active"><Link to='/'>About</Link></li>
            <li className="is-active"><Link to='/solutions'>Solutions</Link></li>
            <li className="is-active"><Link to='/accessibility'>Accessibility</Link></li>
            <li className="is-active"><Link to='/animation'>Animation</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</header>

export default () => {
  return (
    <>
      <Router>
        <Hero />
        <main>
          <div className='container'>
            <Switch>
              <Route path='/' component={About} exact />
              <Route path='/solutions' component={Solutions} />
              <Route path='/accessibility' component={Accessibility} />
              <Route path='/animation' component={Animation} />
            </Switch>
          </div>
        </main>
      </Router>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            You can read the whole article at <a href='https://medium.com'>HERE</a>
          </p>
        </div>
      </footer>
    </>
  );
}
