var React = require('react');

module.exports = React.createClass({
	render() {
		return <pre>{JSON.stringify(this.props)}</pre>;
	}
});