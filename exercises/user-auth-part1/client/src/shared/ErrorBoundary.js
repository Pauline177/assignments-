import React,{Component} from 'react'

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
                error: null, errorInfo: null
        }
    }

    componentDidCatch(error, info){
        this.setState({error: error, errorInfo : info})
    }

    render(){
        if(this.state.errorInfo)
        return(
            <div>
                <summary>oops!!! something is not working as it should</summary>
                <details>
                    {this.state.error && this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        )
        return this.props.children
    }
}

export default ErrorBoundary