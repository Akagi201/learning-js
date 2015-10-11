var Child = require('./Child.jsx')

var Parent = React.createClass({
    render: function () {
        return (
            <div>
            <div>Parent</div>
                <Child/>
            </div>
        )
    }
});

module.exports = Parent;
