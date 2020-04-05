import React, {Component, Suspense} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
// import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'))

class App extends Component {

    state = {show: false}
    modeHandler = () => {
        this.setState(prevState => {
            return {show: !prevState.show}
        })
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.modeHandler}>
                    MODE toggle:
                    {this.state.show?<span>Posts (Lasy Loading)</span>:<span>User</span>}
                </button>
                {this.state.show ? (<Suspense fallback={<div>LOADING...</div>}>
                    <Posts/>
                </Suspense>) : <User/>
                }
                <BrowserRouter>
                    <React.Fragment>
                        <nav>
                            <NavLink to="/user">User Page</NavLink> |&nbsp;
                            <NavLink to="/posts">(Lazy loading) Posts Page</NavLink>
                        </nav>
                        <Route path="/" component={Welcome} exact/>
                        <Route path="/user" component={User}/>
                        {/*lazy Loading with Browser Routing*/}
                        <Route path="/posts" render={
                            () => (<Suspense fallback={<div>LOADING...</div>}>
                                    <Posts/>
                                </Suspense>
                            )
                        }
                        />
                    </React.Fragment>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
