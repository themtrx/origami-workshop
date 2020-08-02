import React, {Component} from 'react'
import Origami from '../origamis'
import style from './index.module.css'

class Posts extends Component {
  constructor(props){
      super(props)

      this.state ={
          origamis: []
      }
  }

  getOrigamis(){
      const {count} = this.props
      fetch(`http://localhost:9999/api/origami?count=${count}`)
      .then((res) => res.json())
      .then((origamis) => {
          this.setState({
              origamis
          })
      })
      .catch(err=> console.log(err))
  }

  componentDidMount(){
      this.getOrigamis()
  }

  renderOrigami(){
      const {origamis} = this.state

      return origamis.map((origami, index) => {
          return (
              <Origami key={origami._id} index={index} {...origami}/>
          )
      })
  }

  render(){
      return (
        <div className={style['origamis-wrapper']}>
            {this.renderOrigami()}
        </div>
      )
  }
}

export default Posts