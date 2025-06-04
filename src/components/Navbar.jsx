import CartWidget from "./CartWidget";

function Navbar ({link1, link2, link3}){
return(
    <nav>
        <h1>Muju</h1>
    <ul>
    <li><a href="#">{link1}</a></li>
    <li><a href="#">{link2}</a></li>
    <li><a href="#">{link3}</a></li>
    </ul>
    <CartWidget/>
    </nav>

)
}

export default Navbar;