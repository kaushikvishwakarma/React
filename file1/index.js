// // const h1=document.createElement("h1")
// // h1.textContent = "This is an imperative way to program"
// // h1.className="header"
// // document.getElementById("root").append(h1)
// const page=(<div>
//     <h1 className="header">Hello bro</h1>
//     <p>This is a paragraph</p>
// </div>)
// console.log(page)
// ReactDOM.render(page,document.getElementById("root"))


const navbar=(
    <nav>
        <h1>Kaushik's Restro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
            </ul> 
    </nav>
)
ReactDOM.render(navbar,document.getElementById("root"));