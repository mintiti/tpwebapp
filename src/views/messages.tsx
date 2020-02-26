import * as React from 'react'
import Layout from './layout'

import QuestionBlock from '../components/question'
import MessageInput from '../components/messageInput'
import { Channel, Question } from '../models'

interface MessagesProps {
  appName: string,
  channel: Channel
  channels: Array<Channel>
  activeChannel?: Channel
  // activeQuestion?: Question
  onQuestionAsked: (channelId: string, question: string) => void
  onQuestionAnswered: (channelId: string, questionId: string, content: string) => void
  toggleAnswerMode: (q: string) => void
}

interface MessagesState {
  currentMessage: string
  currentChannel? : Channel
}

class Messages extends React.Component<MessagesProps, MessagesState> {

  state: MessagesState = {
    currentMessage: '',
    currentChannel : this.props.activeChannel
  }

  render(){
    return (
      <Layout {...this.props}>
        <div className="messages_container">
          <div className="messages_body">
            <div className="message_list_scroll">
              {
                this.props.channel.questions &&
                this.props.channel.questions.map((question, index) => this.renderQuestion(question, index))
              }                      
            </div>
          </div>
          <footer className="messages_footer">
            <form onSubmit={this.sendMessage}>
              <MessageInput placeholder="Ask a question on #Channel" value={this.state.currentMessage} onChange={this.updateQuestion} />
            </form>
            <div className="messagesContainer_notifBar" />
          </footer>
        </div>
      </Layout>
    )   
  }

  updateQuestion = (currentMessage: string) => {
    this.setState({ currentMessage });
  }

  sendMessage = (event: any) => {
    event.preventDefault();

    //@todo
  }

  renderQuestion = (question: Question, index: number) => {
    return <QuestionBlock question={question} key={index} toggleAnswerMode={this.props.toggleAnswerMode} />
  }
}

export default Messages
