import React, { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	state: State = {
		hasError: false
	};

	static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('Uncaught error:', error, errorInfo);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
					<ErrorImageText>Somthing went wrong. PLease try again later!</ErrorImageText>
				</ErrorImageOverlay>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
