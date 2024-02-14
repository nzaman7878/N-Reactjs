//nested div

const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement(
            "h1",
            {},
            "I am a h1 tag"
        )
    )
);

// const heading = React.createElement(
//     "h1", 
//     {id : "heading", xyz : "abc"}, 
//     "Hello world from React!");

    // console.log(heading); //object

    console.log(parent);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);