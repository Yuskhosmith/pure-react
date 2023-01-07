const Person = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation),
    ]);
};
const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title' }, 'React IS rendered'),
        React.createElement(Person, { name: 'Yusuf', occupation: 'Engineer' }, null),
        React.createElement(Person, { name: 'Femi', occupation: 'Engineer' }, null),
        React.createElement(Person, { name: 'AG', occupation: 'Analyst' }, null),
    ]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
