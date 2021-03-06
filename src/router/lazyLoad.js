//lazyLoad.js 路由懒加载
import React from 'react'

export default function lazyLoad(componentfn) {
  class LazyloadComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      const { default: component } = await componentfn()
      this.setState({ component })
    }
    render() {
      const C = this.state.component
      return C ? <C {...this.props} /> : null
    }
  }
  return LazyloadComponent
}
