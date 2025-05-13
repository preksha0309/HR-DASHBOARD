import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-100 text-red-700 rounded-lg">
          <h3 className="font-semibold">Something went wrong</h3>
          <p>{this.state.error?.message || 'An error occurred'}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;