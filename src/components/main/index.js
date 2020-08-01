import React, {Component} from 'react'
import Origami from '../origamis'
import style from './index.module.css'

class Main extends Component {
    constructor(props){
        super(props)

        this.state ={
            origamis: []
        }
    }

    getOrigamis(){
        fetch('http://localhost:9999/api/origami')
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

        return origamis.map((origami) => {
            return (
                <Origami key={origami._id} {...origami}/>
            )
        })
    }

    render(){

        return(
            <div className={style.container}>
                <h1 className={style.title}>Origamis</h1>
                <div className={style['origamis-wrapper']}>
                    {this.renderOrigami()}
                </div>
            </div>
        )
    }
}

export default Main