import './Layout.css'
import Navbar from './Navbar';

function Layout(props) {

    return (
        <div>
            <Navbar />
            <main className="main">{props.children}</main>
        </div>
    );
}

export default Layout;