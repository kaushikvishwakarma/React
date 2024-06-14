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


// const navbar=(
//     <nav>
//         <h1>Kaushik's Restro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//             </ul> 
//     </nav>
// )
// ReactDOM.render(navbar,document.getElementById("root"));
// const page=(<div>
//     <h1>My awesome website in react</h1>
//     <h3>Reasons I love </h3>
//     <ol>
//         <li>bla bla</li>
//     </ol>
// </div>)
// function Tempy(){
//     return(
//     <div>
//         <h1>Kaushik's Restro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//             </ul> 
//     </div>
//     )
// }


// ReactDOM.render(<Tempy />,document.getElementById("root"))



// function Lolopopo(){
// return (<div>
//     <ol>
//         <li>BLA BLA BLA</li>
//         <li>PHEW PHEW</li>
//         <li>LANDROVER LELE MERA BC</li>
//     </ol>
// </div>
// )    
// }

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer >
            <small className="smallfooter">© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div >
            <h1 className="smallfooter">Reasons I'm excited to learn React</h1>
            <ol>
                <li className="smallfooter">It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li className="smallfooter">I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />,document.getElementById("root"))