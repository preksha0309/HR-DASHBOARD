import React from 'react';

class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error: error.message };
  }

  render() {
    if (this.state.error) {
      return <div className="p-4 text-red-600">Error: {this.state.error}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;