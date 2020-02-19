import * as React from 'react'
// import { Link } from 'react-router-dom'
import { Channel } from '../models'

interface ChannelProps {
  channels: Array<Channel>
}

export default class ChannelSidebar extends React.Component<ChannelProps, {} > {

  render() {
    return (
      <div className="sideBar_channels">
        <h2 className="sideBar_channels_title">
          Channels <a href="/newChannel"><button className="addButton sideBar_channels_add">+</button></a>
        </h2>
        <ul>
        {
          this.props.channels.map(this.renderChannelLink)
        }
        </ul>
      </div>  
    )
  }

  renderChannelLink = (channel: Channel, index: number) => {
    return (
      <li key={index}>
        <a href={`/messages/${channel.name}`} className="sideBar_channel sideBar_channels_link" key={index}># {channel.name}</a>
      </li>
    )
  }
}