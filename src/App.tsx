import React from 'react';
import Home from './views/home'
import Messages from './views/messages'
import NewChannel from './views/newChannel'
import { Channel, User, Question, DefaultUser } from './models'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom'



function f2(){}

function f3(){}

const channel: Channel = {
  name: "channel 1",
  questions: []
}

type AppState = {
  channel: Channel
  channels: Array<Channel>
  user: User
}

type AppProps = {
  appName: string
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    channel: channel,
      channels: [],
    user: DefaultUser
    }

 

  render(){
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/messages/:channelId" children={<this.MessagesRoute />} />              
            <Route path="/newChannel" children={this.NewChannelRoute} />
            <Route path="/addUser" children={ this.HomeRoute } />
            <Route path="/" children={ this.LoginRoute } />          
          </Switch>
        </div>
      </Router>
    );
  }

  MessagesRoute = () => {
      let { channelId } = useParams();
      return <Messages onQuestionAsked={this.f1.bind(this)} onQuestionAnswered={f2} toggleAnswerMode={f3} {...this.state} {...this.props} />
  } 
  
  NewChannelRoute = () => {
    return <NewChannel onNewChannel={this.addChannel} />
  }

  HomeRoute = () => {
    return <Home onUpdateUser={(user: User) => {}} {...this.state} {...this.props} />
  } 
  
  LoginRoute = () => {
    return <Home onUpdateUser={(user: User) => {this.changeUser(user)}} {...this.state} {...this.props} />
  }

  changeUser = (user : User) => {
    this.setState({
      user : user
    })
  }

  addChannel = (name: string) => {
    const newChannel = {
      name: name,
      questions: []
    }
  
    this.setState((state, props) => {
      return {
        channels: [...state.channels, newChannel]
      }
    })
    }

    f1(channelId: string, question: string) {


        this.setState((state, props) => {
            const newQuestion: Question = {
                id: question,
                user: state.user,
                content: question,
                answers: []

            }

            return {
                channel: {
                    name: channelId,
                    questions: [...state.channel.questions, newQuestion]
                }
            }
        })
}


   
}

export default App;
