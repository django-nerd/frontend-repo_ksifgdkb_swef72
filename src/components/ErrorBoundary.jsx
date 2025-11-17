import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // Optionally log
    // console.error('UI ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[40vh] w-full flex items-center justify-center p-6">
          <div className="max-w-xl w-full text-center rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 text-zinc-200">
            <p className="font-semibold text-white">Something went wrong rendering this section.</p>
            <p className="mt-2 text-sm text-zinc-400">We disabled heavy visuals so you can continue.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
