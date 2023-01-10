import React, { Component } from 'react'
import { FallBackUI } from '../Components/FallBackUI';

export class ErrorBoundary extends Component {

    state={
        hasError: false
    }
static getDerivedStateFromError(error){
    console.log("getDerivedStateFromError executed");
    console.log("error",error);
    return {hasError:true}
}

componentDidCatch(error,info){
    console.log("info",info);
    console.log("componentDidCatch executed");
}

  render() {
    if(this.state.hasError){
        return <FallBackUI />
    }else{
        return this.props.children
    }
  }
}

export default ErrorBoundary